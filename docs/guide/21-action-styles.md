---
layout: default
title: "Action styles"
permalink: /guide/action-styles/
parent: Guide
nav_order: 12
---

{% include base_path %}
{% include toc %}

This section describes the unified system for configuring the visual style of actions (buttons) across **OntimizeWeb**, decoupled from the underlying Angular Material button type.

## The `OActionStyle` model

Since version `18.0.0-next.7`, actions are described **semantically** instead of picking a Material button directive and colour one by one:

```typescript
type OActionVariant    = 'outline' | 'flat' | 'basic' | 'raised' | 'icon' | 'fab' | 'mini-fab';
type OActionImportance = 'primary' | 'warn' | 'default';

interface OActionStyle {
  variant?: OActionVariant;       // button shape (default: 'outline')
  importance?: OActionImportance; // semantic relevance (default: 'default')
  label?: string;                 // button text — literal or translation key (since 18.0.0-next.10)
}
```

- **`importance`** colours the action: `primary` → `var(--mat-sys-primary)`, `warn` → `var(--mat-sys-error)`, `default` → the Ontimize foreground tokens (`var(--o-fg-text)` / `var(--o-fg-icon)`). On light/transparent shapes (`outline`, `basic`, `icon`, the elevated `raised`) it colours the **text and icon**; on filled shapes (`flat`, `fab`, `mini-fab`) it colours the **container** instead, through Material's palette, keeping the label legible.
- **`variant`** maps to a Material button directive: `outline` → `mat-stroked-button`, `flat` → `mat-flat-button`, `basic` → `mat-button`, `raised` → `mat-raised-button`, `icon` → `mat-icon-button`, `fab` / `mini-fab` → `mat-fab` / `mat-mini-fab`.
- **`label`** is resolved with the `oTranslate` pipe, so it accepts either a literal string or a translation key.

## Configuring a component's own actions — `action-styles`

`o-form`, `o-table`, `o-grid`, `o-list` and `o-tree` accept an optional `action-styles` input: a `Record<string, OActionStyle>` keyed by the action's internal `attr`. It configures the built-in action buttons without wrapping them in an `o-button`.

```html
<o-grid entity="customers"
        [action-styles]="{
          insert:  { variant: 'flat', importance: 'primary', label: 'New customer' },
          refresh: { variant: 'basic' },
          delete:  { importance: 'warn' }
        }">
  ...
</o-grid>
```

The input also accepts a JSON string: `action-styles='{"insert":{"variant":"flat"}}'`.

The keys are each action's exact internal `attr`:

| Component | Built-in actions (`attr`) |
|---|---|
| `o-form` (toolbar) | `insert`, `update`, `edit`, `delete`, `refresh`, `undo`, `cancel` |
| `o-table` | `insert`, `refresh`, `delete`, … (a projected `o-table-button` resolves by its own `attr`) |
| `o-list` | `insert`, `refresh`, `delete` |
| `o-grid` | `insert`, `refresh` (no built-in `delete` button) |
| `o-tree` | `insert`, `refresh`, `delete` |

## Automatic rules

Every action renders as `outline` + `default` unless something else configures it. By default, **the create action is automatically highlighted as the single primary action**, and every built-in button keeps its historic text as its `label` default:

| Component | Automatic rule |
|---|---|
| `o-table` / `o-grid` / `o-list` / `o-tree` | the create action (`insert`) → `importance: primary` |
| `o-form` | the confirm button is `primary` in INSERT mode (`attr=insert`) and in UPDATE mode / editable-detail (`attr=update`) |

Override the automatic rule with `action-styles`, e.g. to remove the primary highlight from insert and mark delete as a warning:

```html
<o-list [action-styles]="{ insert: { importance: 'default' }, delete: { importance: 'warn' } }">
```

## Scope of each field per component

`importance` and `label` apply to **every** built-in action. `variant` applies wherever the button can change its Material directive:

| Where | `importance` | `variant` | `label` |
|---|---|---|---|
| `o-button` | ✅ | ✅ | ✅ |
| `o-table-button` | ✅ | ✅ | ✅ |
| `o-list` / `o-grid` toolbar (text mode, `show-buttons-text`) | ✅ | ✅ | ✅ |
| `o-form` toolbar (text mode, `show-header-actions-text`) | ✅ | ✅ | ✅ |
| `o-tree` built-in buttons | ✅ | — (always `outline`) | ✅ |

In icon-only mode (`show-buttons-text="no"` on list/grid, `show-header-actions-text="no"` on the form) toolbar buttons are always `mat-icon-button` and no text is rendered; `variant` applies in text mode and to the floating insert FAB.

## Custom buttons projected into a host — `OActionStyleProvider`

An `o-button` (or an `o-table-button`) **projected inside** an `o-table` / `o-grid` / `o-list` / `o-tree` / `o-form` resolves its style by its own `attr` from the host, through the `OActionStyleProvider` DI token. A custom button therefore adopts the host's `action-styles` automatically, without configuring it on the button itself:

```html
<o-table entity="invoices" [action-styles]="{ export: { variant: 'flat', importance: 'primary', label: 'Export invoice' } }">
  <o-table-button attr="export" icon="download" (onClick)="export()"></o-table-button>
  <!-- renders flat + primary, labelled "Export invoice", with no further configuration -->
</o-table>
```

An explicit `variant` / `importance` / `label` set directly on the button always takes precedence over what the host says.

## Application-wide configuration — `O_ACTION_STYLES_CONFIG`

Instead of repeating `[action-styles]` on every component, you can set the defaults **once** for the whole application through the `O_ACTION_STYLES_CONFIG` injection token — useful for branding and consistency. The `provideOActionStyles(...)` helper is the recommended way to provide it:

```typescript
import { provideOntimizeWeb, provideOActionStyles } from 'ontimize-web-ngx';

bootstrapApplication(AppComponent, {
  providers: [
    provideOntimizeWeb(CONFIG),
    provideOActionStyles({
      // baseline applied to EVERY action (replaces outline + default)
      default: { variant: 'flat' },
      // per-attr overrides, applied application-wide
      actions: {
        insert: { variant: 'flat', importance: 'primary', label: 'TABLE.BUTTONS.NEW' },
        delete: { importance: 'warn' }
      }
    }),
  ]
});
```

In an `AppModule` (NgModule) it is identical, inside `providers: [ provideOActionStyles({ ... }) ]`. If you prefer not to use the helper, provide the token directly:

```typescript
import { O_ACTION_STYLES_CONFIG } from 'ontimize-web-ngx';

{ provide: O_ACTION_STYLES_CONFIG, useValue: { actions: { insert: { variant: 'flat' } } } }
```

```typescript
interface OActionStylesConfig {
  default?: OActionStyle;                    // baseline applied to every action
  actions?: Record<string, OActionStyle>;     // per-attr overrides, application-wide
}

const O_ACTION_STYLES_CONFIG: InjectionToken<OActionStylesConfig>;
```

| Key | Effect |
|---|---|
| `default` | Base style applied to **every** action when nothing more specific defines it (e.g. `{ variant: 'flat' }` makes every button flat). |
| `actions[attr]` | Default **per action**, application-wide (e.g. every `insert` flat, every `delete` a warning). |

### Full precedence

Each field (`variant`, `importance`, `label`) is resolved independently, from highest to lowest precedence:

| Level | Source |
|---|---|
| 1 | The instance's own `[action-styles]` (template) |
| 2 | `O_ACTION_STYLES_CONFIG`'s `actions[attr]` (application-wide, per attr) |
| 3 | The component's automatic rule (e.g. the create action → `primary`) |
| 4 | `O_ACTION_STYLES_CONFIG`'s `default` (application-wide baseline) |
| 5 | Framework default (`outline` + `default`, no label) |

So a component's own `[action-styles]` always wins over the token for that instance; the token's per-attr entry (level 2) can override even the automatic primary highlight of the create action; and the token's `default` (level 4) never overrides that automatic highlight, since it sits below the automatic rules.

> The exact application-wide equivalent of `[action-styles]="{ insert: { variant: 'flat' } }"` set on one component is `provideOActionStyles({ actions: { insert: { variant: 'flat' } } })`. Use `default` only when you want the style to apply to **every** action, not just insert.

## CSS classes for advanced cases

Importance is materialized as three shared CSS classes (defined in `o-button-theme.scss`), in case you need to colour your own Material button the same way as the framework's:

```html
<button mat-stroked-button class="o-button--importance-primary">…</button>
<button mat-stroked-button class="o-button--importance-warn">…</button>
<button mat-stroked-button class="o-button--importance-default">…</button>
```

A `flat` + `default` action renders as a neutral dark solid button (instead of Material 3's default primary-tinted fill) via the `o-action--filled-default` class, recolourable with the `--o-action-filled-default-bg` / `--o-action-filled-default-fg` CSS custom properties set at `:root`.

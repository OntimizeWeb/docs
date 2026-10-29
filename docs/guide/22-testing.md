---
layout: default
title: "Testing (data-testid)"
permalink: /guide/testing/
parent: Guide
nav_order: 13
---

{% include base_path %}
{% include toc %}

Since `18.0.0-next.13`, **OntimizeWeb** has official, library-wide support for `data-testid`, for E2E test frameworks such as Playwright or Cypress.

## Design principle

`data-testid` is always forwarded to the actual **native DOM element** the user interacts with — an `<input>`, a `<button>`, a `mat-radio-group` — **never** to the Angular component's own host tag (`<o-text-input>`, `<o-table>`...), unless the host *is* that element (e.g. `o-button`'s rendered `<button>`). It is entirely optional: components with no `data-testid` set render exactly as before.

## Falls back to `attr`

On every component that has both `data-testid` and `attr` — form inputs, `o-button`, `o-button-toggle`, `o-table`/`o-list`/`o-grid`/`o-tree`, and `o-bar-menu`'s menu items (`o-bar-menu-group`, `o-bar-menu-item`, `o-locale-bar-menu-item`) — leaving `data-testid` unset falls back to the component's own `attr`:

```html
<o-text-input attr="name"></o-text-input>
```
```html
<input data-testid="name">
```

`attr` is already a stable, meaningful identifier on these components (it's what `[id]="getAttribute()"` already uses), so most components get a sensible test id for free without setting both. Set `data-testid` explicitly only when you need a different value than `attr`. Two components have no `attr` input at all, so they have no fallback either: `o-search-input` and `o-bar-menu` itself (the toggle icon — its menu items do fall back, since those do have `attr`).

## Simple components — one input, one element

Most components (form inputs, `o-button`, `o-button-toggle`) have a single interactive native element, so `data-testid` is applied as-is:

```html
<o-text-input attr="name" data-testid="customer-name"></o-text-input>
<o-button label="Save" data-testid="save-button"></o-button>
```

```html
<input data-testid="customer-name">
<button data-testid="save-button">
```

This is defined **once**, on the shared base classes, and inherited by every component built on them — not duplicated per component:

- `OFormDataComponent` (`DEFAULT_INPUTS_O_FORM_DATA_COMPONENT`): `o-text-input`, `o-integer-input`, `o-real-input`, `o-percent-input`, `o-currency-input`, `o-email-input`, `o-phone-input`, `o-nif-input`, `o-password-input`, `o-textarea-input`, `o-date-input`, `o-daterange-input`, `o-hour-input`, `o-checkbox`, `o-slide-toggle`, `o-slider`, `o-combo`, `o-radio`, `o-listpicker`, `o-html-input`, `o-image`, `o-file-input`.
- `o-button-toggle` (standalone, own `DEFAULT_INPUTS_O_BUTTON_TOGGLE`).
- `o-button` (standalone, own `DEFAULT_INPUTS_O_BUTTON`) — applied to whichever native `<button>` variant actually renders (basic/raised/stroked/flat/icon/fab/mini-fab).

A few components route it to a specific inner element rather than their outermost one:

- **`o-file-input`** exposes two ids off the same value: `data-testid` on the visible field, `${data-testid}-file-input` on the hidden native `<input type="file">`.
- **`o-listpicker`** and **`o-radio`** route it to the real interactive element (the visible search input / the `mat-radio-group`) rather than the hidden proxy `<input>` used only for label/error display.
- **`o-radio`**'s individual options also get `${data-testid}-option-${index}` on each `mat-radio-button`, independent of their `id` (which stays `groupId`-based — a `crypto.randomUUID()` regenerated on every component instance, so unlike the option's index it was never usable as a stable selector).

## Composite components — `data-testid` as a prefix

`o-table`, `o-list`, `o-grid` and `o-tree` (built on `AbstractOServiceBaseComponent`) have no single native element, so `data-testid` is used as a **prefix** for their built-in controls:

| Control | Resulting test id |
|---|---|
| Quick-filter input | `${data-testid}-quick-filter` |
| Insert button | `${data-testid}-insert` |
| Refresh button | `${data-testid}-refresh` |
| Delete button (`o-table` / `o-list`) | `${data-testid}-delete` |

```html
<o-table data-testid="customers-table" attr="customersTable" ...></o-table>
```
```html
<input data-testid="customers-table-quick-filter">
<button data-testid="customers-table-insert">...</button>
```

Two helper methods, defined once on `AbstractOServiceComponent`, build these:

```typescript
getDataTestId(attr: string): string | null       // `${data-testid}-${attr}`, or null if unset
getRowDataTestId(row: any): string | null        // `${data-testid}-row-${keyValues}`, or null
```

## Per-row content

`getRowDataTestId(row)` composes the component's `data-testid` with the row's key value(s) — read via the existing `extractKeysFromRecord`, so it needs `keys` to be set on the component.

**`o-table`** wires this automatically onto its own rows, since it renders them itself: the `<tr>`, the selection checkbox (`-checkbox` suffix), and the built-in `editButtonInRow` / `detailButtonInRow` cell (`-editButtonInRow` / `-detailButtonInRow` suffix). Table cell editors (text/integer/real/email/date/time/boolean) get their own `dataTestId` too, composing the row's test id with the column's `attr` — independent of `cellEditorId`, which stays a random internal id used only for `document.getElementById` focus lookups.

**`o-list`** and **`o-grid`** don't render row markup themselves — it's projected from your own template (`<ng-content>` for `o-list`, `item.template` for `o-grid`) — so there is nothing for the framework to wire automatically. `getRowDataTestId(row)` is public precisely so your own row template can call it directly, via a template reference variable:

```html
<o-list #pendingReviewsList attr="pendingReviewsList" keys="equipmentId" data-testid="pending-reviews" ...>
  @for (row of pendingReviewsList.dataArray; track row.equipmentId) {
    <mat-list-item [attr.data-testid]="pendingReviewsList.getRowDataTestId(row)" [o-list-item]="row">
      ...
    </mat-list-item>
  }
</o-list>
```

## App layout: sidenav, user menu, side bar-menu

- **`o-app-sidenav`**: the toggle icon (`sidenav-menu`), every menu item/group keyed by the item's own `menuItem.id` / `menuGroup.id` (the same value already used for `id` — comes from your menu configuration, not auto-generated), and the group's expand/collapse arrow icon.
- **`o-user-info`**: the menu trigger (`user-info-trigger`) and the settings/logout menu items (`menu-settings` / `menu-logout`).
- **`o-bar-menu`**: a `data-testid` input independent of its internal `id` (always an auto-generated random value, not consumer-settable), applied to the toggle icon. Its menu items (`o-bar-menu-group`, `o-bar-menu-item`, `o-locale-bar-menu-item`) accept the same input.

## Dialogs

`o-dialog` / `o-dialog-internal` (the shared alert/confirm dialogs behind `DialogService.alert/info/warn/error/confirm`, and the framework's own error/auth dialogs) expose their action buttons with **static** `data-testid`s — `dialog-ok`, `dialog-cancel`, `dialog-accept`, `dialog-delete`, `dialog-clear` depending on the dialog. Static ids are enough since only one modal dialog is normally open at a time.

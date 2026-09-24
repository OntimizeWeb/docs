---
layout: o-component
permalink: /extra-components/collection-editor/overview
title: "Collection Editor"
comp: collection-editor
parent: Extra-components
nav_order: 5
---
{% include base_path %}
{% include toc %}

## Introduction

The `o-collection-editor` component is a generic editor for **two-level collections**: a list of *groups*, each one holding its own list of *items*.

```text
Group
 ├── Item
 ├── Item
 └── Item

Group
 ├── Item
 └── Item
```

It provides the structural chrome of that collection — group headers with numbering, add/remove buttons, drag handles, the items block, the empty-state texts, the busy skeletons and the validation messages — and lets the user add, remove and reorder groups and items.

The component knows nothing about the domain it is editing. It is generic over two type parameters, `G` (group) and `I` (item), so the same component covers `Sections → Questions`, `Questions → Answers`, `Categories → Products` or `Blocks → Fields` without any change:

```ts
OCollectionEditorComponent<G, I>
```

![Collection editor]({{ "/assets/images/components/collection-editor/collection-editor.png" | absolute_url }}){: .comp-example-img}

### What it is *not*

`o-collection-editor` is **not a form builder**. It does not generate form controls and it never renders a domain control of its own:

```text
Form builder                o-collection-editor
     ↓                             ↓
generates form controls     edits a data structure
                                   ↓
                            the consumer decides which controls to render
```

Everything inside a group row or an item row comes from **your** projected templates (see [Projected templates](#projected-templates)), so you are free to use `o-text-input`, `o-combo`, `o-date-input`, a plain `<input>`/`<textarea>`, Angular Material controls (`mat-select`, `mat-checkbox`, ...) or anything else — the component has no dependency on Ontimize's own form inputs. `notifyChange()` (see [`notifyChange`: why it is needed](#notifychange-why-it-is-needed)) is a plain callback, so it works identically regardless of what you call it from. The one thing to remember when the control is not an Ontimize input: `[(ngModel)]` needs `[ngModelOptions]="{ standalone: true }"`, since there is no ambient `ControlContainer` inside a projected template (the same requirement an `o-text-input` would have with `[(ngModel)]` in this same spot) — see the [non-Ontimize controls demo]({{site.playgroundurl}}/main/data/collection-editor/native-controls).

The value the component exposes is always the plain array of groups:

```ts
G[]
```

Its internal bookkeeping (identity, `busy`, `invalid`, drag & drop state) never leaks into that value.

{: .note }
> This version has no remote persistence: there is no `service`, `entity`, `insert-method`, `update-method` or `delete-method`. The component emits `G[]` and the consumer persists it (see [Deferred removal](#deferred-removal-persist-then-remove) for the one place where the component waits for you).

## Form integration

This is the part to read first. `o-collection-editor` extends `OFormDataComponent`, the same base class as `o-text-input` or `o-combo`, so it works in the three usual contexts — but **the binding syntax is different in each one**, exactly as it is for every other Ontimize input.

### Inside an `<o-form>`: bind with `attr`

```html
<o-form service="templates" entity="template" keys="id">
  <o-collection-editor attr="sections" [create-group]="createSection" [create-item]="createQuestion">
    <!-- templates, see below -->
  </o-collection-editor>
</o-form>
```

Inside an `<o-form>` the component **registers itself** in the form under its `attr`: it owns its own `FormControl` and adds it to the form's `formGroup`. From then on it behaves like any other form field — its value travels in the form payload under `sections`, editing it marks the form dirty, and an invalid editor blocks the save.

{: .warning }
> `formControlName` does **not** work inside an `<o-form>`. Angular's `FormControlName` directive resolves its parent `ControlContainer` with `@Host()`, which stops the search at the boundary of the component that *declares* the element — your page. The `FormGroupDirective` that lives inside `o-form`'s own template is therefore never reached, and `OFormComponent` does not provide `ControlContainer`, so Angular throws *"formControlName must be used with a parent formGroup directive"*. Use `attr` inside `<o-form>`; that is how every Ontimize input works.

### Inside a native `<form [formGroup]>`: bind with `formControlName`

```html
<form [formGroup]="fg">
  <o-collection-editor formControlName="sections" [create-group]="createSection" [create-item]="createItem">
    <!-- templates -->
  </o-collection-editor>
</form>
```

```ts
fg = new FormGroup({
  sections: new FormControl<DemoGroup[]>([])
});
```

Here the component acts as a plain `ControlValueAccessor` (it provides `NG_VALUE_ACCESSOR`), and it also provides `NG_VALIDATORS`, so its structural errors reach *your* `FormGroup` and leave it `invalid` on their own (see [Validation](#validation)).

### Standalone, with no form at all: `[(ngModel)]`

```html
<o-collection-editor [(ngModel)]="groups" [create-group]="createGroup" [create-item]="createItem">
  <!-- templates -->
</o-collection-editor>
```

```ts
groups: DemoGroup[] = [];
```

"Context independent" means the component **works in all three**, not that the binding is written the same way in all three.

{: .note }
> `o-collection-editor` inherits the form-field surface of `OFormDataComponent` (`label`, `float-label`, `placeholder`, `appearance`, `clear-button`, projected `mat-error`, …). None of it applies to a collection editor: it is not a `mat-form-field`. Do not use those inputs — they are not documented in the [API]({{ base_path }}/extra-components/collection-editor/api). The inputs that *are* relevant from the base class are `attr`, `enabled` and `read-only`.

### Repeated projected inputs inside `<o-form>`: a unique `attr` is mandatory

This is the single trap everybody hits, so it deserves the long version.

An `<o-form>` registers its children **by `attr`**, in a map keyed by that string. If you project an Ontimize input with a **fixed** `attr` inside a template that is rendered once per group (or once per item), the form registers the **first** instance and rejects all the others, logging one error per rejected instance:

```text
There is already a component registered in the form with the attr: sectionName
```

With N groups only the first one works, and its value additionally leaks into the form payload under that fixed name.

The fix is to derive a **unique `attr` from the template context's `key`** — that is exactly why the key is exposed in the template context, and why it is a `string` you can concatenate:

```html
<o-form #oForm service="templates" entity="template" keys="id"
  (onBeforeInsert)="onBeforeSave($event)"
  (onBeforeUpdate)="onBeforeSave($event)">

  <o-collection-editor attr="sections" [create-group]="createSection" [create-item]="createQuestion"
    group-title-column="name" items-label="QUESTIONS">

    <ng-template oCollectionGroupFields let-group let-key="key" let-notifyChange="notifyChange">
      <o-text-input [attr]="'sectionName_' + key" [name]="'sectionName_' + key"
        label="SECTION_NAME" [(ngModel)]="group.name" (onChange)="notifyChange()" required="yes">
      </o-text-input>
    </ng-template>

    <ng-template oCollectionItem let-item let-key="key" let-notifyChange="notifyChange">
      <o-text-input [attr]="'question_' + key" [name]="'question_' + key"
        label="QUESTION_TEXT" [(ngModel)]="item.text" (onChange)="notifyChange()" required="yes">
      </o-text-input>
    </ng-template>

  </o-collection-editor>
</o-form>
```

Those dynamic `attr`s exist only so the form detects changes on the projected controls; they must **not** travel to the backend. Strip them in your `onBeforeInsert`/`onBeforeUpdate` handler, which receives the payload and can mutate it synchronously:

```ts
onBeforeSave(values: any): void {
  Object.keys(values).forEach(key => {
    if (key.startsWith('sectionName_') || key.startsWith('question_')) {
      delete values[key];
    }
  });
}
```

The editor's own value stays in `values.sections`, under its `attr`, untouched.

{: .note }
> Outside an `<o-form>` (native `[formGroup]` or `[(ngModel)]`) there is no registration by `attr`, so nothing of this applies: projected controls can use whatever names you like.

## Data binding

There is no remote data source in this version. Data comes either from the form (the `ControlValueAccessor` value) or from the `static-data` input, and the precedence is fixed:

```text
1. ControlValueAccessor value  (writeValue)
2. static-data
3. no data
```

* If the form (or `ngModel`) delivers a value, **that value is the source of truth** and `static-data` does not override it.
* If there is no form value, `static-data` is used as the initial value.
* `[static-data]="null"` and `[static-data]="undefined"` mean *empty collection*, not "keep the previous one" — the input is not sticky.
* `writeValue(null)`, `writeValue(undefined)` and `writeValue([])` all reset the editor to an empty collection.

```html
<o-collection-editor [static-data]="groups" [create-group]="createGroup" [create-item]="createItem">
  <!-- templates -->
</o-collection-editor>
```

```ts
groups: DemoGroup[] = [
  { id: '1', name: 'General', items: [{ id: '1', text: 'Serial number' }] },
  { id: '2', name: 'Safety', items: [] }
];
```

### Reading and writing the items of a group

The component cannot assume that the items live in a property called `items`, so the property name is configurable:

```ts
@Input('group-items-column') groupItemsColumn: string = 'items';
```

If your model nests the children under a different name, point the editor at it:

```html
<o-collection-editor group-items-column="questions" ...>
</o-collection-editor>
```

```ts
interface Section {
  id?: string;
  name: string;
  questions: Question[];
}
```

The component reads `group[groupItemsColumn]` to seed a group's items and writes the current items back onto that same property on every change (add, remove, reorder or `notifyChange()`), so a group handed to `create-item`, the `can-remove-*` predicates, the removal handlers, the outputs and the emitted value always carries its own, up to date children.

{: .note }
> A missing property is treated as an empty collection. A *present* value that is not an array is a configuration mistake — the component logs a `console.warn` once and treats those groups as empty rather than throwing.

{: .warning }
> This replaced an earlier pair of accessor functions (`group-items` / `with-group-items`). That pair could be half-configured, or configured with the two halves pointing at different properties, and either mistake lost every item edit silently. If you are migrating from that API, replace `[group-items]="readX"` / `[with-group-items]="writeX"` with `group-items-column="x"` and delete the two functions — there is no function escape hatch any more.

### Creating new elements

```ts
@Input('create-group') createGroup?: (index: number) => G;
@Input('create-item')  createItem?: (group: G, index: number) => I;
```

```ts
createSection = (index: number): Section => ({ name: '', questions: [] });
createQuestion = (section: Section, index: number): Question => ({ text: '' });
```

If `create-group` is not provided, the *add group* button stays disabled; the same goes for `create-item` and *add item*. Nothing throws at runtime.

## Projected templates

Two `ng-template` directives define the editable content of a row. Both are optional, and both receive a rich context.

### Group template: `oCollectionGroupFields`

```html
<ng-template oCollectionGroupFields let-group let-key="key" let-invalid="invalid"
  let-disabled="disabled" let-notifyChange="notifyChange">
  <o-text-input [attr]="'groupName_' + key" [(ngModel)]="group.name"
    [enabled]="!disabled" (onChange)="notifyChange()"></o-text-input>
  @if (invalid) {
    <span class="my-group-error">{{ 'MY_APP.GROUP_INVALID' | oTranslate }}</span>
  }
</ng-template>
```

| Context name | Type | Description |
|---|---|---|
| `$implicit` | `G` | The group value. Lets you write `let-group` with no name. |
| `group` | `G` | The group value, named. |
| `key` | `OCollectionKey` (`string`) | Identity of the group. Use it to build unique `attr`s and DOM ids. |
| `index` | `number` | Position of the group in the collection. |
| `busy` | `boolean` | `true` while a deferred operation is pending on this group. |
| `invalid` | `boolean` | `true` when this group has fewer items than `min-items-per-group`. |
| `disabled` | `boolean` | `true` when the editor is disabled or read-only, so your own controls can follow. |
| `notifyChange` | `() => void` | Call it after mutating the group so the new value is emitted. |

### Item template: `oCollectionItem`

```html
<ng-template oCollectionItem let-item let-key="key" let-groupKey="groupKey"
  let-disabled="disabled" let-notifyChange="notifyChange">
  <o-text-input [attr]="'itemText_' + key" required="yes" [(ngModel)]="item.text"
    [enabled]="!disabled" (onChange)="notifyChange()"></o-text-input>
</ng-template>
```

| Context name | Type | Description |
|---|---|---|
| `$implicit` | `I` | The item value. Lets you write `let-item` with no name. |
| `item` | `I` | The item value, named. |
| `group` | `G` | The group the item belongs to. |
| `key` | `OCollectionKey` (`string`) | Identity of the item. |
| `groupKey` | `OCollectionKey` (`string`) | Identity of the containing group. |
| `groupIndex` | `number` | Position of the group in the collection. |
| `itemIndex` | `number` | Position of the item inside its group. |
| `busy` | `boolean` | `true` while a deferred operation is pending on this item. |
| `disabled` | `boolean` | `true` when the editor is disabled or read-only. |
| `notifyChange` | `() => void` | Call it after mutating the item so the new value is emitted. |

{: .note }
> There is no `invalid` in the item context: there is nothing structural to evaluate at the item level. A field's own validity (e.g. `required` above) is the projected input's responsibility, not this component's.

### `notifyChange`: why it is needed

The component cannot detect a mutation performed inside your template. A `[(ngModel)]="group.name"` writes straight into the object the component is holding, and no Angular output crosses the boundary. That is what `notifyChange()` is for: it re-emits the collection value (`onChange(G[])`) so the form — and your model — see the edit.

There **is** a safety net: every group container and every item container listens for `focusout` (which, unlike `blur`, bubbles) and emits when the focus leaves any control inside the row. That covers the most common case — typing in an input and forgetting the call.

{: .warning }
> The safety net does not make `notifyChange()` optional. Changes that never pass through focus — a toggle, an `o-combo` that closes on selection, a programmatic mutation from your own code — are only emitted if you call it. And forgetting it fails *intermittently*, not consistently: because the mutation happens on the very object the component holds, any later action that emits (adding an item, reordering, removing another group) will pick the forgotten change up too. Always call `notifyChange()`.

## Adding and removing

The chrome renders the *add group*, *add item* and *remove* buttons (all real `<button type="button">` elements, so they never submit the surrounding form) and reports every structural change through outputs:

| Output | Payload |
|---|---|
| `onGroupAdded` / `onGroupRemoved` | `{ group, index }` |
| `onItemAdded` / `onItemRemoved` | `{ group, item, groupIndex, itemIndex }` |
| `onGroupMoved` | `{ group, previousIndex, currentIndex }` |
| `onItemMoved` | `{ group, item, groupIndex, previousIndex, currentIndex }` |

### Vetoing a removal

```ts
canRemoveGroup = (group: Section, index: number): boolean => !group.locked;
canRemoveItem = (group: Section, item: Question): boolean => !item.answered;
```

```html
<o-collection-editor [can-remove-group]="canRemoveGroup" [can-remove-item]="canRemoveItem" ...>
```

These predicates are **synchronous**. When one returns `false` there is no confirmation dialog, no removal and no output.

### Confirmation dialog

Removals are confirmed through the standard `DialogService`, with the core keys `CONFIRM` / `MESSAGES.CONFIRM_DELETE` as defaults. Because that generic text is written for tables ("*…the selected items?*"), you will usually want your own:

```html
<o-collection-editor
  confirm-remove-group-title="CONFIRM"
  confirm-remove-group-message="MY_APP.DELETE_SECTION_CONFIRM"
  confirm-remove-item-message="MY_APP.DELETE_QUESTION_CONFIRM"
  ...>
```

Setting a message to `''` **skips the dialog** and removes directly, for collections where a confirmation would just be in the way.

### Deferred removal: persist-then-remove

By default a removal is local and immediate: the row leaves the array, the new value is emitted and only then the output fires — which means the row is already gone when you learn about it, so you cannot show progress on it or bring it back if the server refuses.

When you need to persist *before* removing, provide a handler:

```ts
@Input('remove-group-handler') removeGroupHandler?: (group: G, index: number) => Promise<boolean> | boolean;
@Input('remove-item-handler')  removeItemHandler?: (group: G, item: I, groupIndex: number, itemIndex: number) => Promise<boolean> | boolean;
```

```html
<o-collection-editor [remove-group-handler]="deleteSection" ...></o-collection-editor>
```

```ts
deleteSection = async (section: Section, index: number): Promise<boolean> => {
  if (!section.id) {
    return true;                       // never persisted: just drop it locally
  }
  try {
    await firstValueFrom(this.service.delete({ id: section.id }));
    return true;                       // persisted -> the row is removed
  } catch (err) {
    this.errorMessage = 'MY_APP.DELETE_SECTION_ERROR';
    return false;                      // failed -> the row stays exactly as it was
  }
};
```

The full removal flow, in this exact order:

1. `can-remove-group` / `can-remove-item` (synchronous veto). `false` → nothing happens, no dialog.
2. Confirmation dialog. If the user cancels → nothing happens.
3. **No handler** → remove from the array, emit the value, emit the output.
4. **Handler configured** → mark the row `busy` (its content is replaced by a skeleton and its actions are disabled), then wait:
   * resolves `true` → remove the row, clear `busy`, emit the value and the output;
   * resolves `false` **or throws** → nothing is removed, `busy` is cleared, no output. A throwing handler never leaves the row stuck in `busy`.

The target row is always resolved **by its `key`** right before it is removed, never by the index captured when the dialog opened: the array may have changed while you were awaiting. If that key no longer exists, the removal is silently aborted rather than deleting whatever now sits at that position. A second removal request for a key that already has one in flight is ignored, and its buttons are disabled meanwhile.

### Busy rows

`busy` is internal state; it is not part of `G[]`. Besides the deferred-removal flow, you can drive it yourself for your own async operations:

```ts
setGroupBusy(key: OCollectionKey, busy: boolean): void;
setItemBusy(groupKey: OCollectionKey, itemKey: OCollectionKey, busy: boolean): void;
```

```ts
@ViewChild('editor') editor: OCollectionEditorComponent<Section, Question>;

async saveSection(key: OCollectionKey, section: Section): Promise<void> {
  this.editor.setGroupBusy(key, true);
  try {
    await firstValueFrom(this.service.update(section));
  } finally {
    this.editor.setGroupBusy(key, false);
  }
}
```

A busy row keeps its approximate height (the content is replaced by an `ngx-skeleton-loader` placeholder, so there are no layout jumps), disables its actions and exposes `aria-busy="true"`.

{: .warning }
> Do not cache a `key` across an operation that reloads the data. If the `await` makes the parent re-inject values (typically: you save and `o-form` reloads), a row that was new switches from its synthetic identity to its real one and **its key changes**; the second `setGroupBusy(key, false)` would then match nothing. The methods are tolerant — they never throw, and they log a `console.warn` so the problem is diagnosable instead of silent — and incoming data always clears every `busy` flag, so the worst case is a skeleton that disappears early, not one that never goes away. Take the key from the template context or from the output payload at the moment you use it.

## Validation

**Scope: structural only.** This component validates the *shape* of the collection — how many groups, how many items per group — never the *content* of a field. `required`, `max`, `maxDate` and the like are already implemented by the Ontimize inputs you project (`o-text-input`, `o-date-input`...); that input registers on its own with the ancestor `<o-form>` (or your reactive form) and renders its own error. There is no `group-validator` / `item-validator` pair, and there won't be one — it would duplicate a responsibility that already has an owner. If you need a section name or a question text to be mandatory, put `required` on the projected input itself.

Two complementary channels, both fed by the same single pass over the collection, so they can never disagree.

### Inputs

```html
<o-collection-editor
  min-groups="1"
  min-items-per-group="1"
  ...>
```

{: .note }
> `min-groups` and `min-items-per-group` only **mark**; they never block. Removing the last group works, and leaves the component invalid. The only way to prevent a removal is `can-remove-group` / `can-remove-item`.

### Channel 1 — errors on the component's own control

The component owns a `FormControl` and puts its errors there, exactly like `Validators.required` on any other Ontimize input:

| Error key | Payload |
|---|---|
| `minGroups` | `{ required: number, actual: number }` |
| `minItemsPerGroup` | `{ required: number, actual: number, groups: OCollectionKey[] }` |

Query them with the inherited `hasError(name)` and `getErrorValue(name, prop)`. Note that `hasError()` requires the control to be `touched`, so a structural error is not visible until the control is touched (or `validateStructure()` marks it).

What this buys you per context:

* **Inside `<o-form>`**: that control *is* the one registered in the form's `formGroup`, so an invalid editor **blocks the save with no extra code**.
* **Native `[formGroup]` / `[(ngModel)]`**: the component also provides `NG_VALIDATORS` and implements `validate(control)`, returning the same error keys, so your own control becomes `invalid` too. (In the `<o-form>` path this is inert: with `attr` there is no Angular form directive on the element, so there is no duplicate validation.)

The messages are rendered inline by the component itself, in its own error area with `role="alert"`, using the `COLLECTION_EDITOR.VALIDATION.*` texts (overridable with `min-groups-text` / `min-items-text`). You can add your own keyed messages by pushing to the inherited `errorsData` field (`{ name, text }`), which `getActiveOErrors()` then filters by `hasError(name)`.

{: .note }
> The component deliberately does **not** use `<mat-error>` / `*oMatError`: those only work inside a `<mat-form-field>`, and a collection editor is not a form field. As a consequence, the `lite` mode of `O_MAT_ERROR_OPTIONS` does not apply to this component — errors are always painted inline. The `mat-error`s of the controls *you* project are a different thing and behave normally.

### Channel 2 — `validateStructure()` and the form's validation function

For the summary dialog `o-form` shows before saving, expose the component's imperative validation through `form-data-validation-function`:

```html
<o-form service="templates" entity="template" keys="id" [form-data-validation-function]="validationFunction">
  <o-collection-editor #editor attr="sections" ...></o-collection-editor>
</o-form>
```

```ts
@ViewChild('editor') editor: OCollectionEditorComponent<Section, Question>;

validationFunction = (): OFormValidation => this.editor.validateStructure();
```

`validateStructure()` returns an `OFormValidation` (`{ valid, title?, messages? }`), recomputes every `invalid` flag, refreshes the control errors and marks the control as `touched` so the inline messages become visible. Its `messages` are **already translated text**, not i18n keys, because `o-form` passes them straight into an alert dialog.

It is equally usable outside an `<o-form>`: it is a plain object, so a native form can just read `.valid` (and `.messages`, if it wants to show them).

| Context | Inline messages | Save blocked by | Summary dialog |
|---|---|---|---|
| `<o-form>` (`attr`) | component's own control | automatic (`formGroup.valid`) | `validateStructure()` via `form-data-validation-function` |
| native `[formGroup]` | component's own control | `NG_VALIDATORS` | up to you |
| `[(ngModel)]` | component's own control | `NG_VALIDATORS` | n/a |

`invalid` is derived state, not accumulated: it is recomputed on every `validateStructure()` and on every local mutation that emits (add, remove, reorder, `notifyChange()`), so a row that starts satisfying its validator stops being flagged without another `validateStructure()` call.

## Drag & drop and ordering

Reordering is built on `@angular/cdk/drag-drop` and is on by default:

```html
<o-collection-editor groups-draggable="yes" items-draggable="no" ...></o-collection-editor>
```

* Groups live in a single drop list; dragging a group reorders the collection.
* Every group has its **own, unconnected** items drop list, so an item cannot be dragged into another group in this version.
* After any reorder the component emits the new value and fires `onGroupMoved` / `onItemMoved` with `previousIndex` and `currentIndex`.

### The order contract

**The order is the position in the array, and nothing else.** The component never writes an order field inside `G` or `I` — it does not know its name, or whether it exists at all. If your model has an explicit order column, derive it from the index when you build your payload:

```ts
buildPayload(sections: Section[]): TemplateSection[] {
  return sections.map((section, sectionIndex) => ({
    id: section.id,
    name: section.name,
    sortOrder: sectionIndex,
    questions: (section.questions ?? []).map((question, questionIndex) => ({
      id: question.id,
      text: question.text,
      sortOrder: questionIndex
    }))
  }));
}
```

{: .warning }
> If you reload the data ordered by that column **without** having updated it after the reorder, the next value that comes into the editor arrives in the old order and **the reorder appears to revert on its own**, with no error anywhere. This is the most disconcerting failure of the feature, and the fix is always the mapping above: persist the index as the order field before (or with) the save that triggers the reload.

### Keyboard reordering

The CDK provides no keyboard equivalent for dragging, so whenever `groups-draggable` / `items-draggable` are active the component also renders *move up* / *move down* actions on every row. They run exactly the same logic as a drop (same array move, same emitted value, same output) and the result is announced through an `aria-live` region, so reordering is usable without a pointer. Both the drag handles and these actions are disabled while the editor is disabled or read-only, and while a row has a removal in flight.

## Action styles

Every button the component renders — add group, add item, the drag handles, move up/down and remove — is an `o-button`, and follows the same [action-styles]({{ base_path }}/guide/action-styles/) system as `o-form` / `o-table` / `o-grid` / `o-list` / `o-tree`: an optional `action-styles` input, a `Record<string, OActionStyle>` keyed by the action's `attr`.

```html
<o-collection-editor
  [action-styles]="{
    'add-group': { variant: 'flat', importance: 'primary' },
    'remove-item': { importance: 'warn' }
  }"
  ...>
```

The input also accepts a JSON string, e.g. `action-styles='{"add-group":{"variant":"flat"}}'`.

| `attr` | Action |
|---|---|
| `add-group` | The *add group* button in the header |
| `add-item` | The *add item* button of one group's items block |
| `remove-group` | The remove button on a group |
| `remove-item` | The remove button on an item |
| `move-group-up` / `move-group-down` | The keyboard reorder buttons on a group |
| `move-item-up` / `move-item-down` | The keyboard reorder buttons on an item |
| `drag-group` / `drag-item` | The drag handles |

{: .note }
> Unlike `o-table` / `o-grid` / `o-list` / `o-tree`, this component does **not** auto-highlight `add-group` / `add-item` as `primary` — they render `outline` and `basic` respectively (their historic look) until `action-styles` says otherwise. The row actions (`remove-*`, `move-*`, `drag-*`) default to the `icon` variant, for the same reason: that is the compact shape they already had, and the framework default (`outline`) would otherwise make every row visibly bigger the moment this component adopted the shared system.

The application-wide `O_ACTION_STYLES_CONFIG` token (see the [guide]({{ base_path }}/guide/action-styles/#application-wide-configuration--o_action_styles_config)) applies here too, at the same precedence as everywhere else: instance `action-styles` > the token's per-`attr` `actions` > this component's own defaults above > the token's `default` > the framework default.

## E2E test ids

`data-testid` is inherited from `OFormDataComponent` (falls back to `attr` when not set) and, once configured, is forwarded to every actionable element the component itself renders — the same `data-${attr}` composition `o-table` / `o-list` / `o-grid` use, plus a per-row variant for group/item rows and their actions:

```html
<o-collection-editor data-testid="sections" ...>
```

| Rendered `data-testid` | Element |
|---|---|
| `sections-add-group` | The *add group* button |
| `sections-group-r1` | The group row itself (`r1` is that row's internal token, not its data key) |
| `sections-remove-group-r1`, `sections-move-group-up-r1`, `sections-drag-group-r1` | That group's own actions |
| `sections-add-item-r1` | The *add item* button inside group `r1` |
| `sections-item-r2` | An item row |
| `sections-remove-item-r2`, `sections-move-item-up-r2`, `sections-drag-item-r2` | That item's own actions |

No `data-testid` set → no `data-testid` attribute is rendered anywhere, rather than a meaningless static string. The per-row token is stable for the row's lifetime (see [Identity](#identity-group-keys-and-item-keys)) but is **not** the row's data key — do not parse it to recover `group.id`; use `getRowDataTestId(attr, key)` / the DOM query itself, not the string, to correlate a row with its data.

## Texts and i18n

No visible text is hardcoded. Every string is an input that accepts either a **literal** or an **i18n key**, resolved through the `oTranslate` pipe, whose fallback is the text itself — so a literal simply renders as it is:

```html
<o-collection-editor
  title="MY_APP.SECTIONS"
  description="MY_APP.SECTIONS_HELP"
  group-label="MY_APP.SECTION"
  items-label="MY_APP.QUESTIONS"
  item-label="MY_APP.QUESTION"
  add-group-text="MY_APP.ADD_SECTION"
  add-item-text="MY_APP.ADD_QUESTION"
  remove-group-tooltip="MY_APP.REMOVE_SECTION"
  remove-item-tooltip="MY_APP.REMOVE_QUESTION"
  drag-group-tooltip="COLLECTION_EDITOR.DRAG_GROUP"
  drag-item-tooltip="COLLECTION_EDITOR.DRAG_ITEM"
  empty-groups-text="MY_APP.NO_SECTIONS"
  empty-items-text="MY_APP.NO_QUESTIONS"
  min-groups-text="MY_APP.AT_LEAST_ONE_SECTION"
  min-items-text="MY_APP.AT_LEAST_ONE_QUESTION"
  ...>
```

i18n **parameter interpolation is not used**: these are plain keys, not templates.

The library ships the generic defaults under its own namespace, in `en` and `es`:

```text
COLLECTION_EDITOR.EMPTY_GROUPS
COLLECTION_EDITOR.EMPTY_ITEMS
COLLECTION_EDITOR.ADD_GROUP
COLLECTION_EDITOR.ADD_ITEM
COLLECTION_EDITOR.REMOVE_GROUP
COLLECTION_EDITOR.REMOVE_ITEM
COLLECTION_EDITOR.DRAG_GROUP
COLLECTION_EDITOR.DRAG_ITEM
COLLECTION_EDITOR.VALIDATION.MIN_GROUPS
COLLECTION_EDITOR.VALIDATION.MIN_ITEMS_PER_GROUP
```

{: .note }
> Domain copy — "Add section", "Add question" — is never part of the library: the component has no idea what a section is. It always comes from the inputs above. Where an equivalent key already exists in `ontimize-web-ngx` (`CONFIRM`, `MESSAGES.CONFIRM_DELETE`, `FORM_VALIDATION.*`), the component reuses it instead of duplicating it.

### Titles that come from the data

To show a value of the row itself in the header, name the column:

```html
<o-collection-editor group-title-column="name" group-description-column="description"
  item-title-column="text" item-description-column="hint" ...></o-collection-editor>
```

These are **read-only display** information, read from `group.value` / `item.value` on every render and never cached. They are not editable fields: to edit a value, put a control in the corresponding template.

{: .note }
> `group-label` / `item-label` (see [Texts and i18n](#texts-and-i18n)) are the fallback shown in the heading when there is no title-column value: just the translated word itself, e.g. `groupLabel | oTranslate`, with no row number appended (the numbered badge already covers that). A `group-title-column` value always takes priority over it. The fallback and a projected `oCollectionGroupFields` / `oCollectionItem` template are independent: the heading (index badge, label/title) sits in the group header, and the projected fields render in their own block right below it.

## Identity: `group-keys` and `item-keys`

Identity follows the same declarative convention as `o-table`'s `keys`: a `;`-separated list of columns.

```html
<o-collection-editor group-keys="id" item-keys="id" ...></o-collection-editor>
```

The resolved key is what the component uses to track rows in the DOM, to resolve the target of a removal, to address `setGroupBusy` / `setItemBusy` and to build unique `attr`s in your templates. It is always a `string`, so you can concatenate it (`'sectionName_' + key`), use it as a `Map` key and compare it with `===`. Its public type is `OCollectionKey`.

**Rows that are not persisted yet** — a group just created by `create-group`, whose `group-keys` columns are still empty — receive a **synthetic identity** instead, always prefixed `oce:` so it can never collide with a real one. It survives the copies the component makes when it emits, and it is invisible: it is stored under a `symbol` property, so it appears neither in `Object.keys()` nor in `JSON.stringify()`, never reaches the payload and never needs cleaning up on your side. As soon as the real key columns are filled (after saving and reloading), real identity takes over automatically, with no migration.

Two consequences worth knowing:

* **The key of a row changes** in that synthetic → real transition (and also if `group-keys` / `item-keys` arrive late, since existing rows then re-resolve their identity). This is the reason not to cache keys across a reload — see the warning in [Busy rows](#busy-rows).
* **Resolved keys must be unique.** If two groups (or two items of the same group) resolve to the same key, the component logs a `console.warn` identifying the duplicate and falls back to synthetic identity for the duplicates, so the view keeps working instead of failing with Angular's `NG0955`. It never throws.

{: .warning }
> **Known limitation.** A deep clone through `JSON.parse(JSON.stringify(...))` on your side drops the `symbol` property, so **unsaved** rows lose their synthetic identity and get a new one. In practice that means the row is destroyed and recreated: focus is lost while typing, and any key you had captured for it goes stale. Rows that are already persisted are unaffected, since their identity comes from the data. Avoid JSON round-trips on the collection you are editing; build your wire payload from it (as in [The order contract](#the-order-contract)) instead of cloning it.

## Basic example

```html
<o-collection-editor #editor
  [(ngModel)]="groups"
  group-keys="id" item-keys="id"
  group-title-column="name"
  [create-group]="createGroup" [create-item]="createItem"
  min-groups="1" min-items-per-group="1"
  add-group-text="MY_APP.ADD_GROUP" add-item-text="MY_APP.ADD_ITEM"
  (onGroupAdded)="log('group added', $event)"
  (onItemRemoved)="log('item removed', $event)">

  <ng-template oCollectionGroupFields let-group let-key="key" let-notifyChange="notifyChange">
    <o-text-input [attr]="'groupName_' + key" label="MY_APP.NAME" required="yes"
      [(ngModel)]="group.name" (onChange)="notifyChange()"></o-text-input>
  </ng-template>

  <ng-template oCollectionItem let-item let-key="key" let-notifyChange="notifyChange">
    <o-text-input [attr]="'itemText_' + key" label="MY_APP.TEXT" required="yes"
      [(ngModel)]="item.text" (onChange)="notifyChange()"></o-text-input>
  </ng-template>

</o-collection-editor>
```

```ts
interface DemoGroup {
  id?: string;
  name: string;
  items: DemoItem[];
}

interface DemoItem {
  id?: string;
  text: string;
}

groups: DemoGroup[] = [
  { id: '1', name: 'General', items: [{ id: '1', text: 'Serial number' }] }
];

createGroup = (index: number): DemoGroup => ({ name: '', items: [] });
createItem = (group: DemoGroup, index: number): DemoItem => ({ text: '' });

validateGroup = (group: DemoGroup): boolean => !!group.name?.trim();
validateItem = (item: DemoItem): boolean => !!item.text?.trim();

log(event: string, payload: any): void {
  console.log(event, payload);
}
```

## Demo
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/data/collection-editor).

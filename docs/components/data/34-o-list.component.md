---
layout: o-component
permalink: /components/data/list/overview
title: "List"
comp: list
parent: Data
grand_parent: Components
nav_order: 4
---

{% include base_path %}
{% include toc %}

The `o-list` component is used to display a series of items. There is different types of predefined list items you can add to the list component.

## Data binding

The o-list component supports data binding and you can command the component to display data either from *local* or *remote* data storage

The data array can be provided in two ways:
* Provide an array of objects to the `static-data` attribute.
* Configure the component to query the data from a service. Using `service` and `entity` attributes.
{: .note }
>Passing function calls directly to `static-data` (e.g. `[static-data]="getData()"`) is a **bad practice** that causes continuous re-evaluation and leads to malfunctioning behavior in components such as **o-list, o-table, o-grid and o-tree**.
Always pass a static reference instead (e.g. `[static-data]="data"`).

## List item
For adding a list component to your application you must insert the `o-list` in your page and include a `o-list-item` component wrapping the desired list item type you want to display. Check the different list items types below.
### List item: text

The `o-list-item-text` component is used to display list items with a maximum of two lines of text and a title.

```html
<o-list #list keys="id" columns="id;name;username;email" [static-data]="users"
  title="List" quick-filter="true" quick-filter-columns="name;username;email"
  refresh-button="true" insert-button="false" delete-button="false"
  selectable="false" detail-button-in-row="false"
  detail-button-in-row-icon="chevron_right" edit-button-in-row="false"
  edit-button-in-row-icon="edit" detail-mode="none" pagination-controls="false"
  page-size-options="5;10" insert-button-position="bottom" show-buttons-text="false">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-text #item  title="{% raw %}{{ row.username }}{% endraw %}"
      primary-text="{% raw %}{{ row.name }}{% endraw %}" secondary-text="{% raw %}{{ row.email }}{% endraw %}" (icon-action)="addToFavorites(row, item)">
    </o-list-item-text>
  </o-list-item>
</o-list>
```

![List item text]({{ "/assets/images/components/list/list-item-text.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/data/lists/list-item-text){:target="_blank"}.

### List item: avatar

The `o-list-item-avatar` component is used to display list items with an avatar and a maximum of two lines of text and a title.

```html
<o-list #list keys="id" columns="id;name;username;email" [static-data]="users"
  title="List" quick-filter="true" quick-filter-columns="name;username;email"
  refresh-button="true" insert-button="false" delete-button="false"
  selectable="false" detail-button-in-row="false"
  detail-button-in-row-icon="chevron_right" edit-button-in-row="false"
  edit-button-in-row-icon="edit" detail-mode="none">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-avatar #item  avatar="{% raw %}{{ row.thumbnailUrl }}{% endraw %}" title="{% raw %}{{ row.username }}{% endraw %}" primary-text="{% raw %}{{ row.name }}{% endraw %}"
      secondary-text="{% raw %}{{ row.email }}{% endraw %}" (icon-action)="addToFavorites(row, item)">
    </o-list-item-avatar>
  </o-list-item>
</o-list>
```

![List item avatar]({{ "/assets/images/components/list/list-item-avatar.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/data/lists/list-item-avatar){:target="_blank"}.

### List item: card

The `o-list-item-card` component is used to display a card list item with text, image and action buttons.

```html
<o-list #list attr="list" title="List" columns="id;name;username;email;street;phone" keys="id"
  [static-data]="data" refresh-button="true" quick-filter="true" insert-button="false"
  row-height="medium" detail-mode="none">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-card #item title="{% raw %}{{ row.username }}{% endraw %}" subtitle="{% raw %}{{ row.name }}{% endraw %}" show-image="true" image="{% raw %}{{ row.image }}{% endraw %}"
      action-1-text="ACTION 1" action-2-text="ACTION 2"
      (action-1)="onAction1()" (action-2)="onAction2()">
    </o-list-item-card>
  </o-list-item>
</o-list>
```

![List item card]({{ "/assets/images/components/list/list-item-card.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/data/lists/list-item-card){:target="_blank"}.

### List item: card image

The `o-list-item-card-image` component is used to display card list items with a big image.

```html
<o-list #list attr="list" title="List" columns="id;name;username;email;street;phone" keys="id"
  [static-data]="data" refresh-button="true" insert-button="false"
  quick-filter="no" row-height="medium" detail-mode="none">
  <o-list-item *ngFor="let row of #list.dataArray">
    <o-list-item-card-image title="{% raw %}{{ row.username }}{% endraw %}" subtitle="{% raw %}{{ row.name }}{% endraw %}" content="{% raw %}{{ row.body }}{% endraw %}"
      image="{% raw %}{{ row.image }}{% endraw %}" action-1-text="ACTION 1" action-2-text="ACTION 2" (action-1)="onAction1()" (action-2)="onAction2()"
       (icon-action)="onIconAction()" collapsible="false" collapsed="true">
    </o-list-item-card-image>
  </o-list-item>
</o-list>
```

![List item card image]({{ "/assets/images/components/list/list-item-card-image.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/data/lists/list-item-card-image){:target="_blank"}.

### Custom list item

When building an `o-list` component you can include one of the predefined list items the **OntimizeWeb** offers or you can include your own list item. For including a custom list item, **OntimizeWeb** offers the `o-list-item` directive that can be attached to an angular material list item (`mat-list-item`) or an angular material card (`mat-card`).

```html
<o-list #list attr="list" columns="id;name;username;email;street;phone" quick-filter-columns="name;username" [static-data]="data">
  <mat-card *ngFor="let row of list.dataArray" [o-list-item]="row">
    <mat-card-header>
      <div mat-card-avatar>
        <img src="{% raw %}{{ row.image }}{% endraw %}" fxFill />
      </div>
      <mat-card-title>{% raw %}{{ row.name }}{% endraw %}</mat-card-title>
      <mat-card-subtitle>{% raw %}{{ row.body }}{% endraw %}</mat-card-subtitle>
    </mat-card-header>
  </mat-card>
</o-list>
```

![List item custom]({{ "/assets/images/components/list/list-item-custom.png" | absolute_url }}){: .comp-example-img}

## Custom content in toolbar <span class='menuitem-badge'>new<span>

The `o-list` component allows to add content in the toolbar with the selector `o-list-toolbar` at start position by default but you can configure the position with `position='start'` at the start or at the end with the `position='end'`.

If the selector `o-list-toolbar` is used together with `position='start'` the content will always be placed to the right of the New/Refresh/Delete buttons and if used together with `position='end'` the content will always be placed to the left of the quickfilter

```html
<o-list #list attr="list" ... refresh-button="yes" quick-filter="yes" ... >
  <!-- Custom content toolbar in position start -->
  <o-combo o-list-toolbar position="start" label="Sort" width="100px" ... ></o-combo>
  <!-- Custom content toolbar in position end -->
  <o-slide-toggle o-list-toolbar position="end" ... ></o-slide-toggle>
</o-list>
```

![Add custom content in toolbar in position start]({{ "/assets/images/components/list/add-content-toolbar.png" | absolute_url }}){: .comp-example-img}

## Pagination <span class='menuitem-badge'>new<span>

By default, the list is not paginating the data, but if you want that behaviour you must set `pagination-controls= "yes"` in the o-list component.

The paginator displays a dropdown of page sizes for you to choose from. The options for this dropdown can be set via `page-size-options`. For more information see the **API**.

You can also configure the number of records initially displayed with query-rows attribute.

## Scroll to top <span class='menuitem-badge'>new<span>

Set `scroll-to-top-button="yes"` to show a floating button once the list has scrolled past a threshold, letting the user jump back to the top without losing their place.

```html
<o-list #list service="..." entity="..." keys="ID" scroll-to-top-button="yes">
  <o-list-item *ngFor="let row of list.dataArray">
     ....
  </o-list-item>
</o-list>
```

![Scroll to top button]({{ "/assets/images/components/list/o-list-scroll-to-top.png" | absolute_url }}){: .comp-example-img}

It only changes the scroll position — it never reloads data, resets filters or pagination, or discards rows already loaded.

It works in any pagination mode: with infinite scroll and with `pagination-controls="yes"` alike, since the list can also be scrolled within the current page. The button follows whichever element actually provides the scroll — the list itself, or the container it is placed in when that is the element with the overflow — and moves only that one.

Its appearance can be configured through the existing [`action-styles`](/guide/action-styles/) input, keyed by `scroll-top`.

### Support JDBC UUID <span class='menuitem-badge'>new<span>

Ontimize web now supports the JDBC **UUID** sql type. To indicate that a key column is of type UUID, all you have to do is to set to set the **UUID** via input `keys-sql-types` in the `o-list` as indicated in the following example.

```html
<o-list  #list service="..." entity="..." keys="ID" keys-sql-types="UUID">
  <o-list-item *ngFor="let list of list.dataArray">
     ....
  </o-list-item>
</o-list>
```

## Loading skeleton <span class='menuitem-badge'>new<span>

While a query is running, the list renders a skeleton placeholder instead of its items.

To avoid a flash on fast responses, the skeleton is not shown immediately: it waits for a **threshold** (300 ms by default) and is only rendered if the query is still running once that time has elapsed. Once shown, it stays visible for a **minimum time** (300 ms by default) so that it does not disappear abruptly. The very first load skips the threshold, so the initial render is never delayed.

This is the same behaviour as the `o-table` skeleton.

**Global configuration**

Both values are configured application-wide through the `loading` entry of `O_LIST_GLOBAL_CONFIG`:

```typescript
// app.config.ts
import { O_LIST_GLOBAL_CONFIG } from 'ontimize-web-ngx';

export const appConfig: ApplicationConfig = {
  providers: [
    provideOntimizeWeb(CONFIG, appRoutes),
    {
      provide: O_LIST_GLOBAL_CONFIG,
      useValue: {
        loading: {
          threshold: 500,
          minVisible: 200
        }
      }
    }
  ]
};
```

![Loading skeleton]({{ "/assets/images/components/list/skeleton-list.png" | absolute_url }}){: .comp-example-img}

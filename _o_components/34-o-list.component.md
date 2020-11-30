---
permalink: /components/list/overview
title: "List"
comp: list
tab: overview
---

{% include base_path %}
{% include toc %}

The `o-list` component is used to display a series of items. There is different types of predefined list items you can add to the list component.

For adding a list component to your application you must insert the `o-list` in your page and include a `o-list-item` component wrapping the desired list item type you want to display. Check the different list items types below.
## List item
### List item: text

The `o-list-item-text` component is used to display list items with a maximum of two lines of text and a title.

```html
<o-list #list attr="customerlist" title="CUSTOMERS" service="customers" entity="customer"
  keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-text #item title="{% raw %}{{ row.NAME }}{% endraw %}" primary-text="{% raw %}{{ row.EMAIL }}{% endraw %}"
      secondary-text="{% raw %}{{ row.ADDRESS }}{% endraw %}">
    </o-list-item-text>
  </o-list-item>
</o-list>
```

![List item text]({{ "/images/components/list/list-item-text.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/lists/list-item-text){:target="_blank"}.

### List item: avatar

The `o-list-item-avatar` component is used to display list items with an avatar and a maximum of two lines of text and a title.

```html
<o-list #list attr="customerlist" title="CUSTOMERS" service="customers" entity="customer"
  keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-avatar #item avatar="./assets/images/ontimize.png" title="{% raw %}{{ row.NAME }}{% endraw %}"
      primary-text="{% raw %}{{ row.EMAIL }}{% endraw %}" secondary-text="{% raw %}{{ row.ADDRESS }}{% endraw %}">
    </o-list-item-avatar>
  </o-list-item>
</o-list>
```

![List item avatar]({{ "/images/components/list/list-item-avatar.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/lists/list-item-avatar){:target="_blank"}.

### List item: card

The `o-list-item-card` component is used to display a card list item with text, image and action buttons.

```html
<o-list #list attr="customerlist" title="CUSTOMERS" service="customers" entity="customer"
  keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-card #item title="{% raw %}{{ row.NAME }}{% endraw %}" subtitle="{% raw %}{{ row.EMAIL }}{% endraw %}"
      image="./assets/images/ontimize.png" action-1-text="Contact" action-2-text="Share">
    </o-list-item-card>
  </o-list-item>
</o-list>
```

![List item card]({{ "/images/components/list/list-item-card.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/lists/list-item-card){:target="_blank"}.

### List item: card image

The `o-list-item-card-image` component is used to display card list items with a big image.

```html
<o-list #list attr="customerlist" title="CUSTOMERS" service="customers" entity="customer"
  keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-card-image #item title="{% raw %}{{ row.NAME }}{% endraw %}" subtitle="{% raw %}{{ row.EMAIL }}{% endraw %}"
      content="{% raw %}{{ row.ADDRESS }}{% endraw %}" avatar="./assets/images/ontimize.png" image="./assets/images/ontimize.png" action-1-text="Contact" action-2-text="Share" collapsible="yes" collapsed="no">
    </o-list-item-card-image>
  </o-list-item>
</o-list>
```

![List item card image]({{ "/images/components/list/list-item-card-image.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/lists/list-item-card-image){:target="_blank"}.

### Custom list item

When building an `o-list` component you can include one of the predefined list items the **OntimizeWeb** offers or you can include your own list item. For including a custom list item, **OntimizeWeb** offers the `o-list-item` directive that can be attached to an angular material list item (`mat-list-item`) or an angular material card (`mat-card`).

```html
<o-list #list attr="customerlist" title="CUSTOMERS" service="customers" entity="customer"
  keys="CUSTOMERID" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL">
  <mat-card *ngFor="let rowData of list.dataArray" [o-list-item]="rowData">
    <mat-card-header>
      <div mat-card-avatar>
        <img matListAvatar fxFill src="./assets/images/ontimize.png">
      </div>
      <mat-card-title>{{ rowData.NAME }}</mat-card-title>
      <mat-card-subtitle>{{ rowData.EMAIL }}</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </mat-card-content>
  </mat-card>
</o-list>
```

![List item custom]({{ "/images/components/list/list-item-custom.png" | absolute_url }}){: .comp-example-img}

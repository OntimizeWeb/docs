---
permalink: /components/list/
title: "List"
comp: list
---

{% include base_path %}
{% include toc %}

The `o-list` component is used to display a series of items. There is different types of predefined list items you can add to the list component.

For adding a list component to your application you must insert the `o-list` in your page and include a `o-list-item` component wrapping the desired list item type you want to display. Check the different list items types below.

## List item: text

The `o-list-item-text` is used to display a maximun of two lines of text with and a title.

```html
<o-list #list attr="customerlist" title="CUSTOMERS" service="customers" entity="customer" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-text #item title="{{ row.NAME }}" primary-text="{{ row.EMAIL }}" secondary-text="{{ row.ADDRESS }}"></o-list-item-text>
  </o-list-item>
</o-list>
```

![List item text]({{ "/images/components/list/list-item-text.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/lists/list-item-text){:target="_blank"}.

## List item: avatar

```html
<o-list #list attr="customerlist" title="CUSTOMERS" service="customers" entity="customer" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-avatar #item avatar="./assets/images/ontimize.png" title="{{ row.NAME }}" primary-text="{{ row.EMAIL }}" secondary-text="{{ row.ADDRESS }}"></o-list-item-avatar>
  </o-list-item>
</o-list>
```

![List item avatar]({{ "/images/components/list/list-item-avatar.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/lists/list-item-avatar){:target="_blank"}.

## List item: card

```html
<o-list #list attr="customerlist" title="CUSTOMERS" service="customers" entity="customer" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-card #item title="{{ row.NAME }}" subtitle="{{ row.EMAIL }}" image="./assets/images/ontimize.png" action-1-text="Contact" action-2-text="Share"></o-list-item-card>
  </o-list-item>
</o-list>
```

![List item card]({{ "/images/components/list/list-item-card.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/lists/list-item-card){:target="_blank"}.

## List item: card image

```html
<o-list #list attr="customerlist" title="CUSTOMERS" service="customers" entity="customer" columns="CUSTOMERID;PHOTO;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL">
  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-text #item title="{{ row.NAME }}" primary-text="{{ row.EMAIL }}" secondary-text="{{ row.ADDRESS }}"></o-list-item-text>
  </o-list-item>
</o-list>
```

![List item card image]({{ "/images/components/list/list-item-card-image.png" | absolute_url }}){: .comp-example-img}

You can see an example of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/lists/list-item-card-image){:target="_blank"}.

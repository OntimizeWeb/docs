---
permalink: /components/containers/
title: "Containers"
comp: container
---

{% include base_path %}

Container components are used to wrap components and organize the application layout. This components are `o-column` and `o-row` and affect their children's layout or flow as the direction alon the cross-axis or the main-axis respectively.

This components also apply basic styling 

## Example

```html
<o-column attr="col" title="This is a column">
    <!-- Children displayed along Y axis -->
</o-column>

<o-row attr="row" title="This is a row">
    <!-- Children displayed along X axis -->
</o-row>

<o-column-collapsible attr="collapsible-col" title="Column" description="This is a collapsible column">
    <!-- Children displayed along Y axis -->
</o-column-collapsible>

<o-row-collapsible attr="collapsible-row" title="Row" description="This is a collapsible row">
    <!-- Children displayed along X axis -->
</o-row-collapsible>
```

You can interact with different options of this components in the [OntimizeWeb playground]({{site.playgroundurl}}/main/containers){:target="_blank"}.

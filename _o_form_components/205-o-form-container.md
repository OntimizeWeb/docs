---
permalink: /form-component/o-form-container/
title: "Form container"
comp: formContainer
excerpt: "Tips for extending a form component"
---

This component allow to place the breadscrum on the toolbar of the form in a transparent way for the user.

{% capture paginatorFileCapture %}
  {% include o-component-single.md comp="formContainer"  %}
{% endcapture %}
{{ paginatorFileCapture | replace: '    ', ''}}

{% include base_path %}

 <h3 class="grey-color">Example</h3>

```html
  <o-form-container>
    <o-form editable-detail="false" service="branches"....
    ..........>
    ............................
    </o-form>  
  </o-form-container>
```
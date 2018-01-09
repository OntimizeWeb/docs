---
permalink: /form-component/o-form-container/
title: "Form container"
comp: formContainer
excerpt: "Tips for extending a form component"
---

This component allow to place the breadcrumb on the toolbar of the form in a transparent way for the user.

{% capture paginatorFileCapture %}
  {% include o-component-single.md comp="formContainer"  %}
{% endcapture %}
{{ paginatorFileCapture | replace: '    ', ''}}

{% include base_path %}

 <h3 class="grey-color">Example</h3>

```html
  <o-form-container breadcrumb="yes" breadcrumb-label-columns="NAME;SURNAME;" breadcrumb-separator=", ">
    <o-form editable-detail="false" service="customers"....
    ..........>
    ............................
    </o-form>  
  </o-form-container>
```

Below you can see an example using *o-form-container*

![image-center]({{ base_path }}/images/layouts/form-container/customers_with_breadcrumb.gif){: .align-center}

And below you can see an example that does not use *o-form-container*

![image-center]({{ base_path }}/images/layouts/form-container/customers_fixed_withoutbreadcrumb.gif){: .align-center}
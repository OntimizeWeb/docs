---
permalink: /components/applayout/
title: "App layout"
comp: appLayout
---

{% include base_path %}

The `o-app-layout` components builds a side navigator for application using the [application menu configuration]({{ base_path }}/guide/appconfig/#menu-configuration){:target="_blank"}. For adding it to the application you just have to wrap the content of the main page with this component like in the example below.

## Example
```html
<o-app-layout opened-sidenav-image="assets/images/sidenav-opened.png" closed-sidenav-image="assets/images/sidenav-closed.png">
  <router-outlet></router-outlet>
</o-app-layout>
```

The result of this example is shown below.

![App layout component]({{ "/images/layouts/app-layout/app_layout_default.png" | absolute_url }})

You can see a working example of this in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart){:target="_blank"} or check the code in [GitHub](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/src/app/main/main.component.html){:target="_blank"}.

## Toolbar

The application layout component may show a toolbar at the top of the screen by setting the `show-header` attribute to **yes**. Check this and other attributes in the **API** section of this page.

![App layout component toolbar]({{ "/images/layouts/app-layout/app_layout_header.png" | absolute_url }})

## Images

You can set provide images to be shown in the side navigator using the attributes `opened-sidenav-image` and `closed-sidenav-image`. Check this and other attributes in the **API** section of this page.

![App layout component images]({{ "/images/layouts/app-layout/app_layout_images.png" | absolute_url }})

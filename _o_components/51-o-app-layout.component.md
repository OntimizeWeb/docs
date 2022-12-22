---
permalink: /components/applayout/overview
title: "App layout"
comp: appLayout
---

{% include base_path %}
{% include toc %}

The `o-app-layout` components builds a side navigator for application using the [application menu configuration]({{ base_path }}/guide/appconfig/#menu-configuration){:target="_blank"}. For adding it to the application you just have to wrap the content of the main page with this component like in the example below.

## Example

<div style="width:65%" markdown="1">

```html
<o-app-layout opened-sidenav-image="assets/images/sidenav-opened.png"
  closed-sidenav-image="assets/images/sidenav-closed.png" mode="desktop">
  <router-outlet></router-outlet>
</o-app-layout>
```

</div>

The result of this example is shown below.

![App layout component]({{ "/images/layouts/app-layout/app_layout_default.png" | absolute_url }})

You can see a working example of this in the [OntimizeWeb QuickStart](https://try.imatia.com/ontimizeweb/quickstart){:target="_blank"} or check the code in [GitHub](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart/blob/master/src/app/main/main.component.html){:target="_blank"}.

### Custom content

You can attach your own content to the side navigator using the `o-app-layout-sidenav` component inside the `o-app-layout-sidenav` of you application.

```html
<o-app-layout opened-sidenav-image="assets/images/sidenav-opened.png" closed-sidenav-image="assets/images/sidenav-closed.png">

  <o-app-layout-sidenav>
    <!-- YOUR CUSTOM CONTENT HERE -->
  </o-app-layout-sidenav>

  <router-outlet></router-outlet>
</o-app-layout>
```

## Modes

The `o-app-layout` components has two performance modes designed for making this component more usable in desktop and mobile applications. This modes are the following:

* **Desktop**
This is the default mode of the `o-app-layout` component. This mode displays the side menu and allows the user to partially hide it.

![App layout component in desktop mode]({{ "/images/layouts/app-layout/o-app-layout-desktop.gif" | absolute_url }})

* **Mobile**
Configure this mode by setting the **mobile** value in the `mode` attribute in the `o-app-layout` component. This mode shows the side menu and a toolbar on the top with a button for show/hide the side menu.

![App layout component in mobile mode]({{ "/images/layouts/app-layout/o-app-layout-mobile.gif" | absolute_url }})

## Toolbar

The application layout component show a toolbar at the top of the screen by default, but if you want avoid displaing you must set the `show-header` attribute to **no**. Check this and other attributes in the **API** section of this page.

In the toolbar, it can show a title.

![App layout title]({{ "/images/layouts/app-layout/app_layout_title.png" | absolute_url }})

There are two ways to show the title in the toolbar:
* Display a **static title**: The same title is displaing in whole application. To configure this option you must set `static-title` and `show-static-title` to `yes`.

```html
<o-app-layout [static-title]="staticTitle" show-static-title="yes"... ></o-app-layout>
```

* Display a **no static title**: The title based on the route configuration. To configure this option you must set `show-title` to `yes` and add `oAppHeaderTitle` property in data object during route declaration

```html
  <o-app-layout ... show-title="yes" ... ></o-app-layout>
```

```ts
  export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
    ...
      { path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
        //uses 'no static' title
        data: { oAppHeaderTitle:'About'}
      },
      { path: 'accounts',
        loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule),
         //uses 'no static' title
        data: { oAppHeaderTitle: 'Accounts' }
      },
      ...
```


The `o-app-layout` component allows you to configure whether or not to show flags on the language selector by setting  the attribute `use-flag-icons` to **yes**. In order to show the language flags, it is necessary install the dependency `flag-icon-css`:
```bash
  $ npm install flag-icon-css
```
And import the flag icon styles in your application's **angular.json** file:
```bash
  "node_modules/flag-icon-css/css/flag-icons.css"
```

![App layout component toolbar]({{ "/images/layouts/app-layout/app_layout_header.png" | absolute_url }})

### Adding custom content to the toolbar

If you want to add your own components to the layout toolbar you must use the `o-app-layout-header` component.

```html
<o-app-layout opened-sidenav-image="assets/images/sidenav-opened.png"
  closed-sidenav-image="assets/images/sidenav-closed.png"
  mode="desktop" show-header="yes">
  <o-app-layout-header>
      <!-- YOUR CUSTOM CONTENT HERE -->
  </o-app-layout-header>

  <router-outlet></router-outlet>
</o-app-layout>
```

### Adding custom user info
**OntimizeWeb** allows to customize the user info to the toolbar with the `o-user-info-configuration` and `o-user-info-configuration-item` components. Check the *API* section of this page for more information.

**Example**
```html
<o-app-layout show-header="yes" opened-sidenav-image="assets/images/sidenav-opened.png"
  closed-sidenav-image="assets/images/sidenav-closed.png">
  <o-user-info-configuration show-profile="yes">
    <o-user-info-configuration-item name="test" icon="home" [action]="myAction" confirm="yes">
    </o-user-info-configuration-item>
  </o-user-info-configuration>
  <router-outlet></router-outlet>
</o-app-layout>
```

```ts
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent  {

  constructor() { }

  myAction() {
    alert('Test')
  }
}

```

![Custom user info]({{ "/images/layouts/app-layout/custom_user_info.png" | absolute_url }})

## Images

You can set provide images to be shown in the side navigator using the attributes `opened-sidenav-image` and `closed-sidenav-image`. Check this and other attributes in the **API** section of this page.

![App layout component images]({{ "/images/layouts/app-layout/app_layout_images.png" | absolute_url }})

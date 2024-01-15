---
layout: default
title: "Deploy your application"
permalink: /deployment/
excerpt: "Deploy an Ontimize Web application."
parent: Guide
nav_order: 9
---

{% include base_path %}
{% include toc %}


This section describes how to build the production version of your application and deploy it to a remote server.

## Simplest deployment possible

The simplest way of deploying your application is to build the development version of the application and copy the output directory to a web server.

1. Build the development version of the application by running the following command:
```bash
    npm run production
```
This command triggers the `production` script defined in the *package.json* file of your application (`ng build --configuration production  --base-href=/`) The production profile used in the parameter `--configuration production` it is defined in the *angular.json* file.

2. Copy everything within the output folder (*dist* by default) to a folder on the server.

3. If you copy the files into a server sub-folder, modify the `production` script in the *package.json* and change the build flag, `--base-href` and set the `<base href>` appropriately.

4. Configure the web server to redirect request for missing files to `index.html`. You can reed more about this topic in the [Angular docs](https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml){:target="_blank"}.

{: .note }
> This is *not* a production deployment. It's not optimized and it won't be fast for users. It might be good enough for sharing your progress and ideas internally with managers, teammates, and other stakeholders.

## Optimize for production

Although deploying directly from the development environment works, you can generate an optimized build by running the following command

```bash
  npm run production-aot-server
```
This command triggers the `production-aot-server` script defined in the *package.json* file of your application (`ng build --configuration production --base-href=/your_application_path_in_the_server`). The production profile used in the parameter `--configuration production` it is defined in the *angular.json* file.


## Simple deployment vs. Optimized deployment

Comparision of the load time for the [OntimizeWeb Playground](https://try.imatia.com/ontimizeweb/v15/playground/){:target="_blank"}.

* Simple deployment:
![image-JIT]({{ base_path }}/images/comparatives/playground-JIT.PNG){: .align-center}

* Optimized deployment:
![image-AoT]({{ base_path }}/images/comparatives/playground-AoT.PNG){: .align-center}


## PWA

To set up the Angular service worker in your project you need to follow next actions:

```bash
  ng add @angular/pwa --project <name of project as in angular.json>
```
Note: the project part is necessary if you have a multi project setup

This command will do the following tasks:

* It creates a depencency of @angular/service-worker in package.json

* It adds serviceWorker: true in the production configuration.

* It creates two files at the root of the project: manifest.webmanifest and ngsw-config.json.

* It adds the manifest.webmanifest that was just created in the registered assets of the project.

* It adds two lines in the index.html: A <meta name=”theme-color”> tag (you’ll want to change its value) and a <link> tag pointing to the manifest.json file.
Note: if you already had these tags in your index, it will not replace them. You’ll have to do it yourself.

* It imports the ServiceWorkerModule in your app (only in production). This is the service responsible for the automatic creation and use of a service worker. Look for this line in your app module:

```bash
ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
```

* It adds icons in your assets folder. You will of course need to change them if you don’t want your app to show Angular logos as icons.

* Now you are ready to build your app:

```bash
ng build --prod
```
Note: If you are running your own build script you must add --prod flag to enable the service worker.


### Reference

* [WebApp Manifest Dictionary](https://www.w3.org/TR/appmanifest/#webappmanifest-dictionary){:target="_blank"}.

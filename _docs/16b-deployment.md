---
title: "Deploy your application"
permalink: /deployment/
excerpt: "Deploy an Ontimize Web application."
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
This command triggers the `production` script defined in the *package.json* file of your application (`ng build --aot=false --target -prod`).

2. Copy everything within the output folder (*dist* by default) to a folder on the server.

3. If you copy the files into a server sub-folder, modify the `production` script in the *package.json* and append the build flag, `--base-href` and set the `<base href>` appropriately.

4. Configure the web server to redirect request for missing files to `index.html`. You can reed more about this topic in the [Angular docs](https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml){:target="_blank"}.

>**NOTE**: This is *not* a production deployment. It's not optimized and it won't be fast for users. It might be good enough for sharing your progress and ideas internally with managers, teammates, and other stakeholders.

## Optimize for production

Although deploying directly from the development environment works, you can generate an optimized build by running the following command

```bash
  npm run production-aot
```
This command triggers the `production-aot` script defined in the *package.json* file of your application (`ontimize-web-ngx production-aot --href /my-app/`).

The remaining copy deployment steps are the same as [before](#simplest-deployment-possible).

## Simple deployment vs. Optimized deployment

Comparision of the load time for the [OntimizeWeb Playground](https://ontimizeweb.github.io/ontimize-web-ngx-playground){:target="_blank"}.

* Simple deployment:
![image-JIT]({{ base_path }}/images/comparatives/playground-JIT.PNG){: .align-center}

* Optimized deployment:
![image-AoT]({{ base_path }}/images/comparatives/playground-AoT.PNG){: .align-center}

## How to wrap an Angular app with Apache Cordova

Once you have the production version of your application you can deploy it on a web server or to create cross platform applications using [Apache Cordova](https://cordova.apache.org/docs/en/latest/){:target="_blank"}.

After wrapping your application with Apache Cordova, check you has accoplished the installation and configuration requirements [here]({{base_path}}/deploy/cordova-requirements/){:target="_blank"}.

Follow the next steps:

### Create a Apache Cordova project

Execute the following command in the root directory of your application.

```bash
#  cordova create <folder-name> <project-id> <application-name>
   cordova create quickstart com.ontimize.quickstart Quickstart
```

This command generates a new Apache Cordova project in the indicated folder (*folder-name*) with the follogin structure.

![Structure for your cordova app]({{"/images/build-and-run/cordova_structure.png" | absolute_url }}){: .comp-example-img}

### Copy the application to the Apache Cordova project

Copy all files withing the output folder of your application to the `www` folder of your Cordova project.

Alternatively, you can modify the `production` script in the `package.json` file and add the `--output-path` option in order to indicate the directory where the output files must be placed. The `base-href` option should be set to `.`, this is due to Apache Cordova does not manage absolute paths inside Cordova projects. See the example below.

``` 
  "production": "ng build --aot=false --target -prod --base-href . --output-path ./quickstart/www/",
```

### Include the Apache Cordova script in your application

Add the `cordova.js` script to the `index.html` in the `www` directory of your Apache Cordova project.

```html
  <script type=”text/javascript” src=”cordova.js”></script>
```

### Set the default URL

Update the `<base href="./">` tag in the `index.html` file in the `www` directory of your Apache Cordova project, this will allow angular to access files in the directory since we are not hosting the Apache Cordova application in a web server.

Example of the `index.html` file in the `www` folder of your Apache Cordova project:
```html
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>Ontimize Web QuickStart Mobile</title>
  <base href="./">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <meta name="viewport" content="width=device-width,initial-scale=1"><!-- Styling -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" type="text/css" href="./assets/css/loader.css">
  <link href="styles.de9f568b16ee62eeb779.bundle.css" rel="stylesheet" />
</head>

<body>
  <!-- Loader -->
  <div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div><!-- The application tag-->
  <o-app></o-app>
  <script type="text/javascript" src="cordova.js"></script>
  <script type="text/javascript" src="inline.31e1fb380eb7cf3d75b1.bundle.js"></script>
  <script type="text/javascript" src="polyfills.8d96731025f12dcf8d3a.bundle.js"></script>
  <script type="text/javascript" src="scripts.0fe600f814a712347d11.bundle.js"></script>
  <script type="text/javascript" src="vendor.57801ae0a69d17753098.bundle.js"></script>
  <script type="text/javascript" src="main.eb4fb14e75e55fce24bd.bundle.js"></script>
</body>

</html>
```

### Add a platform to your project

Add a platform to your Apache Cordova project by executing the following command.

```bash
  cordova platform add android|ios|windows
```

### Build and run your application

Run the following command to build the Apache Cordova project. You can limit the scope of the build to a specific platform.

```bash
  cordova build [android|ios|windows]
```

Run the following command to laumch you Apache Cordova project in a emulator or in a device attached to your computer. Again, you can limit the scope of the run to a specific platform.

```bash
  cordova run [android|ios|windows]
```


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
Note: if you are using a base-href in production, you’ll need to change the '/ngsw-worker.js' path to './ngsw.json' to prevent a 404 error.

* It adds icons in your assets folder. You will of course need to change them if you don’t want your app to sport Angular logos as icons.


### Reference

* [Offical Documentation](https://cordova.apache.org/docs/en/latest/){:target="_blank"}.
* [WebApp Manifest Dictionary](https://www.w3.org/TR/appmanifest/#webappmanifest-dictionary){:target="_blank"}.

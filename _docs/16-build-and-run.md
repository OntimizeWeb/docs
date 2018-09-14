---
title: "Build and run"
permalink: /build-and-run/
excerpt: "How to build and run an Ontimize Web application."
---

{% include base_path %}
{% include toc %}

## Build and run your application

To start your application in a live server, open a terminal window and enter this command:

```bash
npm start
```
> **NOTE:** Run this command with administrator privileges.

That command runs the following two parallel node processes:

* The TypeScript compiler in watch mode.
* A static file server that loads *index.html* in a browser and refreshes the browser when application files change.

In a browser navigate to [http://localhost:4200](http://localhost:4200) and the app will be
automatically loaded. After that it will be reloaded if you change any of the source files.

You can configure the default HTTP host and port used by the development server with two command-line options:
```bash
ng serve --host 0.0.0.0 --port 4201
```

### Generate a distribution version

There are two ways to generate an Ontimize Web application distribution version: JIT and AoT.

#### JIT (Just-in-Time )

Which compiles your app in the browser at runtime

  * Compiled in the browser.
  * Each file compiled separately.
  * No need to build after changing your code and before reloading the browser page.
  * Suitable for local development.

You can generate the JIT distribution version of your application by adding this line to your package.json and running “npm run production”.

  ```bash
  "production": "ng build --aot=false --target -prod"
  ```

#### AoT (Ahead-of-Time )

Which compiles your app at build time.

* Compiled by the machine itself, via the command line (Faster).
* All code compiled together, inlining HTML/CSS in the scripts.
* No need to deploy the compiler (Half of Angular size).
* More secure, original source not disclosed.
* Suitable for production builds.

Ontimize Web has its own plugin for the AoT distribution version creation, you can see more details [here]({{ base_path }}/ontimize-web-ngx-tools/){:target="_blank"}. You can generate the AoT distribution version of your application by installing '*ontimize-web-ngx-tools*', adding this line to your package.json, and running '*npm run production-aot*'.

  ```bash
  "production-aot": "ontimize-web-ngx production-aot"
  ```

#### JIT vs. AoT

Below is a direct comparison of the load time for the main page of the ‘*Ontimize Web Playground*’ (available [here](https://ontimizeweb.github.io/ontimize-web-ngx-playground){:target="_blank"} in AoT form) for each of the two distribution types.


JIT version:

![image-JIT]({{ base_path }}/images/comparatives/playground-JIT.PNG){: .align-center}


AoT version:

![image-AoT]({{ base_path }}/images/comparatives/playground-AoT.PNG){: .align-center}


Once you have the production version you can deploy it on a web server or to create cross platform applications using Apache Cordova.

## How to wrap an Angular app with Apache Cordova

All Apache Cordova documentation is available [here](https://cordova.apache.org/docs/en/latest/){:target="_blank"}.

First you must verify that the installation and configuration requirements discussed [here]({{base_path}}/build-and-run/requirements){:target="_blank"} are accomplished .

Step to follow
* *Create the app*, go to the directory where you maintain your source code, and create a cordova project.

 ```html
cordova create quickstart com.ontimize.quickstart Quickstart
```

By default, cordova create script generates a skeletal web-based application whose start page is the project's *www/index.html* file.

![Structure for your cordova app]({{"/images/build-and-run/cordova_structure.png" | absolute_url }}){: .comp-example-img}

* Merge your *distribution version* of Angular project with the Cordova project created by copying every folders and files to folder *www*.

When building the Angular app, the output-path option can be configured to place the build app directly into the Cordova’s www folder. Also, the base-href option should be used to set the base reference to “.” as absolute paths are not well handled by Cordova. 

Your script in package.sjon should be similar to the following:

``` 
"production": "ng build --aot=false --target -prod --base-href . --output-path ./quickstart/www/",

```

* To implement the Cordova plugin, *add reference to cordova.js* in angular project html file *(www/index.html).*

* Update the <base href=“/”> tag in your www/index.html  to *<base href=“./”>*, this will enable angular to access files in a directory path since we are not hosting on a server.


```html
<script type=”text/javascript” src=”cordova.js”></script>
```

Next I show the *www/index.html* file of the example

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

* Add your Cordova Building Platform:


```
  cordova platform add android|ios|windows@6.0.0 
```

* Lastly, *build and run your Cordova* project by executing the code below:

Run the following command to build the project.

```
cordova build android|ios|windows
```

Run a command such as the following to rebuild the app and view it within a specific platform's emulator:
```
cordova run android|ios|windows
```

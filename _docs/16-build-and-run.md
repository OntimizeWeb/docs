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

## How to wrap an Angular app with Apache Cordova
You must have installed your Cordova Cli, if not, refer [Installing the Cordova CLI]({{base_path}}/build-and-run-requirements){:target="_blank"}

Step to follow
* *Create the app*, go to the directory where you maintain your source code, and create a cordova project.

 ```bash
cordova create hello com.example.hello HelloWorld
```
* Merge your *distribution version* of Angular project with the Cordova project created by copying every folders and files, except your package.json file from your Angular project root directory to the Cordova project root directory.

* To implement the Cordova plugin, *add reference to cordova.js* in angular project html file (www/index.html ).

```html
<script type=”text/javascript” src=”cordova.js”></script>
```

* Update the <base href=“/”> tag in your www/index.html  to *<base href=“./”>*, this will enable angular to access files in a directory path since we are not hosting on a server.
* Add your Cordova Building Platform:


```
  cordova platform add android|ios|windows@6.0.0 
```

* Lastly, *build and run your Cordova* project by executing the code below:

```
cordova build android|ios|windows
```

```
cordova run android|ios|windows
```

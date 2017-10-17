---
title: "Build and run"
permalink: /build-and-run/
excerpt: "How to build and run an Ontimize Web application."
---

{% include base_path %}

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
automatically loaded. Afther that it will be reloaded if you change any of the source files.

You can configure the default HTTP host and port used by the development server with two command-line options:
```bash
ng serve --host 0.0.0.0 --port 4201
```

### Generate a distribution version

There are two ways to generate an Ontimize Web application distribution version: JIT and AoT.

#### JIT

Compile TypeScript just in time for executing it.

  * Compiled in the browser.
  * Each file compiled separately.
  * No need to build after changing your code and before reloading the browser page.
  * Suitable for local development.

You can generate your application JIT distribution version adding and running this script to your package.json

  ```bash
  "production": "ng build --aot=false --target -prod"
  ```

#### AoT

Compile TypeScript during build phase.

* Compiled by the machine itself, via the command line (Faster).
* All code compiled together, inlining HTML/CSS in the scripts.
* No need to deploy the compiler (Half of Angular size).
* More secure, original source not disclosed.
* Suitable for production builds.

Ontimize web has its own plugin for the AoT distribution version creation, you can see more details [here]({{ base_path }}/ontimize-web-ngx-tools/){:target="_blank"}. So you can generate your application AoT distribution version installing '*ontimize-web-ngx-tools*' and adding and running this script (with no parameters in this example) to your package.json.

  ```bash
  "production-aot": "ontimize-web-ngx production-aot"
  ```

#### JIT vs. AoT

In order to compare both types of distribution versions here is a comparison of the data loaded in a browser and the response time. For this comparision we are using the '*Ontimize Web Playground*' application, available [here](https://ontimizeweb.github.io/ontimize-web-ngx-playground){:target="_blank"} (AoT version), and only loading the main page.

JIT version:

![image-JIT]({{ base_path }}/images/comparatives/playground-JIT.PNG){: .align-center}


AoT version:

![image-AoT]({{ base_path }}/images/comparatives/playground-AoT.PNG){: .align-center}

---
permalink: /ontimize-web-ngx-tools/
title: "Tools"
excerpt: ""
---

# Ontimize Web Tools

An implemention of a set of utility tools for developing Ontimize Web applications.

* [Github repository](#github)
* [Installation](#installation)
* [Usage](#usage)

## Github
Ontimize Web Tools module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-tools) where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-tools/issues) section.


## Installation

```bash
  npm install ontimize-web-ngx-tools
```

If you are using a seed application with no previous installed version of '*ontimize-web-ngx-tools*' and you want to use it now you have to follow the next steps:

* In your application routing modules make sure that you are using function callbacks in the '*loadChildren*' properties, as seen [here]({{ base_path }}/routing/).
* Download the necessary resources [here](){:target="_blank"}.
* Using the downloaded resources:
  * Replace your '*config*' folder with '*aot-config*'.
    * **Important:** if you made some changes to your '*config/index.ejs*' or '*config/webpack-aot.config.js*' you should copy that changes into the new '*aot-config*' correspondant files.
  * Replace your '*tsconfig.aot.json*' with the downloaded file with the same name (also remember to copy your own changes, if they exists).
* Delete the following files of your app (if they exists):
  * '*src/main-aot.ts*'
  * '*src/vendor-aot.ts*'
  * '*src/styles-aot.scss*'
* In your '*package.json*':
  * Delete your '*webpack*' from '*devDependencies*' (if exists)
  * Add '*compression-webpack-plugin*' to '*devDependencies*'
  * If it exists, run the '*clean:aot*' script
  * Change the scripts object with the folliwing code (also remember to copy your own scripts)
  ```bash
    "scripts": {
      "ng": "ng",
      "start": "ng serve",
      "build": "ng build",
      "test": "ng test",
      "lint": "ng lint",
      "e2e": "ng e2e",
      "production": "ng build --aot=false --target -prod",
      "production-aot": "ontimize-web-ngx production-aot"
    },
  ```


## Usage

```bash
Commands:

  production-aot  building AoT distribution version

Options:

  --href      index.html <base href=> value (default './')  [string]

  -h, --help  Show help                                     [boolean]
```

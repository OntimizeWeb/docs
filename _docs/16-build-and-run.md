---
title: "Run your application"
permalink: /run-your-app/
excerpt: "Run an Ontimize Web application."
---

{% include base_path %}

To start your application in a live server, open a terminal, go to the project direectory and enter the following command:

```bash
npm start
```
> **NOTE:** Run this command with administrator privileges.

This command runs the following two parallel node processes:

* The TypeScript compiler in watch mode.
* A static file server that loads *index.html* in a browser and refreshes the browser when application files change.

In a browser navigate to [http://localhost:4200](http://localhost:4200){:target="_blank"} and the app will be automatically loaded. After that it will be reloaded if you change any of the source files.

The `npm start` command triggers the script `start` defined in the *package.json* file, it launches the server on `http://localhost:4200/` by default but you can configure this with the options `--host` and `--port`. You can check these and more options [here](https://github.com/angular/angular-cli/wiki/serve){:target="_blank"}.
```bash
ng serve --host 0.0.0.0 --port 4201
```

---
title: "Quick-Start Guide"
permalink: /docs/quick-start-guide/
excerpt: "How to quickly install and setup Minimal Mistakes for use with GitHub Pages."
modified: 2016-04-13T15:54:02-04:00
redirect_from:
  - /theme-setup/
---

{% include base_path %}

Ontimize Web is an application framework based on Angular 2 technology and standards that provides to you an environment for solving the problematic situation of building applications that require a browser-based user interface.
Ontimize Web allows developing data management applications quickly and agile.

The QuickStart app has the structure of Ontimize Web applications and displays the management of bank's customers and their accounts.

## Let's begin

### Prerequisites

First of all you need to meet minimum requirements to start. [Check prerequesites depending on your operative system]({{ base_path }}/guide/prerequisites/).

### Create new project based on QuickStart

There are several ways to start:

**1.** You can create and configure the project from scratch.

**2.** You can [clone the entire QuickStart application](https://github.com/OntimizeWeb/ontimize-web-ng2-quickstart) from GitHub.

**3.** And for those who don't want to mess with Git, you can download the QuickStart as a ZIP file.

[<i class="fa fa-download"></i> Download QuickStart](https://github.com/ontimizeweb/ontimize-web-ng2-quickstart/archive/master.zip){: .btn .btn--success}


### Install npm packages and running

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `npm run postinstall`

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

---

Congratulations! You've successfully create an Ontimize Web application. Now you're ready to add content and customize the app further.

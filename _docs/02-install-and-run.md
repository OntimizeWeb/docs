---
title: "Install and run example"
permalink: /install-and-run/
excerpt: ""
modified: 2016-12-12T15:54:02-04:00
---

{% include base_path %}


## 1. Create new project based on QuickStart

### Prerequisites

Before installing and running you need to meet minimum requirements to start. [Check prerequesites depending on your operative system]({{ base_path }}/guide/prerequisites/).


There are several ways to start:

**a)** You can [clone the entire QuickStart application](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart) from GitHub.

**b)** And for those who don't want to mess with Git, you can download the QuickStart as a ZIP file.

[<i class="fa fa-download"></i> Download QuickStart](https://github.com/ontimizeweb/ontimize-web-ngx-quickstart/archive/master.zip){: .btn .btn--success}



## 2. Install npm packages and running

Goes into the directory of your project (e.g. 'my-proj') and then install the npm packages. Finally, run your app and test it on your browser 
on the url [http://localhost:4200](http://localhost:4200)

```bash
cd my-proj
npm install
npm start
```
> **Attention Windows Developers:**  You must run all of these commands in administrator mode.

The `npm start` command first compiles the application, then simultaneously re-compiles and runs the `server`.
Both the compiler and the server watch for file changes. You can shut it down manually by pressing *Ctrl-C*.

---
Congratulations! You've successfully create an Ontimize Web application. Now you're ready to add content and customize the app further.

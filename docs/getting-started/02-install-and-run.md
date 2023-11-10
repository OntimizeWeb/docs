---
layout: default
title: "Run an example"
permalink: /install-and-run/
parent: Getting started
nav_order: 2
---

{% include base_path %}


## 1. Create new project based on QuickStart

### Prerequisites

Before installing and running the QuickStart application, check you meet minimum requirements to start. Click [here]({{ base_path }}/guide/prerequisites/) to check prerequisites depending on your operating system.

There are several ways to start:

**a)** You can [clone the entire QuickStart application](https://github.com/OntimizeWeb/ontimize-web-ngx-quickstart){:target="_blank"} from GitHub.

**b)** And for those who don’t want to mess around with Git, you can download the QuickStart as a ZIP file.

[<i class="fas fa-download"></i> Download QuickStart](https://github.com/ontimizeweb/ontimize-web-ngx-quickstart/archive/master.zip){: .btn .btn--success}



## 2. Install npm packages and run

Go into the directory of your project (e.g. ‘my-proj’) and then install the npm packages. Finally, run your app and test it in your browser with the url [http://localhost:4200](http://localhost:4200)

```bash
cd my-proj
npm install
npm start
```
{: .note }
>**Attention Windows Developers:**  You must run all of these commands in administrator mode.

The `npm start` command first compiles the application, then simultaneously re-compiles and runs the `server`.
Both the compiler and the server watch for file changes. You can shut it down manually by pressing *Ctrl-C*.

---
Congratulations! You've successfully create an Ontimize Web application. Now you're ready to add content and customize the app further.

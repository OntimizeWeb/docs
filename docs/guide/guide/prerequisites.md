---
title: "Prerequisites"
permalink: /guide/prerequisites/
excerpt: "Instructions for installing the theme for new and existing Jekyll based sites."
author_profile: false
sidebar:
        nav: "docs"
nav_exclude: true
layout: default
---

{% include base_path %}

## Node.js & npm ##

Make sure you have Node.js installed. Download the installer [here](http://nodejs.org/){:target="_blank"} or use your favorite package manager. You must download the installer according to your platform and operating system. It’s suggested to use the **18.10.0** version of node along with the **8.19.2** version of npm. We've found this combination to be the fastest and most stable for Ontimize Web.

Following installation, make sure you have correctly installed Node.js by invoking the following commands in the command-line:

{: .note}
>On the Mac, the command-line is available via the *Terminal* application. On the PC, it's available as *Command Prompt* under *Accessories*.

```bash
# Checking node version
C:\>node -v
v18.10.0
# Checking npm version
C:\>npm -v
8.19.2
```

If you want to know more about npm you can find more information [here](https://docs.npmjs.com/getting-started/what-is-npm){:target="_blank"}.

## Angular CLI ##
You need to have installed [Angular CLI](https://cli.angular.io/){:target="_blank"} to build applications and to generate components and modules.

```bash
# Installing angular CLI package globally
npm install -g @angular/cli@latest
```

*Note*: '*ontimize-web-ngx@15.0.0*' is using '*@angular/cli@15.2.9'*

## Git ##

Git is also necessary to be able to download resources from Imatia's code repositories. Download the installer [here](https://git-scm.com/downloads){:target="_blank"} according your operating system.


## Visual Studio Code ##

It is not absolutely necessary to use this IDE, if highly recommended, but certain .dll inherent in installation for some of the tools Ontimize compilation of web applications are needed.

While the use of this IDE is not required (although it is recommended), the dynamic libraries installed with the IDE are used by some of the Ontimize compilation tools. Download the installer [here](https://code.visualstudio.com/download/){:target="_blank"} according your operating system.

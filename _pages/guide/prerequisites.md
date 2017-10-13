---
title: "Prerequisites"
permalink: /guide/prerequisites/
excerpt: "Instructions for installing the theme for new and existing Jekyll based sites."
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}

## Node.js & npm ##

Make sure you have Node.js installed. Download the installer [here](http://nodejs.org/){:target="_blank"} or use your favorite package manager. You must download the installer according to your platform and operating system. It’s suggested to use the **6.x.x** version of node along with the **5.x.x** version of npm. We've found this combination to be the fastest and most stable for Ontimize Web.

Following installation, make sure you have correctly installed Node.js by invoking the following commands in the command-line:

**NOTE**: On the Mac, the command-line is available via the *Terminal* application. On the PC, it's available as *Command Prompt* under *Accessories*.

```bash
# Checking node version
C:\>node -v
v6.10.2
# Checking npm version
C:\>npm -v
5.0.3
```

If you want to know more about npm you can find more information [here](https://docs.npmjs.com/getting-started/what-is-npm){:target="_blank"}.

## Angular CLI ##
You need to have installed [Angular CLI](https://cli.angular.io/){:target="_blank"} to build applications and to generate components and modules.

```bash
# Installing angular CLI package globally
npm install -g @angular/cli@latest
```

*Note*: '*ontimize-web-ngx@2.0.0*' is using '*@angular/cli@1.3.2'*

## Python ##

You need to have Python installed (`v2.7` recommended, `v3.x.x` is __*not*__ supported). Download the installer [here](https://www.python.org/downloads/){:target="_blank"} according your operating system.


## Git ##

Git is also necessary to be able to download resources from Imatia's code repositories. Download the installer [here](https://git-scm.com/downloads) according your operating system.


## Visual Studio Code ##

It is not absolutely necessary to use this IDE, if highly recommended, but certain .dll inherent in installation for some of the tools Ontimize compilation of web applications are needed. Download the installer [here](https://code.visualstudio.com/download/){:target="_blank"} according your operating system.

While the use of this IDE is not required (although it is recommended), the dynamic libraries installed with the IDE are used by some of the Ontimize compilation tools. Download the installer [here](https://code.visualstudio.com/download/){:target="_blank"} according your operating system.

## Troubleshooting ##

Here are some solutions to common problems related with Node.js installations on different operating systems.

### Node.js addons ###

Install dependencies needed by the Node.js native addon build tool (`node-gyp`):

More information [here](https://github.com/nodejs/node-gyp){:target="_blank"}.
You can install with `npm`:

``` bash
$ npm install -g node-gyp
```

You will also need to install:

  * On Unix:
    * `python` (`v2.7` recommended, `v3.x.x` is __*not*__ supported)
    * `make`
    * A proper C/C++ compiler toolchain, like [GCC](https://gcc.gnu.org){:target="_blank"}
  * On Mac OS X:
    * `python` (`v2.7` recommended, `v3.x.x` is __*not*__ supported) (already installed on Mac OS X)
    * [Xcode](https://developer.apple.com/xcode/download/){:target="_blank"}
      * You also need to install the `Command Line Tools` via Xcode. You can find this under the menu `Xcode -> Preferences -> Downloads`
      * This step will install `gcc` and the related toolchain containing `make`
  * On Windows:
    * Option 1: Install all the required tools and configurations using Microsoft's [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools){:target="_blank"} using `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe (run as Administrator).
    * Option 2: Install tools and configuration manually:
      * Visual C++ Build Environment:
        * Option 1: Install [Visual C++ Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools){:target="_blank"} using the **Default Install** option.

        * Option 2: Install [Visual Studio 2015](https://www.visualstudio.com/products/visual-studio-community-vs){:target="_blank"} (or modify an existing installation) and select *Common Tools for Visual C++* during setup. This also works with the free Community and Express for Desktop editions.

        > :bulb: [Windows Vista / 7 only] requires [.NET Framework 4.5.1](http://www.microsoft.com/en-us/download/details.aspx?id=40773){:target="_blank"}

      * Install [Python 2.7](https://www.python.org/downloads/){:target="_blank"} (`v3.x.x` is not supported), and run `npm config set python python2.7` (or see below for further instructions on specifying the proper Python version and path.)
      * Launch cmd, `npm config set msvs_version 2015`

    If the above steps didn't work for you, please visit [Microsoft's Node.js Guidelines for Windows](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules){:target="_blank"} for additional tips.

If you have multiple Python versions installed, you can specify which Python
version `node-gyp` uses by setting the '--python' variable:

``` bash
$ node-gyp --python /path/to/python2.7
```

If `node-gyp` is called by way of `npm` *and* you have multiple versions of
Python installed, then you can set `npm`'s 'python' config key to the appropriate
value:

``` bash
$ npm config set python /path/to/executable/python2.7
```

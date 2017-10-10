---
title: "Prerequisites"
permalink: /guide/prerequisites/
excerpt: "Instructions for installing the theme for new and existing Jekyll based sites."
modified: 2016-08-01T09:36:36-04:00
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}

## Node & NPM ##

Make sure you have NodeJS installed. Download the installer [here](http://nodejs.org/) or use your favorite package manager (you must download the installer according to your platform and operative system). It’s best to get the **6.x.x** version of node along with the **5.x.x** version of npm. This offers the best in stability and speed for building.

Following installation to check that you have correctly installed Node.js, you must be able to invoke *node* and *npm* commands in the command-line, for example:

**NOTE**: On the Mac, the command-line is available via the *Terminal* application. On the PC, it's available as *Command Prompt* under *Accessories*.

```bash
# Checking node version
C:\>node -v
v6.10.2
# Checking npm version
C:\>npm -v
5.0.3
```

If you want to know more about NPM you can find more information [here](https://docs.npmjs.com/getting-started/what-is-npm).

## Angular cli ##
You need to have installed [Angular CLI](https://cli.angular.io/) for making easy to build an applications, generate components, modules and more.

```bash
# Installing angular cli package globally
npm install -g @angular/cli@latest
```

*Note*: '*ontimize-web-ngx@2.0.0*' is using '*@angular/cli@1.3.2'*

## Python ##

You need to have installed Python (`v2.7` recommended, `v3.x.x` is __*not*__ supported). Download the installer [here](https://www.python.org/downloads/) according your operating system.


## Git ##

It is also necessary to install Git tool for being able to download resources from Imatia repositories of code. Download the installer [here](https://git-scm.com/downloads) according your operating system.


## Visual Studio Code ##

It is not absolutely necessary to use this IDE, if highly recommended, but certain .dll inherent in installation for some of the tools Ontimize compilation of web applications are needed. Download the installer [here](https://code.visualstudio.com/download/) according your operating system.


## Troubleshooting ##

Here are shown some solutions to common problems related to node installations on different operating systems.

### Node addons ###

Install dependencies needed by the Node.js native addon build tool (`node-gyp`):

More information [here](https://github.com/nodejs/node-gyp).
You can install with `npm`:

``` bash
$ npm install -g node-gyp
```

You will also need to install:

  * On Unix:
    * `python` (`v2.7` recommended, `v3.x.x` is __*not*__ supported)
    * `make`
    * A proper C/C++ compiler toolchain, like [GCC](https://gcc.gnu.org)
  * On Mac OS X:
    * `python` (`v2.7` recommended, `v3.x.x` is __*not*__ supported) (already installed on Mac OS X)
    * [Xcode](https://developer.apple.com/xcode/download/)
      * You also need to install the `Command Line Tools` via Xcode. You can find this under the menu `Xcode -> Preferences -> Downloads`
      * This step will install `gcc` and the related toolchain containing `make`
  * On Windows:
    * Option 1: Install all the required tools and configurations using Microsoft's [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools) using `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe (run as Administrator).
    * Option 2: Install tools and configuration manually:
      * Visual C++ Build Environment:
        * Option 1: Install [Visual C++ Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools) using the **Default Install** option.

        * Option 2: Install [Visual Studio 2015](https://www.visualstudio.com/products/visual-studio-community-vs) (or modify an existing installation) and select *Common Tools for Visual C++* during setup. This also works with the free Community and Express for Desktop editions.

        > :bulb: [Windows Vista / 7 only] requires [.NET Framework 4.5.1](http://www.microsoft.com/en-us/download/details.aspx?id=40773)

      * Install [Python 2.7](https://www.python.org/downloads/) (`v3.x.x` is not supported), and run `npm config set python python2.7` (or see below for further instructions on specifying the proper Python version and path.)
      * Launch cmd, `npm config set msvs_version 2015`

    If the above steps didn't work for you, please visit [Microsoft's Node.js Guidelines for Windows](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules) for additional tips.

If you have multiple Python versions installed, you can identify which Python
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

Note that OS X is just a flavour of Unix and so needs `python`, `make`, and C/C++.
An easy way to obtain these is to install XCode from Apple,
and then use it to install the command line tools (under Preferences -> Downloads).

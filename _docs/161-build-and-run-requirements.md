---
title: "Requirements form build and run with Cordova"
permalink: /build-and-run/requirements/
excerpt: "How to build and run an Ontimize Web application."
---

{% include base_path %}
{% include breadcrumbs.html %}

## Installing the Cordova CLI

Install the cordova module using npm utility of Node.js. The cordova module will automatically be downloaded by the npm utility.
on OS X and Linux:
  ```bash
    npm install -g cordova
  ```  
The -g flag above tells npm to install cordova globally. Otherwise it will be installed in the node_modules subdirectory of the current working directory.



## Installing the requirements for Android

### Java Development Kit (JDK)

Install [Java Development Kit (JDK) 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html){:target="_blank"}

### Gradle
Install Grandle and add Grandle to your path.

### Android Studio
Install [Android Studio](https://developer.android.com/studio/){:target="_blank"}. Detailed installation instructions are on Android's developer site.

### Adding SDK Packages

After installing the Android SDK, you must also install the packages for whatever API level you wish to target. It is recommended that you install the highest SDK version that your version of cordova-android supports.

Open the Android SDK Manager and make sure the following are installed:

* Android Platform SDK for your targeted version of Android.
* Android SDK build-tools version 19.1.0 or higher.
* Android Support Repository (found under "Extras").

### Setting environment variables
Cordova's CLI tools require some environment variables to be set in order to function correctly. The CLI will attempt to set these variables for you, but in certain cases you may need to set them manually. The following variables should be updated:

* Set the `JAVA_HOME` environment variable to the location of your JDK installation.
* Set the `ANDROID_HOME` environment variable to the location of your Android SDK installation.
* It is also recommended that you add the Android SDK's `tools`, `tools/bin`, and `platform-tools`directories to your PATH.


Before building your project, you need to *accept the license agreements* and complete the installation of the missing components using the Android Studio SDK Manager.

If you get the following aan error message indicates that "Application Error (file:///android_asset/www/index.html)"  when run the application add `<preference name=”loadUrlTimeoutValue” value=”700000″ />` in config.xml.
## Installing the requirements for IOS
Apple® tools required to build iOS applications only run on the OS X operating system on Intel-based Macs. Xcode® 7.0 (the minimum required version) runs only on OS X version 10.10.4 (Yosemite) or greater, and includes the iOS 9 SDK (Software Development Kit). To submit apps to the Apple App Store℠ requires the latest versions of the Apple tools.

### Xcode
There are two ways to download Xcode:

* from the App Store, available by searching for "Xcode" in the App Store application.

* from Apple Developer Downloads, which requires registration as an Apple Developer.

Once Xcode is installed, several command-line tools need to be enabled for Cordova to run. From the command line, run:

```
$ xcode-select --install
```

### Deployment Tools
The ios-deploy tools allow you to launch iOS apps on an iOS Device from the command-line.

To install it, run the following from command-line terminal:
``` 
$ npm install -g ios-deploy
```

## Installing the requirements for Windows
### Install [VisualStudio Community 2017](https://visualstudio.microsoft.com/es/downloads/){:target:"blank"} or better

With options:

Universal Windows Platform development,
* Windows 10 Mobile-Emulator
* Windows 10 SDK
* SDK Windows 10

Mobile development with JavaScript
* Windows 10 Mobile-Emulator 
* UWP-Tools for Cordova

### Install [Build Tools for Visual Studio 2017](https://visualstudio.microsoft.com/es/downloads/){:target:"blank"}
You will find them on the VS downloads page in Other Tools and Frameworks section

The options below might not all be necessary, but I installed them all to get it just running.
With options:

* Visual C++ Buildtools
** +add optional: Windows 10 SDK for Desktop C++
** +add optional: Visual C++-Tools for CMake

* Buildtools for web development:
** +add optional: Development tools for .NET Framework 4–4.6
** +add optional: .NET Core 2.0-Development tools
** +add optional: NuGet-Ziele und Buildaufgaben
** +add optional: TypeScript 2.6 SDK
** +add optional: Extended ASP.NET-Features

* .NET Core-Buildtools

* Node.js Buildtools

### Set MSBUILDDIR
New ENV variable MSBUILDDIR allows to directly configure the MSBuild Tools to be used to build the app.
While VSINSTALLDIR always has been a hack that accidentally also worked to switch between different MSBuildTools versions, we now make this functionality explicit: Just set the ENV var to a your desired MSBuild folder (e.g. C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin or C:\Program Files (x86)\MSBuild\14.0\bin\) and it will be used to build your project.

If you have Visual Studio 2017 and Visual Studio 2015 installed at the same time, the normal logic would always choose Visual Studio 2017's MSBuild 15 - and fail on a Windows (Phone) 8.1 project. If you set the environment variable to MSBuild 14, it can successfully build your 8.1 apps.
If the supplied path is invalid or doesn't contain a working MSBuild, the normal MSBuild selection logic will be triggered


### Set config.xml
I also added these preferences to the config.xml
```html
<platform name="windows">
    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />
    <preference name="WindowsDefaultUriPrefix" value="ms-appx://" />
</platform>
```
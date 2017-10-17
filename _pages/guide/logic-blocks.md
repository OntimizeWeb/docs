---
permalink: /guide/logic-blocks/
excerpt: "Logic blocks of an Ontimize Web app."
author_profile: false
sidebar:
        nav: "docs"
---

{% include base_path %}

A simple way to create application modules and/or components is to use the [Angular CLI](https://cli.angular.io/){:target="_blank"} *generate* (or just *g*) command.

  * Module creation: You can see the Angular CLI module creation documentation [here](https://github.com/angular/angular-cli/wiki/generate-module){:target="_blank"}
  * Component creation: You can see the Angular CLI component creation documentation [here](https://github.com/angular/angular-cli/wiki/generate-component){:target="_blank"}

Here you can see a example of a new module addition

[structure]({{ base_path }}/structure/){:target="_blank"}

```bash
|──  src/
|  ├──  app/
|  |  |  ...
|  |  ├──  main/
|  |  |  ├──  customers/
|  |  |  |  ├──  ...
|  |  |  ├──  accounts/
|  |  |  |  ├──  ...
|  |  |  ├──  **employees/**
...

```

```bash


ng g component

```




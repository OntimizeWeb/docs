---
title: "Structure"
permalink: /docs/structure/
excerpt: "How an ontimize web app is organized and what all of the files are for."
modified: 2016-08-08T16:25:30-04:00
---

Following is shown default project's root directory.

```bash
quick-start
|──  config/
|──  dist/
|──  nodes_modules/
|──  src/
|    ├──  app/
|    |   ├──  +login/
|    |   |   ├──  shared/
|    |   |   |──  login.component.html
|    |   |   |──  login.component.scss
|    |   |   |──  login.component.ts
|    |   |   |──  login.directives.ts
|    |   |   └──  index.ts
|    |   |
|    |   ├──  +main/
|    |   |   ├──  +home/
|    |   |   |   ├──  detail/
|    |   |   |   ├──  edit/
|    |   |   |   ├──  home/
|    |   |   |   ├──  new/
|    |   |   |   ├──  shared/
|    |   |   |   |──  home.directives.ts
|    |   |   |   |──  home.routes.ts
|    |   |   |   └── index.ts
|    |   |   | 
|    |   |   |──  ...
|    |   |   | 
|    |   |   |──  shared/
|    |   |   |──  main.component.html
|    |   |   |──  main.component.scss
|    |   |   |──  main.component.ts
|    |   |   |──  main.routes.ts
|    |   |   └──  index.ts
|    |   |
|    |   |──  shared/
|    |   |   |──  ...
|    |   |   |──  app.services.config.ts
|    |   |   |──  shared.directives.ts
|    |   |   └── index.ts
|    |   |   
|    |   |──  app.component.html
|    |   |──  app.component.scss
|    |   |──  app.component.ts
|    |   |──  app.config.ts
|    |   |──  app.directives.ts
|    |   |──  app.modules.ts
|    |   |──  app.routes.ts
|    |   |──  environment.ts
|    |   └──  index.ts
|    |
|    |──  assets/
|    |    ├──  css/
|    |    |──  i18n/
|    |    |──  images/
|    |    └──  js/
|    |
|    |──  favicon.ico
|    |──  index.html
|    |──  main.ts
|    |──  system-config.ts
|    |──  tsconfig.json
|    └──  typings.d.ts
|
|──  typings/
|──  .editorconfig
|──  angular-cli.json
|──  angular-cli-build.js
|──  package.json                               # NPM build scripts
|──  tslint.json
└──  typings.json
```
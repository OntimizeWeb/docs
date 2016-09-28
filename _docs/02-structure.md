---
title: "Structure"
permalink: /docs/structure/
excerpt: "How an ontimize web app is organized and what all of the files are for."
modified: 2016-08-08T16:25:30-04:00
---

Following is shown default Ontimize Web application's root directory.

```bash
quick-start
|──  config/
|──  dist/
|──  nodes_modules/
|──  src/
|    ├──  app/                              # contains all application stuff.
|    |   ├──  +login/                       # login module.
|    |   |   ├──  shared/
|    |   |   |──  login.component.html
|    |   |   |──  login.component.scss
|    |   |   |──  login.component.ts
|    |   |   |──  login.directives.ts
|    |   |   └──  index.ts
|    |   |
|    |   ├──  +main/                        # contains all modules of application.
|    |   |   ├──  +home/                    # home module.
|    |   |   |   ├──  detail/
|    |   |   |   ├──  edit/
|    |   |   |   ├──  home/
|    |   |   |   ├──  new/
|    |   |   |   ├──  shared/
|    |   |   |   |──  home.directives.ts    # directives of home module.
|    |   |   |   |──  home.routes.ts        # routes of home module.
|    |   |   |   └── index.ts
|    |   |   | 
|    |   |   |──  ...
|    |   |   | 
|    |   |   |──  shared/
|    |   |   |──  main.component.html
|    |   |   |──  main.component.scss
|    |   |   |──  main.component.ts
|    |   |   |──  main.routes.ts            # routes of app private section.
|    |   |   └──  index.ts
|    |   |
|    |   |──  shared/                       # contains all stuff (components, services, ...) for sharing on app.
|    |   |   |──  ...
|    |   |   |──  app.services.config.ts    # app services configuration parameters.
|    |   |   |──  shared.directives.ts      # directives of shared module.
|    |   |   └── index.ts
|    |   |   
|    |   |──  app.component.html
|    |   |──  app.component.scss
|    |   |──  app.component.ts
|    |   |──  app.config.ts             # app configuration parameters.
|    |   |──  app.directives.ts         # all directives of application.
|    |   |──  app.modules.ts            # app main module.
|    |   |──  app.routes.ts             # app routes definition.
|    |   |──  environment.ts
|    |   └──  index.ts
|    |
|    |──  assets/                       # contains application assets.
|    |    ├──  css/                     # custom application css files.
|    |    |──  i18n/                    # json files for translations.
|    |    |──  images/                  # extra images used by the application.
|    |    └──  js/                      # custom JavaScript application files.
|    |
|    |──  favicon.ico
|    |──  index.html                    # defines the web page that hosts the application.
|    |──  main.ts                       # file that bootstraps the application.
|    |──  system-config.ts              # provides information to a module loader about where to find application modules, and registers all the necessary packages.
|    |──  tsconfig.json                 # defines how the TypeScript compiler generates JavaScript from the project's files.
|    └──  typings.d.ts                  
|
|──  typings/
|──  .editorconfig
|──  angular-cli.json                   
|──  angular-cli-build.js
|──  package.json                       # npm package dependencies for the project.
|──  tslint.json                        # is used to configure which rules get run by the linter.
└──  typings.json                       # provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
```
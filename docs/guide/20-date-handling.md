---
layout: default
title: "Date handling"
permalink: /guide/date-handling/
parent: Guide
nav_order: 7
---

{% include base_path %}
{% include toc %}

This section describes how **OntimizeWeb** parses, formats and displays dates, and how to select the date engine used by the date components.

## Luxon, the default date engine

Since version `18.0.0-next.10`, **OntimizeWeb** uses [Luxon](https://moment.github.io/luxon/){:target="_blank"} as its default date engine. [Moment.js](https://momentjs.com/){:target="_blank"}, the engine used in previous versions, is now **deprecated** but remains fully functional: it is still shipped as a dependency of the framework and can be re-activated for the whole application, a route or a component subtree (see [Selecting the date adapter](#selecting-the-date-adapter) below).

The components affected by the date engine are:

- `o-date-input`
- `o-daterange-input`
- `o-time-input`
- `o-table-cell-editor-date` and `o-table-cell-editor-time`
- `o-table-cell-renderer-date` and `o-table-cell-renderer-time`
- `o-combo-renderer-date` and `o-list-picker-renderer-date`
- The `o-table` filter-by-column dialog for `date` columns

These components resolve their `DateAdapter` and `MAT_DATE_FORMATS` from the active adapter, their `format`-like inputs are interpreted by the active adapter and their default formats follow it. The components behave identically under either adapter; only the format token syntax changes.

### Date formats

The default display format of every date component is the **localized short date** of the active engine: Luxon's macro token `D`, which is the equivalent of Moment.js' `L`. The localized long date is `DD` in Luxon (`LL` in Moment.js). The `o-table-cell-renderer-time` default is `D HH:mm a` (`L HH:mm a` under the moment adapter).

Custom formats set via the `format`-like inputs must use the token casing of the **active adapter**. The most common differences between Moment.js and Luxon tokens are:

| | Moment.js (deprecated) | Luxon (default) |
|---|---|---|
| Localized short date | `L` | `D` |
| Localized long date | `LL` | `DD` |
| Day of month (2 digits) | `DD` | `dd` |
| Year (4 digits) | `YYYY` | `yyyy` |
| Month (2 digits) | `MM` | `MM` |
| Hour (24h / 12h) | `HH` / `hh` | `HH` / `hh` |
| Minute | `mm` | `mm` |
| Meridiem | `a` | `a` |

For example, Moment.js' `DD/MM/YYYY` is written `dd/MM/yyyy` in Luxon. Check the full [Luxon table of tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens){:target="_blank"}.

## Selecting the date adapter

The date engine is selected with the `O_DATE_ADAPTER` injection token (of type `ODateAdapterType = 'luxon' | 'moment'`). When the token is not provided, `'luxon'` is used. The `provideODateAdapter()` helper function provides it:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideODateAdapter, provideOntimizeWeb } from 'ontimize-web-ngx';

bootstrapApplication(AppComponent, {
  providers: [
    provideOntimizeWeb(CONFIG),
    provideODateAdapter('moment'), // keep the Moment.js behaviour of previous versions
    provideRouter(routes)
  ]
});
```

The token can be provided at different levels:

- **Whole application**: in the `bootstrapApplication` providers (or in the `AppModule` providers of NgModule-based applications).
- **A route**: in the `providers` array of the route definition.
- **A component subtree**: in the `providers` array of any ancestor component; the adapter applies to that subtree only.

When the moment adapter is active, the affected components behave exactly as in previous versions: the default formats are `L`/`LL`, the `format`-like inputs are interpreted as Moment.js tokens, the date and time renderers use the `oMoment` pipe instead of `oLuxon` and the `date-class` functions receive `Moment` objects.

### The date-class function

The `date-class` input of `o-date-input` and `o-daterange-input` accepts a `DateCustomClassFunction` whose parameter is typed as `any`: at runtime it receives a Luxon `DateTime` under the default adapter, or a `Moment` when the moment adapter is active.

## API summary

Current date API:

| API | Description |
|---|---|
| `LuxonService` | Date parsing/formatting service (`parseDate(value, format?, locale?)`, `load(locale)`, `getLocale()`) |
| `OLuxonPipe` (`oLuxon`) | Date formatting pipe (see [Pipes]({{ base_path }}/guide/pipes/#oluxon)) |
| `OntimizeLuxonDateAdapter` | Extends `LuxonDateAdapter` from `@angular/material-luxon-adapter`, adding the `oFormat` override |
| `OntimizeMatLuxonDateFormats` / `luxonDateFormatFactory` | Material date formats using the `D` / `DD` tokens |
| `O_DATE_ADAPTER` / `provideODateAdapter()` | Injection token and helper to select the date adapter |

Deprecated date API (still functional, used when the moment adapter is active):

| API | Description |
|---|---|
| `MomentService` | Same API as `LuxonService`, Moment.js based |
| `OMomentPipe` (`oMoment`) | Date formatting pipe (see [Pipes]({{ base_path }}/guide/pipes/#omoment)) |
| `OntimizeMomentDateAdapter` | Moment.js based Material `DateAdapter` |
| `OntimizeMatDateFormats` / `dateFormatFactory` | Material date formats using the `L` / `LL` tokens |

The utility method `Util.parseByValueType` is now Luxon-based, keeping the same input/output contract.

## Installation note

`luxon` and `moment` are direct dependencies of `ontimize-web-ngx`, so they are installed automatically. However, `@angular/material-luxon-adapter` is a **peerDependency**: projects installing with `--legacy-peer-deps` must add it to their own dependencies:

```bash
npm install @angular/material-luxon-adapter@^18.2.0 --legacy-peer-deps
```

---
title: OTranslateService
permalink: /services/otranslateservice/overview
comp: otranslateservice
layout: o-component
nav_exclude: true
---

{% include base_path %} {% include toc %}

For translations, *Ontimize Web* use `OTranslateService` which is a *service* and a *pipe* to handle any dynamic and static content you can help you make your app available in multiples languages.



## Define the translations

Once you've installed `ontimize-web-ngx`, you can put your translations in a json file (locale_id.json) in `src/assets/i18n` folder. There must be at least one language translation file for the resulting translation. `OTranslateService` understands nested JSON objects.

```json
{
    "HOME": {
        "HELLO": "hello"
    }
}
```

You can then access the value by using the dot notation, in this case HOME.HELLO.


## Init the *OTranslateService* for your application.

```js

import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { OTranslateService } from "ontimize-web-ngx";

@Component({
    selector: 'app',
    template: `
        ...
    `
})
export class AppComponent {

  private translateServiceSubscription :Subscription;

  constructor(translate: OTranslateService) {
    this.translateServiceSubscription = this.translateService.onLanguageChanged.subscribe(() => {
      // your code
    });

  });


  public ngOnDestroy(): void {
    if (this.translateServiceSubscription) {
      this.translateServiceSubscription.unsubscribe();
    }
  }
}
```

Having the following entry in the bundle file:
  ```json
  {
    ...
   {% raw %} "EXAMPLE": "Example bundle text: {0}, {1}", {% endraw %}
    ...
  }
  ```
User can add in the html file:
  ```html
   {% raw %} {{ 'EXAMPLE' | oTranslate : { values: ['foo', 'bar'] }}}{% endraw %}"

  ```

And get the following result:
  ```html
     {% raw %} 'Example bundle text: foo, bar' {% endraw %}
  ```
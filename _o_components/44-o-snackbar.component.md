---
permalink: /components/snackbar/
title: "SnackBar"
comp: snackbar
---

SnackBarService is a service for displaying snack-bar notifications.

A snack-bar contains allways a message. You can optionally add a configuration object in order to show an icon, an action button or deciding how long the snack-bar will be shown.

{% assign filenameArray = "" | split:"|"  %} 
{% for files_hash in site.data.components.snackbarData %}
  {% assign filenameArray = filenameArray | push: files_hash[0] %}
{% endfor %}
{% assign filenameArray = filenameArray | sort %}
{% for filename in filenameArray %}
  {% assign dataFile = site.data.components.snackbarData[filename] %}
  {% capture dataFileCapture %}
    {% include o-component-single.md compFile=dataFile %}
  {% endcapture %}
  <div class="o-compFile-div">
    <h2 class="">{{ dataFile.title }}</h2>
    {{ dataFileCapture | replace: '    ', '' }}
  </div>
{% endfor %}

<h3 class="grey-color">Example</h3>

```javascript
    import { OSnackBarConfig, SnackBarService } from 'ontimize-web-ngx';

    ...

    export class MyComponent {

        constructor(
            protected snackBarService: SnackBarService
        ) {}

        showSimple() {
            // Simple message
            this.snackBarService.open('Snackbar message');
        }

        showConfigured() {
            // SnackBar configuration
            const configuration: OSnackBarConfig = {
                action: 'Done',
                milliseconds: 5000,
                icon: 'check_circle',
                iconPosition: 'left'
            };

            // Simple message with icon on the left and action
            this.snackBarService.open('Snackbar text', configuration);
        }

    }
```

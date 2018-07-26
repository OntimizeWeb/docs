---
permalink: /components/snackbar/
title: "SnackBar"
comp: snackbar
---

{% include base_path %}

The `SnackBarService` is a service for displaying snack-bar notifications.

A snack-bar contains always a message. You can optionally add a configuration object in order to show an icon, an action button or deciding how long the snack-bar will be shown. Check the attributes of the snack-bar configuration in the **API** section of this page.

## Example

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

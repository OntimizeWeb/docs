---
permalink: /components/input/html/
title: "HTML input"
comp: HTMLInput
---

{% include base_path %}
{% include toc %}

The `o-html-input` component is used in [forms]({{ base_path }}/components/form/) for getting or displaying html text submitted by the user.

This component wraps the [CKEditor 4](https://ckeditor.com/ckeditor-4/){:target="_blank"} component into an **OntimizeWeb** component. For using it you need to download the CKEditor library and include it in your application.

1. Download the Basic Package or customize it by yourself [here](https://ckeditor.com/ckeditor-4/download/){:target="_blank"} with the components you need.
2. Include it in your application:
  * Copy the CKEditor library to your *assets* folder.
  * Import the CKEditor library in the *index.html* file of your application.

    ```html
    <script type="text/javascript" src="./assets/js/ckeditor/ckeditor.js"></script>
    ```

    * For production you have the take two more steps:
        * Include the CKEditor library in the *aot-config/index.ejs* file, like in the previous example.
        * Include the CKEditor in the webpack copy files plugin, for this, include the ckeditor folder in the `GlobCopyWebpackPlugin` patterns in the *aot-config/webpack-aot.config.js* file.

        ```javascript
            plugins: [
                new GlobCopyWebpackPlugin({
                    "patterns": [
                    ...
                    "assets/js/ckeditor"
                ],
                ...
        ```

3. Now you can include the `o-html-input` in your application templates.

The HTML input is automatically registered on its parent `o-form`, which provides the value for the input programatically. Its value can be also set manually via the `data` parameter. This and other attributes are explained on the **API** section of this page.

## Basic example
![HTML input component]({{ "/images/components/inputs/o-html-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-html-input attr="html" [data]="getHTMLData()" read-only="no" required="yes"></o-html-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/html){:target="_blank"}.
z
## Validation
The `o-html-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input.

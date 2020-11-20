---
permalink: /components/input/file/api
title: "File input"
comp: fileInput
tab: api
---

{% include base_path %}
{% include toc %}

The `o-file-input` component is used in [forms]({{ base_path }}/components/form/) for uploading files to a server.

The file input is automatically registered on its parent `o-form`. The configuration attributes for this component are explained on the **API** section of this page.

## Basic example
![File input component]({{ "/images/components/inputs/o-file-input.png" | absolute_url }}){: .comp-example-img}

```html
<o-form editable-detail="no" show-header="no">
    <o-file-input attr="file" label="File" accept-file-type="image/*" max-file-size="100000" max-num-files="10" show-info="yes"></o-file-input>
</o-form>
```
You can see this and more examples of this component in the [OntimizeWeb playground]({{site.playgroundurl}}/main/inputs/file){:target="_blank"}.

## Validation
The `o-file-input` shows automatically an error message when the `required` attribute is set to "yes" and there is no value on the input. It also validates the number of files and the size of these files depending the component configuration.

## Server configuration
For uploading the files to a server, it is necessary to configure the `service` and the `entity` attributes. You may need configure the `service-type` attribute in case you don't use the default **OntimizeWebService** for uploading the files.

```html
<o-file-input attr="file_upload" service="files" entity="upload" accept-file-type="image/*" multiple="yes" show-info="yes" (onUploadFile)="onUploadFile($event)" [additional-data]="getFileData()"></o-file-input>
```

Below you have an example of a REST interface used by the conponent definition provided above.

```java
@RestController
@RequestMapping("/files")
public class FilesRestController {

    @PostMapping(value = "upload")
    public ResponseEntity upload(@RequestParam("name) String[] names, @RequestParam("file") MultipartFile[] files, @RequestParam("data", required = false) String data) {

        // Parameters received:
        // * names: array with the names of the uploaded files
        // * files: array with the uploaded files
        // * data: string with the data provided to the 'addiotional-data' attribute

        HashMap<String, Object> extraData  new HashMap<>();
        if (data != null) {
            extraData = new ObjectMapper().readValue(data, HashMap.class);
        }

        ...

    }
}
```

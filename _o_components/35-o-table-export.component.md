---
permalink: /components/table/export
title: "Export table data"
layout: single
---

{% include base_path %}
{% include toc %}


Export table data in **Ontimize Web** of the exports depends on whether **Ontimize, OntimizeEE** or **Ontimize Boot** servers are used.

## Exportating the table data with Ontimize and OntimizeEE servers
The `o-table` component is able to export its data in *Excel, HTML and PDF* format by default

The exportation process is performed as follows:

- Firstly, the table collects all the required information to perform the exportation, the table data, column names, column types... using the <a href="https://github.com/OntimizeWeb/ontimize-web-ngx/blob/8.x.x/projects/ontimize-web-ngx/src/lib/services/ontimize-export-data-provider.service.ts" target="_blank">OntimizeExportDataProviderService</a> service provider, this provider can replace using <a href="/docs/guide/service#extending-ontimize-web-services" target="_blank">O_EXPORT_DATA.
- Then it sends this information to the server in order to generate the file that will contain the exported data.

The rest interface used for this must be like the following by default:
```
{% raw %} https://{ your-api-endpoint }/{ table-service-path }/{ table-entity }/{ format-selected } {% endraw %}
```

Where <b>format-selected</b> can be: <b>'xlsx'</b>, <b>'html'</b> or <b>'pdf'</b> depending on the format selected. You can also export the table data in other format using a <a href="#table-export-button">o-table-export-button</a>, in this case, the <b>format-selected</b> will be the value configured in the attribute `export-type` of the `o-table-export-button` component.

If you want to customize this end point, please check the <a href="#custom-exportation-end-point">Custom exportation end point</a> section.


The service must send a response with an object containing an unique identifier for the file and a key that depends on the format selected for the exportations. You can se en example of each exportation object response in the following table.

You can see an example of the exportation method end point in the following example.

```java
@PostMapping(value = "/{extension}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<JSONObject> export(@PathVariable("extension") String extension) {

  // Generate xlsx file ...
  int id = generateXLSXFile();

  // Send response
  JSONObject result = new JSONObject();
  result.setInt(extension + "Id", id);
  return new ResponseEntity<>(result, HttpStatus.OK);
}
```

<p>Finally, the table sends a request to the rest interface with the file identifier provided to perform the download of the file generated on the previous step.</p>
<p>The rest interface used for downloading the file is like the following by default:
<br>
``` https://{ your-api-endpoint }/{ table-service-path }/{ format-selected }/{ file-id } ``
<br>
Where <b>format-selected</b> is the same as in the first request and <b>file-id</b> is the file identifier obtained as response of the first request.
<br>
If you want to customize the download end point, please check the <a href="#customexportendpoint">Custom exportation end point</a> section.
</p>
<p>In the following example you can see the download api end point method.</p>

```java
@GetMapping(value = "/{extension}/{id}")
public void downloadFile(@PathVariable(name = "extension", required = true) final String fileExtension,
    @PathVariable(name = "id", required = true) final String fileId, HttpServletResponse response) {

  // Get the file usint the file identifier
  File file = getFile(fileId);

  // Send response
  response.setHeader("Content-Type", "application/octet-stream");
  response.setHeader("Content-Disposition", "attachment; filename=\"" + file.getName() + "\"");
  response.setContentLengthLong(file.length());
  fis = new BufferedInputStream(new FileInputStream(file));
  FileCopyUtils.copy(fis, response.getOutputStream());
}
```

### Custom exportation end point

For customizing the exportation end points simply add your end points on the service configuration object of the table with the keys <b>exportPath</b> and <b>downloadPath</b>. Check the following example.

```javascript
export const SERVICE_CONFIG = {
  users: {
    path: '/users',
    exportPath: '/usersExport',
    downloadPath: '/usersDownload'
  }
}
```

Using the above configuration the enpoints would be as follows:

```
 https://{ your-api-endpoint }/{ exportPath }/{ table-service-path }/{ table-entity }/{ format-selected }

 https://{ your-api-endpoint }/{ downloadPath }/{ table-service-path }/{ format-selected }/{ file-id }

```



## Exportating the table data with Ontimize Boot servers

The `o-table` component is able to export its data in *Excel* and *CSV* format by default

<b>The exportation process is performed as follows:</b>

- Firstly, the table collects all the required information to perform the exportation, the table data, column names, column types... using the <a href="https://github.com/OntimizeWeb/ontimize-web-ngx/blob/8.x.x/projects/ontimize-web-ngx/src/lib/services/ontimize-export-data-provider-3x.service.ts" target="_blank">OntimizeExportDataProviderService3X</a> service provider, this provider can replace using <a href="/docs/guide/service#extending-ontimize-web-services" target="_blank">O_EXPORT_DATA.


- Then it sends this information to the server in order to generate the file that will contain the exported data.
The rest interface used for this must be like the following by default:

```
 https://{ your-api-endpoint }/{ export-path }/{ format-selected }
```

Where <b>format-selected</b> can be: <b>'xlsx'</b> or <b>'csv'</b> depending on the format selected. You can also export the table data in other format using a <a href="../#table-export-button">o-table-export-button</a>, in this case, the <b>format-selected</b> will be the value configured in the attribute `export-type` of the `o-table-export-button` component.


And <b> export-path</b> is <b>export</b> by default, if you want to customize this end point, please check the <a href="#custom-exportation-end-point-for-ontimize-boot-server">Custom exportation end point for Ontimize Boot server</a> section.

The service must send a response with the generated file.

### Custom exportation end point for Ontimize Boot server

<p>
For using the exportation with Ontimize Boot server, the exportConfiguration configuration object must contain the service path.
</p>

```javascript
app.config.ts
{
 ...
 exportConfiguration: {
    path:'/customExport'
 }
 ...
};
```

Using the above configuration the enpoint would be as follows:

```
 http://{ your-api-endpoint }/customExport/{ format-selected }
```

## Customizing export service
### Customizing export service in the whole application
By default, **Ontimize Web** use the service `OntimizeExportService` or `OntimizeExportService3X` in the whole application depending on whether it should support Ontimize and OntimizeEE servers or Ontimize Boot but the framework allows to modify the export service used by setting the property `exportServiceType` in `app.config.ts` with service defining with the corresponding injection token [`O_EXPORT_SERVICE`]({{base_path}}/guide/service#extending-ontimize-web-services)

### Customizing export service for a specific table
In addition, it is possible to configure the use of an export service for a specific table with the `export-service-type` input in `o-table` component with service defining with the corresponding injection token [`O_EXPORT_SERVICE`]({{base_path}}/guide/service#extending-ontimize-web-services)


---
permalink: /components/table/exportation/
title: "Exporting"
---

In this section we are specifing how table data exportation works.

<h3 class="grey-color">Exportating the table data</h3>
The table component it is able to export its data to Excel, HTML and PDF format. For this, it is necessary to set up the services properly on your rest interface.

The exportation process is performed as follows:

<p>Firstly, the table collects all the required information to perform the exportation, the table data, column names, column types...</p>
<p>Then it sends the information data to the server in order to generate the file which contains the exported data.</p>

<p>The rest interface used for this is like the following by default:
<br>
{% raw %} https://{ your-api-endpoint }/export/{ format-selected } {% endraw %}
<br>
Where <b>format-selected</b> can be: <b>'xlsx'</b>, <b>'html'</b> or <b>'pdf'</b> depending on the format selected.
<br>
You can change the <b>/export</b> end point. Please check the <a href="#customexportendpoint">Custom exportation end point</a> section.
</p>

<p>The service must send a response with an object containing an unique indentifier for the file and a key that depends on the format selected for the exportations. You can se en example of each exportation object response in the following table.
<br>
You can see an example of the exportation method end point in the following example.</p>

```java
@RequestMapping(value = "xlsx", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<EntityResult> generateExcel(@RequestBody ExportParameter data) {
    EntityResult result = new EntityResult(EntityResult.OPERATION_SUCCESSFUL, EntityResult.NODATA_RESULT);

    Map<String, String> columnNames = data.getColumnNames();
    Hashtable<String, Integer> sqlTypes = new Hashtable<>();
    sqlTypes.putAll(data.getSqlTypes());

    List<String> columnNamesArray = new ArrayList<>();
    for (String col : columnNames.keySet()) {
        columnNamesArray.add(columnNames.get(col));
    }

    EntityResult er = this.prepareEntityResult(data);

    try {
        File xslxFile = this.exportService.generateExcel(er, columnNamesArray);
        Hashtable<String, Object> erResult = new Hashtable<>();
        String filename = xslxFile.getName();
        erResult.put("xslxId", filename.substring(0, filename.indexOf(".")));
        result.addRecord(erResult);
        return new ResponseEntity<EntityResult>(result, HttpStatus.OK);
    } catch (Exception e) {
        e.printStackTrace();
        result.setCode(EntityResult.OPERATION_WRONG);
        result.setMessage(e.getMessage());
        return new ResponseEntity<EntityResult>(result, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

<p>Finally, the table sends a request to the rest interface with the file identifier provided to perform the download of the file generated on the previous step.</p>
<p>The rest interface used for downloading the file is like the following by default:
<br>
{% raw %} https://{ your-api-endpoint }/export/download/{ file-extension }/{ file-id } {% endraw %}
<br>
Where <b>file-extension</b> is the extension of the generated file and <b>file-id</b> is the file identifier obtained in the first request.
<br>
You can change the <b>/export/download</b> end point. Please check the <a href="#customexportendpoint">Custom exportation end point</a> section.
</p>
<p>In the following example you ca see the download api end point method.</p>

```java 
@RequestMapping(value = "download/{extension}/{id}", method = RequestMethod.GET)
public void downloadFile(@PathVariable(name = "extension", required = true) String fileExtension, @PathVariable(name = "id", required = true) String fileId, HttpServletResponse response) {
    InputStream fis = null;
    try {
        File tmpDir = new File(System.getProperty("java.io.tmpdir"));
        File[] matchingfiles = tmpDir.listFiles(new FilenameFilter() {
            @Override
            public boolean accept(File dir, String name) {
                return name.startsWith(fileId) && name.endsWith(fileExtension);
            }
        });

        if (matchingfiles.length == 1 && matchingfiles[0].exists()) {
            File file = matchingfiles[0];
            if (IExportService.XLSX_EXTENSION.endsWith(fileExtension)) {
                response.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            } else if (IExportService.HTML_EXTENSION.endsWith(fileExtension)) {
                response.setHeader("Content-Type", "application/xhtml+xml");
            } else if (IExportService.PDF_EXTENSION.endsWith(fileExtension)) {
                response.setHeader("Content-Type", "application/pdf");
            }
            response.setHeader("Content-Disposition", "attachment; filename=\"" + file.getName() + "\"");
            response.setContentLengthLong(file.length());
            fis = new BufferedInputStream(new FileInputStream(file));
            FileCopyUtils.copy(fis, response.getOutputStream());
        } else {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
        }
    } catch (IOException e) {
        e.printStackTrace();
        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
    } finally {
        if (fis != null) {
            try {
                fis.close();
            } catch (IOException e) {
                ExportRestController.logger.error("{}", e.getMessage(), e);
            }
        }
    }
}
```

<h3 id="customexportendpoint" class="grey-color">Custom exportation end point</h3>

For changing the exportation end points simple add your end points on the service configuration object of the table with the keys <b>exportPath</b> and <b>downloadPath</b>. Check the following example.

```json
export const SERVICE_CONFIG: Object = {
    'users': {
        'path': '/users',
        'exportPath': '/usersExport',
        'downloadPath': '/usersDownload'
    }
}
```

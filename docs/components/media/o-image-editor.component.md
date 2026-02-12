---
layout: o-component
permalink: /components/media/image-editor/overview
title: "Image Editor"
comp: image-editor
parent: Media
grand_parent: Components
nav_order: 2
---
{% include base_path %}
{% include toc %}


The `o-image-editor` component wraps `ngx-image-cropper` and provides a simplified image cropping + zooming UI consistent with the Ontimize Web design system. It supports:

- Uploading and editing images.
- Dynamic **aspect ratio** changes.
- **Zoom** slider up to a configurable max.
- Clear display of the crop area size in **pixels**.
- Emitting the final cropped image on apply.


## Installation

The `o-image-editor` component is distributed as part of the **Ontimize Web Extra Components** library (`ontimize-web-ngx-extra-components`).

```bash
npm i ontimize-web-ngx-extra-components
```

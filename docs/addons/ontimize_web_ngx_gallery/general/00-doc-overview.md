---
title: "Overview"
permalink: /gallery/overview/
layout: default
parent: Gallery
grand_parent: Addons
nav_order: 1
---

{% include base_path %}
{% include toc %}

## Introduction

The `o-gallery` component allows to create beautiful image and videos galleries for the web and mobile devices like a carousel.

![Gallery component]({{ "/assets/images/components/gallery/gallery.png" | absolute_url }}){: .comp-example-img}

```html
<o-gallery [gallery-images]="galleryImages" [gallery-options]="galleryOptions"></o-gallery>
```

```ts
...
  this.galleryImages = [
      {
        small: 'assets/images/photo1.jpg',
        medium: 'assets/images/photo1.jpg',
        big: 'assets/images/photo1.jpg'
      },
      {
        small: 'assets/images/photo2.jpg',
        medium: 'assets/images/photo2.jpg',
        big: 'assets/images/photo2.jpg'
      },
      {
        small: 'assets/images/photo3.jpg',
        medium: 'assets/images/photo3.jpg',
        big: 'assets/images/photo3.jpg'
      },
      {
        small: 'assets/images/i_video.jpg',
        medium: 'assets/videos/video1.mp4',
        big: 'assets/videos/video1.mp4'
      }
    ];

      this.galleryOptions = [
      {
        breakpoint: 1920,
        height: "200px",
        width: "300px",
        image: true,
        thumbnails: false,
        preview: false
      }
    ];
    ...
```

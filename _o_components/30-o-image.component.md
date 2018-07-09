---
permalink: /components/image/
title: "Image"
comp: image
under_construction: false
---
{% include base_path %}
{% include toc %}


The `o-image` component to display different types of images, including network images, base64 images or images from the local disk.

## Basic example

This example shows the obtaining and visualization of an image from the network, from relative url and even in base64 in the `data` propertie.
```html
<!-- network images-->
 <o-image attr="image1" data="http://placekitten.com/500/600"></o-image>
 <o-image attr="image2" data="assets/images/sidenav-opened.png"></o-image>
 <!-- base64 images-->
 <o-image attr="image3" [data]="dataBase64" auto-fit="no" height="200px" width="50%"></o-image>
        
```
```js
public dataBase64= "data:image/png;base64,iV BORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHd hcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHjSURBVDjLdZO/alVBEMZ/5+TemxAbFUUskqAoSOJNp4KC 4AsoPoGFIHY+gA+jiJXaKIiChbETtBYLUbSMRf6Aydndmfks9kRjvHdhGVh2fvN9uzONJK7fe7Ai6algA 3FZCAmQqEF/dnihpK1v7x7dPw0woF64Izg3Xl5s1n9uIe0lQYUFCtjc+sVuEqHBKfpVAXB1vLzQXFtdYP HkGFUCoahVo1Y/fnie+bkBV27c5R8A0pHxyhKvPn5hY2MHRQAQeyokFGJze4cuZfav3gLNYDTg7Pklzpw 4ijtIQYRwFx6BhdjtCk+erU0CCPfg+/o2o3ZI13WUlLGo58YMg+GIY4dmCWkCAAgPzAspJW5ePFPlV3VI 4uHbz5S5IQfy/yooHngxzFser30iFcNcuAVGw3A0Ilt91IkAsyCXQg5QO0szHEIrogkiguwN2acCoJhjn ZGKYx4Ujz5WOA2YD1BMU+BBSYVUvNpxkXuIuWgbsOxTHrG3UHIFWIhsgXtQQpTizNBS5jXZQkhkcywZqQ QlAjdRwiml7wU5xWLaL1AvZa8WIjALzIRZ7YVWDW5CiIj48Z8F2pYLl1ZR0+AuzEX0UX035mxIkLq0dhD w5vXL97fr5O3rfwQHJhPx4uuH57f2AL8BfPrVlrs6xwsAAAAASUVORK5CYII=";
```

![Image component]({{ "/images/components/media/image/image-screen.png" | absolute_url }}){: .comp-example-img}

## Empty image
The `o-image` component allow add an empty image when the data is empty. For example:
```html
    <o-image attr="PHOTO" class="customer-picture" empty-image="./assets/images/no-image.png" ></o-image>
```

![Image Empty]({{ "/images/components/media/image/image-empty.png" | absolute_url }}){: .comp-example-img}


## Show controls
The `o-image` component show controls by default, you can configure hide the controls by setting the value *no* to `show-controls` attribute.


## Configure size
The `o-image` component adjust size the image by default, you can configure hide the controls by setting the value *no* to `size-adjust` attribute.

You can also add the height and the width to an image with `height` and `width` attribute in px or in %.

You can see this and more examples of this component in the [OntimizeWeb playground](https://try.imatia.com/ontimizeweb/playground/main/media)


## Validation

The `o-image` shows automatically an error message when the required attribute is set to 'yes' and there is no value on the input.
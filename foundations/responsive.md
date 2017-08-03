---
layout: sidebar
title: Responsive
description: Guidance for building mobile-first responsive web applications
---

## Introduction

Responsive design is a combinations of flexible grids, flexible embeds, and media queries:

- design and build [mobile first](#mobile-first)
- design for [touch](#touch) inputs and don't count on hover
- consider high resolution devices.

### Mobile first

- Design content and experiences mobile-first
- build for mobile first and override for larger screen sizes
- use progressive enhancement in tandem with a mobile-first approach.

### Touch

Design with touch devices in mind and don't rely on hover states.

Touch targets should be at least 48x48 dp (device-independent pixels). This equates to a physical size of around 7-10mm (5mm at an absolute minimum). Keep an 8dp space between touchable elements where possible.

Use progressive enhancement to allow natural gestures on touch devices where appropriate. For example, sliding a carousel or scrolling a list. Don't rely solely on gestures and offer a simpler fallback like a click or tap. We recommend [Hammer.js](http://hammerjs.github.io/) for implementing touch gestures.

### Viewport

To ensure proper rendering and touch zooming, add the viewport meta tag to your `<head>`:

{% capture viewport %}
<meta name="viewport" content="width=device-width, initial-scale=1">
{% endcapture %}
{% include source.html lang='html' body=viewport title='Viewport meta tag' %}

Avoid using `maximum-scale=1` or `user-scalable=no` as these restrict a user's ability to zoom.

## Breakpoints

The following table shows our breakpoints. These form the basis of everything responsive. They're used within:

- [media queries](#media-queries)
- [grids](#grids)
- [spacing](#spacing)
- [visibility](#visibility).

| Breakpoint     | SASS variable         | Width (px) | Width (em) |
| -------------- | --------------------- | ----------:| ----------:|
| **xs**         | `$nice-breakpoint-xs` | 400        | 25         |
| **sm**         | `$nice-breakpoint-sm` | 600        | 37.5       |
| **md**         | `$nice-breakpoint-md` | 900        | 56.25      |
| **lg**         | `$nice-breakpoint-lg` | 1200       | 75         |
| **xl**         | `$nice-breakpoint-xl` | 1600       | 100        |

### Media queries

We use [SASS MQ](https://github.com/sass-mq/sass-mq) for composing media queries. Use `$from` with SASS MQ for `min-width` media queries to build mobile first. Override styles for wider screens widths:

{% capture mediaqueries %}
.rule {
    background: blue;

    @include mq($from: sm) {
        background: red;
    }
    @include mq($from: md) {
        background: green;
    }
    @include mq($from: lg) {
        background: orange;
    }
}
{% endcapture %}
{% include source.html lang='scss' body=mediaqueries title='Media queries example' %}

Note: our media queries are outputted in CSS as `em` based, converted from the pixel breakpoint values. This is so that layouts respond to the user's browser set font size.

### Grids

Grids item widths are mobile first. Use `breakpoint:columns` for grid item widths across breakpoints:

{% capture grid %}
<div class="grid">
    <div data-g="12 xs:6 md:4 lg:3">Item</div>
    <div data-g="12 xs:6 md:4 lg:3">Item</div>
</div>
{% endcapture %}
{% include source.html lang='html' body=grid title='Responsive grid example' %}

Use mixins for responsive grids within custom components:

{% capture gridmixins %}
.layout {
    @include grid;

    &__sidebar {
        @include grid-item(12, $md: 3, $lg: 4);
    }

    &__body {
        @include grid-item(12, $md: 9, $lg: 8);
    }
}
{% endcapture %}
{% include source.html lang='scss' body=gridmixins title='Responsive grid mixins' %}

[Read more about grids]({{ site.baseurl }}{% link foundations/layout.md %}#grid-system)

### Spacing

Use responsive [spacing classes]({{ site.baseurl }}{% link foundations/spacing.md %}#css-classes) to override margins and paddings across screen sizes.

### Visibility

Use responsive [visibility classes]({{ site.baseurl }}{% link foundations/spacing.md %}#responsive-helpers) to show and hide elements across screen sizes.

### Legacy browsers

Use [Respond.js](https://github.com/scottjehl/Respond) if you need to support min/max-width CSS3 media queries in IE8 and other older browsers.

{% capture respond %}
<head>
    <!-- Put your CSS here, before Respond.js -->
    <!--[if lt IE 9]>
        <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
{% endcapture %}
{% include source.html lang='html' body=respond title='Respond.js example' %}

## Embeds

Use our [maintain ratio component]({{ site.baseurl }}{% link components/maintain-ratio.md %}) to embed images or videos within responsive sites.

## Responsive typography

Our typography uses relative units and we set a base font size on the html element. This means our typography is responsive and fluid by default.

Follow our [typography]({{ site.baseurl }}{% link foundations/typography.md %}) rules and use our typography mixins.

## Media queries in JavaScript

Use the `breakpoints` module:

{% capture mediaqueriesjs %}
import { breakpoints } from "@nice-digital/design-system";
// Or if you're building a core module: import breakpoints from "./breakpoints";

console.log(breakpoints.breakpoints.md); // 900
console.log(breakpoints.matchesFrom("md")); // true/false
{% endcapture %}
{% include source.html lang='js' body=mediaqueriesjs title='Media queries in JavaScript' %}

Support older browsers by polyfilling `window.matchMedia`:

Use [matchMedia polyfill](https://github.com/paulirish/matchMedia.js) to support CSS3 capable browsers that do not implement the matchMedia API, e.g. IE9.

Use [media-match polyfill](https://github.com/weblinc/media-match) for full support in older browsers from IE6+.
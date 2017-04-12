---
layout: sidebar
title: Foundations
inpagenav: false
---

This guide shows how to make your service look consistent with the rest of NICE.
{:.lead}

<div class="grid">

    {% capture buttons %}{% link foundations/buttons.md %}{% endcapture %}
    {% include menu-item.html title='Buttons' href=buttons description='Button of different types, colours and sizes and combination of buttons' %}

    {% capture colour %}{% link foundations/colour.md %}{% endcapture %}
    {% include menu-item.html title='Colour' href=colour description='Colour palettes and usage, contrast guidelines and SASS variables' %}

    {% capture helpers %}{% link foundations/helpers.md %}{% endcapture %}
    {% include menu-item.html title='Helpers' href=helpers description='Useful helper classes for common tasks' %}

    {% capture iconography %}{% link foundations/iconography.md %}{% endcapture %}
    {% include menu-item.html title='Iconography' href=iconography description='Icons, their usage and how to create new icons' %}

    {% capture layout %}{% link foundations/layout.md %}{% endcapture %}
    {% include menu-item.html title='Layout' href=layout description='Containers, grid, layouts and responsive behaviours' %}

    {% capture typography %}{% link foundations/typography.md %}{% endcapture %}
    {% include menu-item.html title='Typography' href=typography description='Headings, paragraphs, featured text, quotations, lists, links' %}

    {% capture visibility %}{% link foundations/visibility.md %}{% endcapture %}
    {% include menu-item.html title='Visibility' href=visibility description='Showing and hiding elements across breakpoints, for print, device orientations and screen readers' %}

</div>
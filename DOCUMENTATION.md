# Centurion Framework

[![NPM version](https://badge.fury.io/js/centurion-framework.svg)](http://badge.fury.io/js/centurion-framework)
[![Gem Version](https://badge.fury.io/rb/centurion-framework.svg)](http://badge.fury.io/rb/centurion-framework)

Centurion is a responsive framework built for speed, simplicity, and flexibility. It features a grid, typography, buttons, tables, and so much more in order to create a seamless framework that could allow web developers to start up a new project easily without the need to spend time overwriting every single style.

To get started, check out <http://centurionframework.com/> for more information.

## Table of contents

* [Get Started](#get-started)
* [Documentation](#documentation)
    * [The Grid](#the-grid)
    * [Badges](#badges)
    * [Breadcrumbs](#breadcrumbs)
    * [Buttons](#buttons)
    * [Callouts](#callouts)
    * [Clearfix](#clearfix)
    * [Colors](#colors)
    * [Forms](#forms)
    * [Layout](#layout)
    * [Navigation](#navigation)
    * [Normalize](#normalize)
    * [Tables](#tables)
    * [Typography](#typography)
* [Sass Configurations](#configurations)
* [Sass Mixins](#sass-mixins)


<a name="get-started"></a>
## Get Started

  - Download latest release
  - Clone the repo: `git clone https://github.com/justinhough/Centurion.git`
  - Install with [NPM](https://www.npmjs.com/package/centurion-framework) for Grunt or Gulp
  - Install as a [RubyGem](https://rubygems.org/gems/centurion-framework)


### In the Release

When you download Centurion the files are broken down into usage as either the entire library or with just the grid. Depending on the usage and requirements for your website you can easily remove files that you don't need.

Centurion is built using vanilla Sass (basically no library dependencies) and comes with some custom Sass mixins that you can attach to create your own custom blend for your site. The Sass files are also included if you would like to import them into your Sass compiler of choice, but you can also install them via [NPM](https://www.npmjs.com/package/centurion-framework), if you use Grunt and Gulp.

  ```
  |__ \centurion
     |__ \css
        |__ \minified
        |__ centurion.css
        |__ custom.css
        |__ grid-rtl.css
        |__ grid.css
      |__ \img
      |__ \js
  ```

To include Centurion into your Sass project, add the Sass library located in `lib/sass/_centurion-framework.scss` using an `@import` to the top of your Sass file and your good to go.

**Note:** Any files with `-rtl` are for right-to-left language support.



<a name="documentation"></a>
## Documentation


<a name="the-grid"></a>
### The Grid

If you would like to build your own custom grid using Centurion, please review the NPM and RubyGem sections in the main `README`.

The `.ctn-container` serves as the wrapper for all grid elements and is the only portion of the grid that uses a pixel based width for desktop (it is percentage based for tablets and phones). For desktops the container is set to `1100px` max and is fluid below `901px`.

Utilizing the grid comprises of three components the container, a row, and grid elements. For example, if you want to use the full width, then set the grid element to `.ctn-grid-24`. If you want to divide your page space into two columns for a central content area and with a left bar, then you would add to elements, such as, `.ctn-grid-6` and `.ctn-grid-18`. The number correlates to the amount of columns that you want the area to occupy.

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#grid).


#### Nested Grid Elements

Nesting grid elements is essential to build complex layouts out for the space to be manageable and better suited for smaller blocks of content. For example, if you want to have content nested like an image with captions within a `ctn-grid-18` then you wold follow the following procedure:

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#grid-nested).

#### Center Grid Elements

Centering grid elements is a great technique if you want to center grid elements in the center of a page without using push or pull. Using FlexBox you can now center and align grid elements more easily than in previous versions.

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#grid-center).


<a name="badges"></a>
### Badges

Badges are a way to highlight items that don't have an important call to action, such as, blog categories, notifications, etc. Badges are included in Centurion as a base feature that can be customized using Sass or you can utilize the standard options included.

**Colors available:** `red`, `blue`, `purple`, `orange`, and `green`.

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#badges).


<a name="buttons"></a>
### Buttons

To activate the button styles use the `btn` class. This default class performs all the work in padding, sizing, and shaping your element to look like a button. Generally buttons are only used on sites I have worked on in two places: call to action links and forms, however, you can use a button on any element that you feel needs to look like a button

**Colors available:** `default`, `red`, `blue`, `purple`, `orange`, `green`, and `dark-grey`.

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#buttons).

**Custom Buttons**

Creating custom buttons allows for unique colors and specifications to fit any design. (All buttons are flat colors by default and don't include gradients.) Text color for the create-button mixin is defaulted to white.

`@include create-button($class, $color1, $color2, $text-color: $white);`


<a name="breadcrumbs"></a>
### Breadcrumbs

Breadcrumbs help the user understand where they are in your site architecture and allows them to jump to a parent item in the tree.

Centurion includes 4 default style options for breadcrumbs that include vertical or horizontal layout and large or small font sizes. Colors can be attached to breadcrumbs to affect links and text colors using the built-in color scheme or you can create your own with a simple custom CSS override.

**Color available:** `Default`, `black`, `gray`, `blue`, `orange`, `yellow`, `red`, and `green`.

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#breadcrumbs).


<a name="callouts"></a>
### Callouts

Need to display a callout or an alert to a user warning or informing them of some information. Callouts are now designed to contain alerts as well, so they are no longer separate options.

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#callouts).


<a name="clearfix"></a>
### Clearfix

Clearfix is a way to contain floats without presentational markup. Refer to post by Nicolas Gallagher [A new micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/)


<a name="colors"></a>
### Colors

Centurion established a small color guide to for badges, buttons, callouts, etc. The breakdown below is based upon the Sass markup.

Variable | HEX | RGB
------- | ------- | -------
`$black` |  #000000 | rgb(0, 0, 0)
`$light-grey` | #CCCCCC | rgb(204, 204, 204)
`$grey` | #999999 | rgb(153, 153, 153)
`$dark-grey` | #555555 | rgb(85, 85, 85)
`$light-red` | #EF9D9D | rgb(239, 157, 157)
`$red` | #E04646 | rgb(224, 70, 70)
`$dark-red` | #D02323 | rgb(208, 35, 35)
`$light-blue` | #8FBCE5 | rgb(143, 188, 229)
`$blue` | #2971B2 | rgb(41, 113, 178)
`$dark-blue` | #1F5789 | rgb(31, 87, 137)
`$light-purple` | #A895D7 | rgb(168, 149, 215)
`$purple` | #553A99 | rgb(85, 58, 153)
`$dark-purple` | #402C74 | rgb(64, 44, 116)
`$light-green` | #95C970 | rgb(149, 201, 112)
`$green` | #4A742C | rgb(74, 116, 44)
`$dark-green` | #324F1E | rgb(50, 79, 30)
`$light-orange` | #FFBE65 | rgb(255, 190, 101)
`$orange` | #FE9300 | rgb(254, 147, 0)
`$dark-orange` | #CB7500 | rgb(203, 117, 0)



<a name="forms"></a>
### Forms

Centurion provides form styles and layout options for creating a wide variety of forms.

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#forms).

<a name="layout"></a>
### Layout

Layouts can be difficult to figure out, but Centurion has several pre-built layouts to help you get started.

* [Simple Blog Layout](http://justinhough.github.io/Centurion/layouts/blog.html)
* [Activity Feed](http://justinhough.github.io/Centurion/layouts/feed.html)
* [Crazy](http://justinhough.github.io/Centurion/layouts/crazy.html)
* [Bands](http://justinhough.github.io/Centurion/layouts/bands.html)


<a name="navigation"></a>
### Navigation

Sites need to move users from one page to another in their site structure. This is a basic feature of any site that can become troublesome when having to rebuild basic functionality over and over again.

A basic HTML5 navigation structure might look like this:

    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Test 2</a></li>
            <li><a href="#">Test 3</a></li>
            <li><a href="#">Test 4</a></li>
        </ul>
    </nav>

This code produces a basic horizontal navigation that can be used for main navigation or in page for jumping between subpages. Though there is one more flavor that includes stacked navigation. Stacked navigation is essentially vertical navigation where links are designed to flow down the length of a page rather than across it.

    <nav class="stacked">
        ...
    </nav>

**Examples for navigation coming soon.**


<a name="normalize"></a>
### Normalize

Normalize.css is a customizable CSS file that makes browsers render all elements more consistently and in line with modern standards. Check it out [Github](https://github.com/necolas/normalize.css).


<a name="tables"></a>
### Tables

You know you hate building table after table styles. You can now use the default tables built into Centurion to fit your color scheme.

Colors available: `blue`, `green`, `orange`, `red`, and `yellow`.

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#tables).


<a name="typography"></a>
### Typography

Centurion offers a simple starter typography to get your web project started, however, we recommend that you tweak it to fit your needs via Sass.

**Included:** Headings, paragraphs, lists (ordered and unordered), text treatments, and blockquotes.

[**Check out examples**](http://justinhough.github.io/Centurion/resources.html#typography).





<a name="configurations"></a>
## Sass Configurations
**Sass Location**: `lib/sass/centurion/_config`

### Fonts

* `$font-family` - Set the default font across the project or leave the default: Helvetica Neue Light.
* `$default-font-size` - Set default font size.
* `$default-line-height` - Set default line height.

### Grid Configurations

**Container Widths and Columns**

* `$desktop-width` - Desktop viewport is the largest view for the grid. Default is set to `1100px`.
* `$desktop-columns: 24` - Columns for desktop. Default is `24`.
* `$tablet-width` - Tablet viewport. Default is set to `941px`.
* `$tablet-columns: 12` - Columns for tablet. Default is `12`.
* `$mobile-width` - Mobile viewport. Default is set to `601px`.
* `$mobile-columns: 6` - Columns for mobile. Default is `6`.

**Inner Width, Gutters, and Fallback Value**

* `$inner-width` - Inner width is based on a percentage of 100%. Default is `98%`.
* `$gutter` - Gutter is the total distance between two grid elements. Default is `20px`.
* `$value` - Value is the value for elements that do not support REM, and currently this is set to `PX`.

**Grid Prefix**

* `$prefix-class` - Prefix class is to avoid collisions with other frameworks or JavaScript libraries and adds `ctn` to the beginning of all grid classes.

**Container and Row**

* `$container-class` - Grid container class. Default is `ctn-container`.
* `$row-class` - Grid row class. Default is `ctn-row`.

**Desktop Grid**

* `$grid-class` - Grid class. Default is `ctn-grid-#`.
* `$push-class` - Push class for aligning grid elements from the left edge and uses column number in `$desktop-columns`. Default is `ctn-push-#`.
* `$pull-class` - Pull class for aligning grid elements from the right edge and uses column number in `$desktop-columns`. Default is `ctn-pull-#`.

**Tablet Grid**

* `$t-grid-class` - Tablet grid class. Check `$tablet-columns` for column amount. Default is `ctn-tablet-#`.
* `$t-push-class` - Tablet push class for grid. Uses column number in `$tablet-columns`. Default is `ctn-t-push-#`.
* `$t-pull-class` - Tablet pull class for grid. Uses column number in `$tablet-columns`. Default is `ctn-t-pull-#`.

**Mobile Grid**

* `$m-grid-class` - Mobile grid class. Check `$mobile-columns` for column amount. Default is `ctn-mobile-#`.
* `$m-push-class` - Mobile push class for grid. Uses column number in `$mobile-columns`. Default is `ctn-m-push-#`.
* `$m-pull-class` - Mobile pull class for grid. Uses column number in `$mobile-columns`. Default is `ctn-m-pull-#`.


### Layout Classes

You can add or adjust top or bottom margin / padding using classes. Values are based on `$default-font-size` and are generated up to a multiple of 5. So a font value of `15px` generates classes for margin / padding like so: (1) `15px`, (2) `30px`, (3)`45px`, (4) `60px`, and (5) `75px`.

* `$margin-top` - Default is `helmet-#`.
* `$margin-bottom` - Default is `sandal-#`.
* `$margin-both` - Default is `armor-#`.

* `$padding-top` - Default is `pad-helmet-#`.
* `$padding-bottom` - Default is `pad-sandal-#`.
* `$padding-both` - Default is `pad-armor-#`.


### RTL Support

`$lang-front: left;` - The grid can be modified to align grid elements from right to left by changing this value. Default is `left`.


### Browser Prefixes

* `$prefixes` - Custom prefix values for internal mixins. **May be deprecated in a future version by using Autoprefixer with Grunt**

<a name="sass-mixins"></a>
## Sass Mixins


#### `@include rem($property, $values)`

Convert pixel values to REM values based on default font size and will automatically include a fallback in pixels for older browsers.

* `$property` - CSS property you want converted to REMs. Example: `font-size`, `margin`, `padding`, or `margin-bottom`.
* `$values` - Accepts one or multiple values (with or without pixels). Example: `10px 15px` or `10 15`.
* `$default` - Set automatically in mixin, but can be changed on a case by case basis by appending a third value or globally by changing `$default-font-size`.


#### `@include box-shadow($top, $bottom, $spread, $color)`

Create box shadows for any elements more consistently. More features will be added to this for inset and multiple box shadows in the future.

* `$top` - Offset-x in pixels. 
* `$bottom` - Offset-y in pixels. 
* `$spread` - Blur radius in pixels, by default is set to 5px.
* `$color` - Color of the shadow (HEX or RGBA), by default is set to 40% Black.


#### `@include gradient($amount, $start, $end, $middle)`

Mixin for generating two and three value gradients from top to bottom.

* `$amount` - Accepts one of 2 values, `two` or `three`
* `$start` - Start value for gradient in percent. Example: `10%`
* `$end` - End value for gradient in percent.
* `$middle` - Middle value for gradient in percent, used for `three` amount gradient. 


#### `@include media-query($media)` 

Mixin for media queries that are adjusted to the same breakpoints that the grid utilizes. Custom queries is also an option to keep your Sass structure more streamlined.

* `$media` - Accepts one of 3 values: desktops, tablets, phones


#### `@include show-hide-view($view)` - 

Mixin for showing or hiding elements based on media query (uses general grid break points). By selecting `desktop` you are hiding that element on desktop, but will be visible on tablet and mobile.

* `$media` - Values accepted `desktop`, `tablet`, and `mobile`.


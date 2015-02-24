# Centurion Documentation (with Sass)


When you download and extract Centurion for the first time you'll notice the main files broken down in the following structure. Depending on the usage and requirements for your website you can easily remove files that you don't need.

Centurion is built using vanilla Sass (basically no library dependencies) and comes with some custom Sass mixins that you can attach to create your own custom blend for your site. Remove what you don't need and move on. The Sass files that Centurion is compiled from are stored in `lib/sass` which contains the Sass files for compile and `lib/sass/centurion` are Centurion’s custom mixin libraries.

## Structure
**Note**: All files are in `.scss` format unless otherwise noted.

    |__ \build 
    	 |__ \css
    		  |__ \minified
          |__ centurion.css
          |__ custom.css
          |__ grid-rtl.css
          |__ grid.css
        |__ \img
        |__ \js
    |__ \lib
      |__ \img
      |__ \js
        |__ \libs (JavaScript libraries)
        |__ centurion.js
        |__ grid-calculate.js
      |__ \sass
        |__ \centurion (Sass mixin libraries)
           |__ _badges
           |__ _buttons
           |__ _callouts
           |__ _clearfix
           |__ _colors
           |__ _config
           |__ _grid-legacy
           |__ _grid-semantic
           |__ _grid
           |__ _layout
           |__ _mixin
           |__ _navigation
           |__ _normalize
           |__ _tables
           |__ _typography
        |__ _centurion-framework
        |__ centurion
        |__ custom
        |__ grid-rtl
        |__ grid

**Note:** Any files with `-rtl` are for right-to-left language support.



## Components
- The Grid
- Badges
- Breadcrumbs
- Buttons
- Callouts
- Captions
- Colors
- Images
- Navigation
- Pagination
- Print Styles
- Tables
- Typography





## Config
**Sass Location**: `lib/sass/centurion/_config`

#### Fonts

`$font-family`

`$default-font-size`

`$default-line-height`

#### Legacy Browser Support

`$ie7-support`

#### Grid Configurations

`$desktop-width`

`$tablet-width`

`$mobile-width`

`$inner-width`

`$gutter`

`$value`

`$desktop-columns: 24;`

`$tablet-columns: 12;`

`$mobile-columns: 6;`

`$prefix-class: "ctn";`

`$container-class: $prefix-class+"-container";`

`$grid-class: $prefix-class+"-grid";`

`$tablet-grid-class: $prefix-class+"-tablet";`

`$mobile-grid-class: $prefix-class+"-mobile";`


#### Push, Pull, Pre, and Post Classes
**Note:** Pre and Post are not currently used within Centurion.

`$push-class: "push";`

`$pull-class: "pull";`

`$pre-class: "pre";`

`$post-class: "post";
`

#### RTL Language Support

`$lang-front: left;`

#### Layout Classes

`$margin-top`
`$margin-bottom`
`$margin-both`
`$padding-top`
`$padding-bottom`
`$padding-both`

#### Browser Prefixes
`$prefixes`



## Partials

The main features of Centurion are broken in to partials to allow for ease of updating to different features without breaking the core. These partials are located in `lib/sass/centurion`. (These files don't get compiled when the CSS files are created.)

### Badges
**Sass Location**: `lib/sass/centurion/_badges`

Badges are a simple way to highlight items that don't have an important call to action, such as, blog categories, unread email items, etc. Badges are included in Centurion as a base feature that can be included or not. 

To include add the following: `@include badges`

### Buttons
**Sass Location**: `lib/sass/centurion/_buttons`

To activate the button styles use the `btn` class. This default class performs all the work in padding, sizing, and shaping your element to look like a button. Generally buttons are only used on sites I have worked on in two places: call to action links and forms, however, you can use a button on any element that you feel needs to look like a button

**Example**

    <a href="#" class="btn">Button</a>

**Colored Buttons**

    <a href="#" class="blue-btn">I'm a Button</a>

    <a href="#" class="orange-btn">I'm a Button</a>

### Sizes

Colors are not the only feature that you have a your disposal. If the button by default is too large for you tastes you can shrink it with the addition of the class `small-btn`.

    <a href="#" class="small-btn">I'm a Tiny Button</a>

Though if you by chance need a larger button for your page for a possibe "buy" button then you can make it larger by adding the class `large-btn`.

    <a href="#" class="large-btn">I'm a Large Button</a>

Buttons are an important way to call out a user action and are highly customizable within Centurion. The first step is to include the default button specifications with `@include buttons` and you can either start creating custom versions for a specific design or add the default custom buttons included by including: `@include custom-buttons`.

Creating custom buttons allows for unique colors and specifications to fit any design. (All buttons are flat colors by default and don't include gradients.) Text color for the create-button mixin is defaulted to white.

`@include create-button($class, $color1, $color2, $text-color: $white);`

**Example**: `@include create-button(custom-btn, #A00, #B00)`

**Example with text color**: 
`@include create-button(custom-btn, #A00, #B00, #000)`



### Callouts
**Sass Location**: `lib/sass/centurion/_callouts`

Need to display a callout or an alert to a user warning or informing them of some information. Callouts are now designed to contain alerts as well, so they are no longer separate options. The different between a callout and an alert is that an alert contains more information that can be shown or hidden via JavaScript.

To create a callout you can call the default with `.callout` or you can prepend any of the six color options, like so: `.purple-callout` to change the color.

To create an alert simply add the class aler to the same `<div>`, like so: `.red-callout alert`.


Need to display an alert to a user, or warn them about impending work that will be taking place on your site. No matter the option that can help. The default callout box doesn't do much of anything except display information in a grey box.

    <div class="callout">
        <p>This is default alert box!</p>
    </div>

However, you might have to alert a user in clear definable ways such as give them an error message, information, warn them of some changes, or tell them that their work has been saved. All these options exist and require only a class change.

Error: `<div class="red-callout alert"></div>`

Warning: `<div class="orange-callout alert"></div>`

Information: `<div class="blue-callout alert"></div>`

Success: `<div class="green-callout alert"></div>`

- @include callout($class, $bk-color, $border-color, $text-color)
- @include callouts








## Clearfix
**Sass Location**: `lib/sass/centurion/_clearfix`

- @include clearfix()


## Colors
**Sass Location**: `lib/sass/centurion/_colors`

- @include single-color-swatch($class, $color, $light-color, $dark-color)
- @include color-swatches()
  



### Grid
**Sass Location:** `lib/sass/centurion/_grid`

Originally Centurion was built only a responsive grid, so at its core Centurion is built to be responsive. The grid is built using a Sass mixin, which makes it highly customizable. The only portion of the grid system that uses a pixel width is the container. For desktops the default container is set to `1100px` wide and is fully fluid below `768px` for tablets and smartphones.

Utilizing the grid in your your project requires a container wrapper to set the main size of the area with grid elements inside to divide the space of the content area as needed. For example, if you want to use the full width for a banner that spans the page, then you would specify a `ctn-grid-24`. 24 columns is the full width of the default grid and is easily divisible in any design pattern. If you want to divide the page in two columns (a main body and a sidebar) you could use a `ctn-grid-18` and a `ctn-grid-8`. The number corresponds the amount of columns that the grid will occupy within the container.

    <div class="ctn-container">
        <div class=“ctn-grid-18">
            …
        </div>
        <div class="ctn-grid-8">
            …
        </div>
    </div>

Centurion even includes adjustment grids for tablet and mobile experiences in case there is a special need to change the width of a grid element on a specific size.

    <div class="ctn-container">
        <div class=“ctn-grid-18 ctn-tablet-6 ctn-mobile-3”>
            …
        </div>
        <div class="ctn-grid-8 ctn-tablet-6 ctn-mobile-3">
            …
        </div>
    </div>


**Note:** For each row make sure that you elements add up to 24 columns across in order to utilize the full row. However, if you want to center one grid element on each row then you will want to use Centering Grids below.

### Nesting Grids

The best part of any grid system is the ability to nest elements within a single grid element to break down the space into smaller, manageable spaces.

For example, say that you want to have content in a `ctn-grid-18`, but you also want to add three images with captions side-by-side beneath the main block of text. In order to create this layout will need to put three `ctn-grid-8` grid elements inside the parent grid element.

    <div class=“ctn-grid-18">
        <p>Some text talking about something.</p>
        <div class="ctn-grid-8">
            <img src="" alt="" />
            <p>Image caption is written here</p>
        </div>
        <div class="ctn-grid-8">
            <img src="" alt="" />
            <p>Image caption is written here</p>
        </div>
        <div class="ctn-grid-8">
            <img src="" alt="" />
            <p>Image caption is written here</p>
        </div>
    </div>


### Alpha and Omega

The `.alpha` and `.omega` classes are no longer required within the grid. There are still oddities within IE 7 when it comes to the grid, but in those cases it is best to target children grid elements with JavaScript and add appropriate classes as needed to remove the extra padding around the first and last elements within a row.

### Centering Grids

Centering grid elements is as easy as adding `grid-center` to your grid element. This will evenly space your element in the center of your grid container.

    <div class="ctn-grid-18 grid-center">
        <p>Centered Grid</p>
    </div>
    <div class="clear"></div>


### Semantic Grid

This feature has been deprecated in the current 3.5 branch, but will be brought back in a future release if the community wants this feature.


- @include column-base()
- @include grid-creator($type)
- @include grid-generate($columns, $width, $class, $exclude)
- @include push-pull-elements($columns, $push-elem, $pull-elem)

#### Responsive Adjustments to Grid and Push/Pull
- @include adjust-grid($columns, $column-count, $class, $respond)
- @include adjust-push-pull($columns, $column-count, $push-elem, $pull-elem, $respond)

#### Nested and Centered Grid Elements
- @include nested-grid-elements($class)
- @include center-grid-elements($class)

#### Show and Hide Elements
- @include show-hide($value)
- @include hide-view($value);
- @include show-view($value);





### Semantic Grid
**Sass Location**: `lib/sass/centurion/_grid-semantic`

- @include semantic-grid($type, $width)




### Layout
**Sass Location**: `lib/sass/centurion/_layout`

- @include margin-block-layout($layout-rows: 5)
@include padding-block-layout($layout-rows: 5)


### Mixin
**Sass Location**: `lib/sass/centurion/_mixin`

- @include rem($property, $values)
- @include box-sizing($value: border-box)
- @include box-shadow($top, $bottom, $spread, $color)
- @include css3-transition($option, $time)
- @include media-query($media)
- @include gradient($amount, $start, $end, $middle)
- @include border-radius($radius, $radius2)
- @include border-radius-dir($radius, $dir)

- @include border-top-left-radius($radius)
- @include border-top-right-radius($radius)
- @include border-bottom-left-radius($radius)
- @include border-bottom-right-radius($radius)
- @include element-spacing($direction, $spacing, $value, $value2)

- @include hide-view($view)
- @include show-view($view)

- @include float-elements()
- @include float-left()
- @include float-right()



## Images

For images we've included a few features to enhance images, such as, portrait boxes and left or right positioning.

Portrait creates a one pixel border around the image to make it look like a photograph.

    <img src="http://placehold.it/200" class="portrait" />

To position an image left or right of content and make the content wrap around the image then use the `left-push` or `right-push` to position the graphic appropriately. You can take a wild guess as to which direction they both move your image.

    <img src="http://placehold.it/200" class="left-push" />

    <img src="http://placehold.it/200" class="right-push" />


### Navigation
**Sass Location**: `lib/sass/centurion/_navigation`

#### Navigation

A site needs to move users from one page to another in their site structure. This is a basic feature of any site that can become troublesome when having to rebuild basic functionality over and over again.

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

#### Pagination

Pagination is useful on blogs or sites that have continuous content that they do not want to display on one "long" page. If this is the case then the pagination styles are ready for you to make your site pop.

The basic functionality of pagination is a list of pages. There is no code logic behind this feature since the functionality of pagination should be handled individually on each site that uses it. This is basically a leg up so that you don't have to do the base work to get started.

    <div class="pagination">
        <ul>
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&raquo;</a></li>
        </ul>
    </div>


### Tabs

Tabs can be fun, if they are used in the right context. I believe in simple tabs and some times we all end up writing far to much code to do a simple job. Tabs in general comprise of a wrapper `.tabs`, a ul list `.tab-nav`, and then, of course, our `.tab`. Each tab is labeled with a unique ID that identifies it to one of the tab links found in our ul list.

    <div class="tabs">
        <ul class="tab-nav">
            <li><a href="#tab1">Tab 1</a></li>
            <li><a href="#tab2">Tab 2</a></li>
            <li><a href="#tab3">Tab 3</a></li>
        </ul>
        <div id="tab1" class="tab">
            <p>Text goes here</p>
        </div>
        <div id="tab2" class="tab">
            <p>Text goes here</p>
        </div>
        <div id="tab3" class="tab">
            <p>Text goes here</p>
        </div>
    </div>

However, say that you don't want your tabs to be on top of the content, but below. On occasion this would require massive amounts of re-coding in order to get the display to work. However, through CSS all you need to do is add a new class to the wrapper tabBottom

    <div class="bottom-tabs">
        ...
    </div>

### Breadcrumbs

Breadcrumbs help the user understand where they are in your site architecture and allows them to jump to a parent item in the tree.

Centurion includes 4 default style options for breadcrumbs that include vertical or horizontal layout and large or small font sizes.

* Vertical (Default)
* Horizontal `horizontal`
* Large `large`
* Regular (Default)
* Small `small`

Colors can be attached to breadcrumbs to affect links and text colors using the built-in color scheme or you can create your own with a simple custom CSS override.

* Default
* Black `black`
* Gray `gray`
* Blue `blue`
* Orange `orange`
* Yellow `yellow`
* Red `red`
* Green `green`


- @include navigation()
- @include breadcrumbs()


### Normalize
**Sass Location**: `lib/sass/centurion/_normalize`

- @include normalize()


### Tables
**Sass Location**: `lib/sass/centurion/_tables`

You know you hate building table after table styles. You can now use the default tables built into Centurion to fit your color scheme.

By default the table styles that Centurion uses work out of the box. Create a table and it works with the default grey. To change colors you can specify your own or you can use the ones that come pre-packed.

### Basic Table

I personally prefer to keep my tables structured properly, especially because I enjoy seeing the green check mark when a site validates.

    <table>
        <thead>
            <tr>
                <th colspan="4">Table Header</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Content</td>
                <td>This is longer content</td>
                <td>Content</td>
                <td>Content</td>
            </tr>
            <tr>
                <td>Content</td>
                <td>This is longer content</td>
                <td>Content</td>
                <td>Content</td>
            </tr>
            <tr>
                <td>Content</td>
                <td>This is longer content</td>
                <td>Content</td>
                <td>Content</td>
            </tr>
        </tbody>
    </table>

Similar to the usage of buttons, tables come with the same color scheme choices to match.

* Blue `blue-table`
* Green `green-table`
* Orange `orange-table`
* Red `red-table`
* Yellow `yellow-table`

However, if you are obverse to colors in general, such as, when you are wire framing a new site you can either stick with basic grey or use black to make a site pop a little. To set the color all you have to do is set the class on the table itself, like this: `<table class="blue-table">`


- @include table-base()
- @include table-color-generator($class, $color1, $color2, $color3)
- @include tables()




### Typography
**Sass Location**: `lib/sass/centurion/_typography`

@include force-wrap()
@include typography()

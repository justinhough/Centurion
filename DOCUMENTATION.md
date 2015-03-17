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
  




## Grid

The grid system is the basis for Centurion and everything has been built around it. It is meant to be adaptive and responsive and highly customizable to any needs based upon the Sass build functionality. If you would like to build your own custom Centurion grid then please review the NPM or RubyGem sections based upon your needs.

The `.ctn-container` serves as the wrapper for all grid elements and is the only portion of the grid that uses a pixel based width for desktop (it is percentage based for tablets and phones). For desktops the container is set to `1100px` max and is fluid below `768px`.

### Usage

Utilizing the grid comprises of two components the container and the grid element itself. For example, if you want to use the full width, then set the grid element to `.ctn-grid-24`. If you want to divide your page space into two columns for a central content area and with a left bar, then you would add to elements, such as, `.ctn-grid-6` and `.ctn-grid-18`. The number correlates to the amount of columns that you want the area to occupy.

    <div class="ctn-container">
        <div class="ctn-grid-6">
            …
        </div>
        <div class="ctn-grid-18">
            … 
        </div>
    </div>

**Note:** To ensure that content will not wrap below for a particular row you need make sure that one complete row of grid elements adds up to 24 columns. 

### Nesting Grids

The best part of any grid system is the ability to nest elements within a single grid element or to create complex layouts that allow for the space to become manageable by smaller blocks of content. For example, if you want to have content nested like an image with captions within one `ctn-grid-18` then you would follow the following procedure.

    <div class="ctn-grid-18">
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

### Centering Grids

Centering grid elements is a great technique if you want to center one grid element in the center of a page. One thing to consider is the you cannot have two grid elements centered side-by-side on the page, because you can only center one grid element at a time. 

    <div class="ctn-grid-18 ctn-grid-center">
        <p>Centered Grid</p>
    </div>
    <div class="clear"></div>

### Semantic Grid

If you are not fond of column based grids and tend to lean more towards a semantic grid that you create based on a specific page layout then you can build a custom semantic grid solution using Centurion’s built-in Sass functions. Perhaps you only want to specify elements, such as, `aside` and `article` which will receive a width that you specify.

**Example**

    <section>
        <aside id="left-bar">
            ...
        </aside>
        <article id="content">
            ...
        </article>
    </section>


### Grid Sass Config

**Partial Location**: `assets/sass/centurion/_grid.scss`

**LTR or RTL Support**
	$ie7-support: false
	$lang-front: left
	$lang-back: right

**Desktop**
	$max-grid-size: 1120px
	$grid-size: 960px
	$max-space: 2%
	$max-rows: 20

**Mobile**
	$max-resp-width: 100%
	$max-resp-space: $max-space

**Classes for Grid**
	$grid-class: grid
	$mobile-class: mobile
	$pull-class: pull
	$push-class: push

**Grid Generate**
	@include column-base()
	@include grid-creator($type)
	@include grid-generate($columns, $width, $class, $exclude)

**Nested and Centering**
	@include nested-grid-elements($class)
	@include center-grid-elements($class)

**Push and Pull**
	@include push-pull-elements($columns, $push-elem, $pull-elem)
	@include adjust-grid($columns, $column-count, $class, $respond)
	@include adjust-push-pull($columns, $column-count, $push-elem, $pull-elem, $respond)


### Semantic Grid Sass

**Partial Location**: `assets/sass/core/_grid-semantic.sass`

**Semantic Grid Container**
	@include sem-container($total-width)

**Semantic Grid Element**
	@include semantic-grid($type, $width)

**Semantic Push**
	@include sem-push($offset-push, $direction: $lang-front)

**Semantic Pull**
	@include sem-pull($offset-pull, $direction: $lang-front)


### Show and Hide Elements
- @include show-hide($value)
- @include hide-view($value);
- @include show-view($value);




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

## List of Current Features
- [The Grid](#grid)
    - [IE 7 Support](#ie7-support)
    - [RTL Language Support](#rtl-support)
- [Badges & Labels](#labels)
- [Breadcrumbs](#breadcrumbs)
- [Buttons](#buttons)
- Callouts
    - [Alerts](#alerts)
    - [Blockquotes](#blockquotes)
    - [Frame boxes](#frame-boxes)
    - [Panels](#panels)
    - [Tooltips](#tooltips)
- [Captions](#captions)
- [Colors](#colors)
- [Images](#images) (adaptive and sprites)
- [Navigation](#navigation) - Moved to CarrieJS (https://github.com/justinhough/CarrieJS)
- [Pagination](#pagination)
- [Print Styles](#print)
- [Tables](#tables)
- [Typography](#typography)
    - [Lists](#lists)
- [Tabs](#tabs)



## Structure

When you download and extract Centurion for the first time you'll notice the main files broken down in the following structure. Depending on the usage and requirements for your website you can easily remove files that you don't need.

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
            |__ _centurion-framework.scss
            |__ centurion.sass
            |__ custom.sass
            |__ grid-rtl.sass
            |__ grid.sass


**Note:** Any files with `-rtl` are for right-to-left language support.


<a name="sass"></a>
## Sass Supported
Centurion is built using vanilla Sass (basically no library dependencies) and comes with some custom [Sass Mixins](#custom-mixins) that you can attach to create your own custom blend for your site. Remove what you don't need and move on.



<a name="grid"></a>
## The Grid

Originally Centurion was built only a responsive grid, so at its core Centurion is built to be responsive. The grid is built using a Sass mixin, which makes it highly customizable. The only portion of the grid system that uses a pixel width is the container. For desktops the default container is set to `1100px` wide and is fully fluid below `768px` for tablets and smartphones.


### Basic Structure

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


<a name="alerts"></a>
## Callouts

Need to display a callout or an alert to a user warning or informing them of some information. Callouts are now designed to contain alerts as well, so they are no longer separate options. The different between a callout and an alert is that an alert contains more information that can be shown or hidden via JavaScript.

To create a callout you can call the default with `.callout` or you can prepend any of the six color options, like so: `.purple-callout` to change the color.

To create an alert simply add the class aler to the same `<div>`, like so: `.red-callout alert`.


Need to display an alert to a user, or warn them about impending work that will be taking place on your site. No matter the option that can help. The default callout box doesn't do much of anything except display information in a grey box.

    <div class="callout">
        <p>This is default alert box!</p>
    </div>

However, you might have to alert a user in clear definable ways such as give them an error message, information, warn them of some changes, or tell them that their work has been saved. All these options exist and require only a class change.


### Error

    <div class="red-callout alert"></div>

### Warning

    <div class="orange-callout alert"></div>

### Information

    <div class="blue-callout alert"></div>

### Success

    <div class="green-callout alert"></div>



<a name="blockquotes"></a>
## Blockquotes

Documentation coming soon.




<a name="breadcrumbs"></a>
## Breadcrumbs

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



<a name="buttons"></a>
## Buttons

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



<a name="captions"></a>
## Captions

Documentation coming soon.



<a name="colors"></a>
## Colors

Colors can be attached to buttons to change the background colors. By default, the `button` class is a grey button, but since those look like deactivated buttons, so we have added 7 color flavors for your choosing.

* Black `black`
* Red `red`
* Blue `blue`
* Purple `purple`
* Green `green`
* Orange `orange`




<a name="dropdowns"></a>
## Dropdowns

Documentation coming soon.




<a name="forms"></a>
## Forms

Documentation coming soon.



<a name="frame-boxes"></a>
## Frame boxes

Documentation coming soon.



<a name="labels"></a>
## Labels

Documentation coming soon.




<a name="lists"></a>
## Lists

Documentation coming soon.





<a name="images"></a>
## Images

For images we've included a few features to enhance images, such as, portrait boxes and left or right positioning.

Portrait creates a one pixel border around the image to make it look like a photograph.

    <img src="http://placehold.it/200" class="portrait" />

To position an image left or right of content and make the content wrap around the image then use the `left-push` or `right-push` to position the graphic appropriately. You can take a wild guess as to which direction they both move your image.

    <img src="http://placehold.it/200" class="left-push" />

    <img src="http://placehold.it/200" class="right-push" />



<a name="navigation"></a>
## Navigation

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



<a name="pagination"></a>
## Pagination

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





<a name="panels"></a>
## Panels

Documentation coming soon.



<a name="print"></a>
## Print Styles

Documentation coming soon.



<a name="tables"></a>
## Tables

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

### Color Schemes

Similar to the usage of buttons, tables come with the same color scheme choices to match.

* Blue `blue-table`
* Green `green-table`
* Orange `orange-table`
* Red `red-table`
* Yellow `yellow-table`

However, if you are obverse to colors in general, such as, when you are wire framing a new site you can either stick with basic grey or use black to make a site pop a little. To set the color all you have to do is set the class on the table itself, like this: `<table class="blue-table">`



<a name="tabs"></a>
## Tabs

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




<a name="tooltips"></a>
## Tooltips

Tooltips are great for displaying information to a user that might be necessary to complete an action. Centurion features two types of tooltips: clickable and hoverable.

The functionality changes simply by adding the class tipHover.

    <a class="tooltip" data-title="tooltip text goes here">...</a>
    <a class="tooltip hover-tip" data-title="tooltip text goes here">...</a>




<a name="typography"></a>
## Typography

Documentation coming soon.




<a name="custom-mixins"></a>
## Custom Sass Mixins

Documentation coming soon.





<a name="ie7-support"></a>
## IE 7 Support

Documentation coming soon.




<a name="rtl-support"></a>
## RTL Language Support

Documentation coming soon.




<a name="author-note"></a>
## Author Note

Every feature of this framework is tested using a machine that resembles a computer (I work on a Mac) and was built by a man looking strangely like a developer, but those two options are not always true.

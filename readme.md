## What is Centurion?
Centurion is built on CSS3 and HTML5 semantics to allow you to start capitalizing on a next generation standard. If you're worried about browser support we recommend the [html5shiv](https://code.google.com/p/html5shiv/) or [Modernizr](http://modernizr.com/) to add the basic support for semantic coding.



## Version
Current version of Centurion is 3.3



## List of Features
* [The Grid](#grid)
* [Alerts](#alerts)
* [Blockquotes](#blockquotes)
* [Breadcrumbs](#breadcrumbs)
* [Buttons](#buttons)
* [Captions](#captions)
* [Colors](#colors)
* [Dropdowns](#dropdowns)
* [Frame boxes](#frame-boxes)
* [Font](#elusive-font)
* [Labels](#labels)
* [Lists](#lists)
* [Images](#images) (adaptive and sprites)
* [Navigation](#navigation)
* [Pagination](#pagination)
* [Panels](#panels)
* [Print Styles](#print)
* [Tables](#tables)
* [Tabs](#tabs)
* [Tooltips](#tooltips)
* [Typography](#typography)
* [Custom Sass Mixins](#custom-mixins)
* [IE 7 Support](#ie7-support)
* [RTL Language Support](#rtl-support)



## File Structure

When you download and extract Centurion for the first time you'll notice the main files broken down in the following structure. Depending on the usage and requirements for your website you can easily remove files that you don't need.

    centurion/
    |__ css/
    |  |__ centurion-ie-rtl.css
    |  |__ centurion-ie.css
    |  |__ centurion-rtl.css
    |  |__ centurion.css
    |  |__ custom.css
    |  |__ elusive-webfont.css
    |  |__ reset.css
    |  |__ compressed/
    |  |  |__ [minified css versions]
    |  |__ font/
    |  |  |__ []Elusive Icons]
    |__ js/
    |  |__ centurion.js
    |  |__ lte-ie7.js
    |  |__ modernizr-2.6.2-custom-min.js

**Note:** Any files with `-rtl` are for right-to-left language support and anything marked with `-ie` are stylesheets meant to fix some minor issues with IE7.



<a name="grid"></a>
## The Grid

Originally Centurion was built only a responsive grid, so at its core Centurion is built to be responsive. Developed along the same lines as the [960 Grid](http://960.gs) built by Nathan Smith. The grid is built using a Sass mixin, which makes it highly customizable. The only portion of the grid system that uses a pixel width is the container. For desktops the default container is set to `1100px` wide and is fully fluid below `768px` for tablets and smartphones.


### Basic Structure

Utilizing the grid requires a container wrapper followed by the grid size that you want to use. For example, if you want to use the full width, then set `grid-100`. If you want to divide up your page based into two columns then you can do this: `grid-40` and `grid-60`. The number correlates to the percentage of the container that you want your content to occupy.

    <div class="container">
        <div class="grid-40">
            …
        </div>
        <div class="grid-60">
            … 
        </div>
    </div>

**Note:** For each row make sure that you elements add up to 100 across in order to utilize the full row. However, if you want to center one grid element on each row then you will want to use Centering Grids below.

### Nesting Grids

The best part of any grid system is the ability to nest elements within a single grid element to break down the space into smaller, manageable spaces.

For example, say that you want to have content in a `grid-60`, but you also want to add three images with captions side-by-side beneath the main block of text. In order to create this layout will need to put three `grid-33` grid elements inside the parent grid element.

    <div class="grid-60">
        <p>Some text talking about something.</p>
        <div class="grid-33 alpha">
            <img src="" alt="" />
            <p>Image caption is written here</p>
        </div>
        <div class="grid-33">
            <img src="" alt="" />
            <p>Image caption is written here</p>
        </div>
        <div class="grid-33 omega">
            <img src="" alt="" />
            <p>Image caption is written here</p>
        </div>
    </div>
    
For a mobile layout, you can add `mobile-grid-50` to leave the main content divided in two when it reaches a mobile phone screen size. So if you had 

    <div class="grid-80">
        <p>Some text talking about something.</p>
        <div class="grid-25 mobile-grid-50 alpha">
            <img src="" alt="" />
        </div>
        <div class="grid-25 mobile-grid-50">
            <img src="" alt="" />
        </div>
        <div class="grid-25 mobile-grid-50">
            <img src="" alt="" />
        </div>
        <div class="grid-25 mobile-grid-50 omega">
            <img src="" alt="" />
        </div>
    </div>

Alpha and Omega Each grid element has a margin of 15px on either side to give a nice 30px space between each grid, while this provides a nice aesthetic it causes issues when nesting elements causing the last grid element to wrap to a new line. To fix the issue with this extra margin causing the last nested grid element to wrap there are two classes added into the grid core `alpha` and `omega`.

### Alpha and Omega

The alpha class removes the left margin on the first element that is nested in another grid. The omega class does the exact opposite, which removes the right margin from the last element. Notice that the middle `grid-25` does not have a second class. Only the first and last elements require this fix for the grid to layout properly. 

**Note:** Do not put use alpha or omega on outer grid elements, such as on the grid-6 in the example above. Margins only need be removed on nested elements when they are within another grid.

### Centering Grids

Centering grid elements is as easy as adding `center-grid` to your grid element. This will evenly space your element in the center of your grid container. 

    <div class="grid-60 center-grid">
        <p>Centered Grid</p>
    </div>
    <div class="clear"></div>


### Semantic Grid

If you're not font of column based grid systems then you can use Centurion Sass to build a custom semantic grid framework. You only have to specify what html element will be your grid container and what `aside` and `article` will receive in terms of width (size).

**Example**

    <section>
        <aside id="left-bar">
            ...
        </aside>
        <article id="content">
            ...
        </article>
    </section>



<a name="alerts"></a>
## Alerts

Need to display an alert to a user, or warn them about impending work that will be taking place on your site. No matter the option that can help. The default alert box doesn't do much of anything except display information in a grey box.

    <div class="alert">
        <p>This is default alert box!</p>
    </div>
    
However, you might have to alert a user in clear definable ways such as give them an error message, information, warn them of some changes, or tell them that their work has been saved. All these options exist and require only a class change.


### Error

    <div class="alert error"></div>

### Warning

    <div class="alert warning"></div>

### Information
    
    <div class="alert info"></div>

### Success

    <div class="alert success"></div>



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

To activate the button styles use the `button` class. This default class performs all the work in padding, sizing, and shaping your element to look like a button. Generally buttons are only used on sites I have worked on in two places: call to action links and forms, however, you can use a button on any element that you feel needs to look like a button

**Example**

    <a href="#" class="button small">Small Button</a>

**Colored Buttons**
    
    <a href="#" class="button black">I'm a Button</a>
    
    <a href="#" class="button orange">I'm a Button</a>

### Sizes

Colors are not the only feature that you have a your disposal. If the button by default is too large for you tastes you can shrink it with the addition of the class `small`.

    <a href="#" class="button small">I'm a Tiny Button</a>
    
Though if you by chance need a larger button for your page for a possibe "buy" button then you can make it larger by adding the class `large`.

    <a href="#" class="button large">I'm a Large Button</a>



<a name="captions"></a>
## Captions

Documentation coming soon.



<a name="colors"></a>
## Colors

Colors can be attached to buttons to change the background colors. By default, the `button` class is a grey button, but since those look like deactivated buttons, so we have added 7 color flavors for your choosing.

* Black `black`
* Blue `blue`
* Green `green`
* Grey `grey`
* Red `red`
* Yellow `yellow`

    


<a name="dropdowns"></a>
## Dropdowns

Documentation coming soon.





<a name="elusive-font"></a>
## Font - Elusive Icons
[Elusive Icon Font](https://github.com/aristath/elusive-iconfont) is a webfont created by [Aristeides Stathopoulos](http://aristeides.com/).

To get started you need to prefix `icon-` to every icon that you wish to use. For a full list of icons that you can use please refer to the [Elusive Web Font site](http://shoestrap.org/downloads/elusive-icons-webfont/).





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
    
To position an image left or right of content and make the content wrap around the image then use the `push-left` or `push-right` to position the graphic appropriately. You can take a wild guess as to which direction they both move your image.

    <img src="http://placehold.it/200" class="push-left" />

    <img src="http://placehold.it/200" class="push-right" />



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

Similar to the usage of buttons, tables come with the same color scheme choices to match. By default Centurion features 7 different colors to choose from. Grey is available by default as long as you do not set a class color choice below.

* Blue `ctBlue`
* Green `ctGreen`
* Grey `ctGrey`
* Orange `ctOrange`
* Red `ctRed`
* Yellow `ctYellow`

However, if you are obverse to colors in general, such as, when you are wire framing a new site you can either stick with basic grey or use black to make a site pop a little. To set the color all you have to do is set the class on the table itself, like this: `<table class="ctBlue">`



<a name="tabs"></a>
## Tabs

Tabs can be fun, if they are used in the right context. I believe in simple tabs and some times we all end up writing far to much code to do a simple job. Tabs in general comprise of a wrapper (tabBox), a ul list (tabs), and then, of course, our tabs. Each tab is labeled with a unique ID that identifies it to one of the tab links found in our ul list.

    <div class="tabBox">
        <ul class="tabs">
            <li><a href="#tab1">Tab 1</a></li>
            <li><a href="#tab2">Tab 2</a></li>
            <li><a href="#tab3">Tab 3</a></li>
        </ul>
        <div id="tab1">
            <p>Text goes here</p>
        </div>
        <div id="tab2">
            <p>Text goes here</p>
        </div>
        <div id="tab3">
            <p>Text goes here</p>
        </div>
    </div>

However, say that you don't want your tabs to be on top of the content, but below. On occasion this would require massive amounts of re-coding in order to get the display to work. However, through CSS all you need to do is add a new class to the wrapper tabBottom

    <div class="tabBox tabBottom">
        ...
    </div>




<a name="tooltips"></a>
## Tooltips

Tooltips are great for displaying information to a user that might be necessary to complete an action. Centurion features two types of tooltips: clickable and hoverable.

The functionality changes simply by adding the class tipHover.

    <a class="tooltip" data-title="tooltip text goes here">...</a>
    <a class="tooltip tipHover" data-title="tooltip text goes here">...</a>




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




<a name="special-thanks"></a>
## Special Thanks

I want to take the time to thank a few people for their contributions to this framework

[Aristeides Stathopoulos](https://github.com/aristath) - for his work on the open source [Elusive Icons](https://github.com/aristath/elusive-iconfont), which made Centurion prettier.
[Josh Northcott](http://www.joshnorthcott.com/) - for his tireless effort in spreading the word about responsive design and Centurion.
[Corey Hadden](https://github.com/craql) - for his assistance in making jQuery play nice and for sheer inspiration.


<a name="licensing"></a>
## Licensing

Licensed under [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php).

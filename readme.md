## What is Centurion?
Centurion is a HTML5 / CSS 3 based framework for rapid prototyping. It comes out of the box, or the Git with pre-built features that help you build sites faster for Desktop and Mobile. The grid adjusts to the screen proportions that are given by the browser, and that is all there is to it.

## Current Version
Centruion is currently at version 3.3

## What it can do
* Custom CSS buttons, no images required.
* Grid dimensions from 960 px down to 320 px wide.
* Image scaling.
* Heading scales based on size of browser. (Use em, instead of px)
* Navigation for Desktop and Mobile
* HTML 5 framework with backwards compatibility to IE6

### List of Features
**Note:** Feature list is based on v3.1. As features exist in the current framework documentation will be provided for use. 

* [The Grid](https://github.com/jhough10/Centurion/wiki/Grid)
* [Alerts](https://github.com/jhough10/Centurion/wiki/Alerts)
* [Blockquotes](https://github.com/jhough10/Centurion/wiki/Blockquotes)
* [Buttons](https://github.com/jhough10/Centurion/wiki/Buttons)
* Captions
* Colors
* Frame boxes
* Font-face
* Lists
* Images (adaptive and sprites)
* Navigation
* [Pagination](https://github.com/jhough10/Centurion/wiki/Pagination)
* Print Styles
* Tabs
* [Tables](https://github.com/jhough10/Centurion/wiki/Tables)
* Tooltips
* Typography

## Grid
The Centurion grid system is built using Sass which makes it highly extensible and customizable for any web project. The default build of Centurion available in the repository uses a percentage based grid layout and is highly customizable since the container is the only element that gets a physical pixel width.

Developed along the same lines as the [960 grid built by Nathan Smith](http://960.gs) in its class usage and code structure. The basic setup available on [Github](http://github.com/jhough10/Centurion/) features a percentage grid  layout for desktops (960px and up) and using CSS3 media queries is responsive down to smartphones (360px). 

### Basic Structure
Utilizing the grid requires a container wrapper followed by the grid percentage that you want to use. For example, if you want to use the full width, then set ```grid-100``` or you can divide up your grid and use percentages that equal 100%, such as, ```grid-40``` and ```grid-60```. The number correlates to the percentage of the container that you want your content to occupy.
```html
    <div class="container">
        <div class="grid-40">
            …
        </div>
        <div class="grid-60">
            … 
        </div>
    </div>
```

### Nesting Grids
The best part of any grid system is the ability to nest elements to make a grid smaller without having to make the code more complicated.

For example, say that you want to have content in a ```grid-60```, but you also want to add three images with captions side-by-side beneath the main block of text. So all you have to do is add ```grid-33```. The number in this case for the grid is the percentage amount of the parent container that each nested grid element will take up. If you wanted to have to even spaced nested elements you would use ```mobile-50``` (or 50%).

```html
    <div class="grid-6">
        <p>Some text talking about something, which is followed by some awesome images below that sell the point.</p>
        <div class="mobile-33 alpha">
            <img src="" alt="" />
            <p>Image caption is written here</p>
        </div>
        <div class="mobile-33">
            <img src="" alt="" />
            <p>Image caption is written here</p>
        </div>
        <div class="mobile-33 omega">
            <img src="" alt="" />
            <p>Image caption is written here</p>
        </div>
    </div>
```

**Alpha and Omega**
Each grid element has a margin of 10px on either side to give a nice 20px space between each grid, while this provides a nice aesthetic it causes issues when nesting elements causing the last grid element to wrap to a new line. In the code example above there are two classes utilized to fix this problem: ```alpha``` and ```omega```.

The ```alpha``` class removes the left margin on the first element that is nested in another grid. The ```omega``` class does the exact opposite, which removes the right margin from the last element. Notice that the middle ```grid-20``` does not have a second class, this is because it does not need it. Only the first and last elements require this fix for the grid to layout properly. *Note: Do not put use ```alpha``` or ```omega``` on outer grid elements, such as on the ```grid-6``` in the example above. Margins only need be removed on nested elements when they are within another grid.*


## Alerts

Need to display an alert to a user, or warn them about impending work that will be taking place on your site. No matter the option that can help. The default alert box doesn't do much of anything except display information in a grey box.

```html
<div class="alert">
	<span href="#" class="close"></span>
	<p>This is default alert box!</p>
</div>
```

However, you might have to alert a user in clear definable ways such as give them an error message, information, warn them of some changes, or tell them that their work has been saved. All these options exist and require only a class change.

**Error Message**
```html
<div class="alert error">
	...
</div>
```

**Warning Message**
```html
<div class="alert warning">
	...
</div>
```

**Informative Message**
```html
<div class="alert info">
	...
</div>
```

**Success Message**
```html
<div class="alert success">
	...
</div>
```

## Breadcrumbs
Documentation coming soon.

## Buttons

Sometimes all you really need is a simple button to reformat a link or a form button. Especially when trying to perform rapid prototyping a simple button can slow you down.

### Call in a Button

By default to call a button to an element all you need to do is call the class ```button```, and your done. That's it. This default class performs all the work in padding, sizing, and shaping your element to look like a button. Generally buttons are only used on sites I have worked on in two places: links and forms. Though theoretically you can make anything a button, well, anyways I digress.

**Example**
```html
<a href="#" class="button small">Small Button</a>
```

### Colors

When you attach the ```button``` class you will get a black button. It was better than using grey, since those look like deactivated buttons anyways. However, buttons come in 7 flavors.

* Black ```black```
* Blue ```blue```
* Green ```green```
* Grey ```grey```
* Red ```red```
* Yellow ```yellow```

``` html
<a href="#" class="button red">I'm a Button</a>
```

### Sizes

Colors are not the only feature that you have a your disposal. If the button by default is too large for you tastes you can shrink it with the addition of the class ```small```.

``` html
<a href="#" class="button small red">I'm a Tiny Button</a>
```

Though if you by chance need a larger button for your page for a possibly "buy" button then you can make it larger by adding the class ```large```.

``` html
<a href="#" class="button large blue">I'm a Large Button</a>
```

Give the buttons a whirl.


## Dropdowns
Documentation coming soon.

## Labels
Documentation coming soon.

## Images

Images have a few cool features for making pages pop. By default an image is a good way to show something off, however, without some styles an image can take up more space and look aesthetically unappealing. 

**Portrait**
Creating a white border around your image only requires one class to activate ```portrait```. Makes it look like an old style photo.

```html
<img src="http://placehold.it/200" class="portrait" />
```

**Float an Image**
Possibly you might need to shift a photo to the left or right and allow the text to flow around it, like a newspaper layout. Adding one of two classes takes care of this job instantly ```push-left``` or ```push-right```. You can take a wild guess as to which direction they both move your image.

```html
<img src="http://placehold.it/200" class="push-left" />

<img src="http://placehold.it/200" class="push-right" />
```



## Navigation

A site needs to move users from one page to another in their site structure. This is a basic feature of any site that can become troublesome when having to rebuild basic functionality over and over again. 

A basic HTML5 navigation structure might look like this:
```html
<nav>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">Test 2</a></li>
		<li><a href="#">Test 3</a></li>
		<li><a href="#">Test 4</a></li>
	</ul>
</nav>
```

This code produces a basic horizontal navigation that can be used for main navigation or in page for jumping between subpages. Though there is one more flavor that includes stacked navigation. Stacked navigation is essentially vertical navigation where links are designed to flow down the length of a page rather than across it.

```html
<nav class="stacked">
	...
</nav>
```

## Pagination

Pagination is useful on blogs or sites that have continuous content that they do not want to display on one "long" page. If this is the case then the pagination styles are ready for you to make your site pop.

The basic functionality of pagination is a list of pages. There is no code logic behind this feature since the functionality of pagination should be handled individually on each site that uses it. This is basically a leg up so that you don't have to do the base work to get started.

### Default

```html
<div class="pagination">
	<ul>
		<li><a href="#">&laquo;</a></li>
		<li><a href="#">1</a></li>
		<li><a href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li><a href="#">&raquo;</a></li>
	</ul>
</div>
```




## Panels
Documentation coming soon.

## Print
Documentation coming soon.

## Tables

You know you hate building table after table styles. You can now use the default tables built into Centurion to fit your color scheme.

By default the table styles that Centurion uses work out of the box. Create a table and it works with the default grey. To change colors you can specify your own or you can use the ones that come pre-packed.

### Basic Table

I personally prefer to keep my tables structured properly, especially because I enjoy seeing the green check mark when a site validates. 

```html
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
```

### Color Schemes

Similar to the usage of buttons, tables come with the same color scheme choices to match. By default Centurion features 7 different colors to choose from. Grey is available by default as long as you do not set a class color choice below.

* Blue ```ctBlue```
* Green ```ctGreen```
* Grey ```ctGrey```
* Orange ```ctOrange```
* Red ```ctRed```
* Yellow ```ctYellow```

However, if you are obverse to colors in general, such as, when you are wire framing a new site you can either stick with basic grey or use black to make a site pop a little.

**Set the Color**

To set the color all you have to do is set the class on the table itself, like this:

```html 
<table class="ctBlue">
```

## Tabs

Tabs can be fun, if they are used in the right context. I believe in simple tabs and some times we all end up writing far to much code to do a simple job. Tabs in general comprise of a wrapper (```tabBox```), a ul list (```tabs```), and then, of course, our tabs. Each tab is labeled with a unique ID that identifies it to one of the tab links found in our ```ul	``` list.

```html
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
```

However, say that you don't want your tabs to be on top of the content, but below. On occasion this would require massive amounts of re-coding in order to get the display to work. However, through CSS all you need to do is add a new class to the wrapper ```tabBottom```

```html
<div class="tabBox tabBottom">
	...
</div>
```

## Tooltips

Tooltips are great for displaying information to a user that might be necessary to complete an action. Centurion features two types of tooltips: clickable and hoverable.

The functionality changes simply by adding the class ```tipHover```.

```html
<a class="tooltip" data-title="tooltip text goes here">...</a>
<a class="tooltip tipHover" data-title="tooltip text goes here">...</a>
```

## Special Thanks
I want to take the time to thank a few people for their contributions to this framework

* [Aristeides Stathopoulos](https://github.com/aristath) - for his work on the open source [Elusive Icons](https://github.com/aristath/elusive-iconfont), which made Centurion prettier.
* [Josh Northcott](http://www.joshnorthcott.com) - for his tireless effort in spreading the word about responsive design and Centurion.
* [Corey Hadden](https://github.com/craql) - for his assistance in making jQuery play nice and for sheer inspiration.


## Author Note
Every feature of this framework is tested using a machine that resembles a computer (I work on a Mac) and was built by a man looking strangely like a developer, but those two options are not always true. 

## Licensing
Licensed under [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php).

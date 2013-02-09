## What is Centurion?

Centurion is a HTML5 / CSS 3 based framework for rapid prototyping. It comes out of the box, or the Git with pre-built features that help you build sites faster for Desktop and Mobile. The grid adjusts to the screen proportions that are given by the browser, and that is all there is to it.

**What it can do**
* Custom CSS buttons, no images required.
* Grid dimensions from 960 px down to 320 px wide.
* Image scaling.
* Heading scales based on size of browser. (Use em, instead of px)
* Navigation for Desktop and Mobile
* HTML 5 framework with backwards compatibility to IE6

### List of Features
**Note:** Feature list is based on v3.1. As features exist in the current framework documentation will be provided for use. 

* [The Grid](https://github.com/jhough10/Centurion/wiki/Grid)
* Alerts
* Blockquotes
* [Buttons](https://github.com/jhough10/Centurion/wiki/Buttons)
* Captions
* Colors
* Frame boxes
* Font-face
* Lists
* Images (adaptive and sprites)
* Navigation
* Pagination
* Print Styles
* Tabs
* [Tables](https://github.com/jhough10/Centurion/wiki/Tables)
* Tooltips
* Typography

## Grid
The Centurion grid system is built using SCSS which makes it highly extensible and customizable for any web project. The default build of Centurion available in the repository uses a 12 grid layout, however, you can adapt the grid to use 16, 18, or a number that you use.

Developed along the same lines as the [960 grid built by Nathan Smith](http://960.gs) in its class usage and code structure. The basic setup available on [Github](http://github.com/jhough10/Centurion/) features a 12 grid (960px) layout for desktops and using CSS3 media queries is responsive down to smartphones (360px). 

### Basic Structure
Utilizing the grid requires a container wrapper followed by the grid sizes that you want to use. If using the default ```grid-12``` your grids should equal 12, so a ```grid-4``` and ```grid-8``` equal 12.
```html
    <div class="container">
        <div class="grid-4">
            …
        </div>
        <div class="grid-8">
            … 
        </div>
    </div>
```

### Nesting Grids
The best part of any grid system is the ability to nest elements to make a grid smaller without having to make the code more complicated.

For example, say that you want to have content in a ```grid-6```, but you also want to add three images with captions side-by-side beneath the main block of text. So all you have to do is add ```mobile-33```. The number in this case for the grid is the percentage amount of the parent container that each nested grid element will take up. If you wanted to have to even spaced nested elements you would use ```mobile-50``` (or 50%).

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

The ```alpha``` class removes the left margin on the first element that is nested in another grid. The ```omega``` class does the exact opposite, which removes the right margin from the last element. Notice that the middle ```grid-2``` does not have a second class, this is because it does not need it. Only the first and last elements require this fix for the grid to layout properly. *Note: Do not put use ```alpha``` or ```omega``` on outer grid elements, such as on the ```grid-6``` in the example above. Margins only need be removed on nested elements within another grid.*



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


## Author Note
Every feature of this framework is tested using a machine that resembles a computer and was built by a man looking strangely like a developer, but not entirely the case. 

## Licensing
Licensed under [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php).

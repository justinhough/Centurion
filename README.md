# Centurion

[![NPM version](https://badge.fury.io/js/centurion-framework.svg)](http://badge.fury.io/js/centurion-framework)
[![Gem Version](https://badge.fury.io/rb/centurion-framework.svg)](http://badge.fury.io/rb/centurion-framework)


![image](http://www.centurionframework.com/graphics/centurion_200.png)


Centurion is a responsive web framework built for speed and simplicity with it's scalable and easy syntax to get a new prototype up quickly, as well as, support browsers as far back as IE7 to ensure your website works from the grid up. It is built on CSS3 with HTML5 in mind to allow you to start capitalizing on the next web standard (that has been around for a decade).

If you're worried about browser support we recommend using [html5shiv](https://code.google.com/p/html5shiv/) to add fallback for HTML5 or [Modernizr](http://modernizr.com/) to provide basic support for CSS3 and other feature detection to keep your design from falling flat, unless you designed it that way.


## Versioning

Current version: `3.5.3`



## NPM

### Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

`npm install centurion-framework --save-dev`


Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

`grunt.loadNpmTasks('centurion-framework');`

### Usage

For best results it is recommended to add Centurion to your Sass `loadPath` and include portions of the framework as needed. If you're using `grunt-contrib-sass` you add that like this:

```
'sass': {
  target: {
    options: {
      loadPath: ‘node_modules/centurion-framework/lib/sass/'
    },
    files: {
      'path/to.css': 'path/to.scss'
    }
  }
}
```



## RubyGem

### Getting Started

Install the gem: `gem install centurion-framework`

If you have an existing project: `require 'centurion-framework'`

### Configuration

You also have the option of importing Centurion components as needed into your project. Start by including the entire library at the top of your Sass file:

`@import "centurion-framework";`

Then you can include any of the modules from Centurion that you need. For example if you wanted to only include normalize, the Centurion grid, and typography then you would add the following:

```
@include normalize;
@include column-grid;
@include typography;
```



## Bugs and feature requests

If you find a bug or have a feature request you would like added to Centurion. Please search for [existing](https://github.com/justinhough/Centurion/issues?q=is%3Aopen+is%3Aissue) and [closed](https://github.com/justinhough/Centurion/issues?q=is%3Aissue+is%3Aclosed) issues to see any similar issues. If you problem or idea is not addressed, please open a [new issue](https://github.com/justinhough/Centurion/issues/new).


## Contributing

Interested in contributing to Centurion? Simply open an issue on Github labeled `contribute` and what you tell us what you want to contribute.



## Community

We might have a small community in comparison to other open-source projects, but we are only getting started.


### Special Thanks to Our Community

I would also want to thank a few people for their contributions to Centurion.

* [Josh Northcott](https://github.com/jnorthcott22) - for his tireless effort in spreading the word about responsive design and Centurion.
* [Corey Hadden](https://github.com/craql) - for his assistance in making jQuery play nice and for sheer inspiration.



## Licensing

Licensed under [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php).

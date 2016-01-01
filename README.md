# Centurion

[![NPM version](https://badge.fury.io/js/centurion-framework.svg)](http://badge.fury.io/js/centurion-framework)
[![Gem Version](https://badge.fury.io/rb/centurion-framework.svg)](http://badge.fury.io/rb/centurion-framework)

![image](http://www.centurionframework.com/graphics/centurion_200_blue.png)

Centurion is a responsive framework built for speed, simplicity, and flexibility. Originally based loosely on the [960 grid built by Nathan Smith](http://960.gs/), Centurion boasted a responsive grid system that would help alleviate the headache of building responsive designs. Like all web projects it grew and started to capitalize on several different areas like: typography, buttons, tables, and more in order to create a seamless framework that could allow web developers to start up a new project easily without the need to override every little piece.

If you're concerned about browser support then we recommend either [html5shiv](https://code.google.com/p/html5shiv/) or [Modernizr](http://modernizr.com/) to your web site or project to help support CSS3 and HTML5.


## Versioning

Current version: `3.6.2`

Centurion no longer supports Internet Explorer 7 as of version `3.5.3`.

**Note**: Please read the CHANGELOG for updates to the framework. The latest version of Centurion differs in quite a few ways to previous versions and would require an upgrade to benefit some of the new features.


## Install with NPM

### Getting Started

This plugin requires Grunt `^0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

`npm install centurion-framework --save-dev`

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

`grunt.loadNpmTasks('centurion-framework');`

#### Grunt Usage

When using Centurion with Grunt you can use one of two modules: `grunt-contrib-sass` or `grunt-sass`. We recommend the later since it's built on [libsass](http://libsass.org/) and compiles much faster, but it is [missing some features](http://sass-compatibility.github.io/) so the decision is yours.

For [grunt-sass](https://github.com/sindresorhus/grunt-sass) you can add Centurion to your project using `includePaths` (as in the example below) or with [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) you can change it to `loadPath` for the same result. Here is an example:

```
'sass': {
  target: {
    options: {
      precision: 4, // makes all decimals round to 4 places
      sourcemap: 'auto', // adds a sourcemap to compiled CSS for inspecting
      includePaths: ['node_modules/centurion-framework/lib/sass/']
    },
    files: {
      'path/to.css': 'path/to.scss'
    }
  }
}
```

#### Gulp Usage

You can also use Centurion with [Gulp](http://gulpjs.com/). By using the module [`gulp-sass`](https://www.npmjs.com/package/gulp-sass/) add the library module to your `includePaths` found in the example Gulp task below.

```
gulp.task('sass', function() {
  return gulp.src( 'source/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
    	includePaths: './node_modules/centurion-framework/lib/sass',
    	errLogToConsole: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest( 'build/css' ));
});
```

If you're interested in using Gulp check out a [simple starter project](https://github.com/justinhough/gulp-project-setup) on Github that shows you how to start using Centurion in your next web project.



## Install as a RubyGem

### Getting Started

Install the gem: `gem install centurion-framework`

If you have an existing project: `require 'centurion-framework'`

### Configuration

You also have the option of importing Centurion components as needed into your project. Start by including the entire library at the top of your Sass file:

`@import "centurion-framework";`

Then you can include any of the modules from Centurion that you need. For example if you wanted to only include normalize, the Centurion grid, and typography then you would add the following:

```
@include normalize();
@include flex-grid();
@include typography();
```



## Bugs and feature requests

If you find a bug or have a feature request you would like added to Centurion. Please search for [existing](https://github.com/justinhough/Centurion/issues?q=is%3Aopen+is%3Aissue) and [closed](https://github.com/justinhough/Centurion/issues?q=is%3Aissue+is%3Aclosed) issues to see any similar issues. If you problem or idea is not addressed, please open a [new issue](https://github.com/justinhough/Centurion/issues/new).


## Contributing

If you're interested in contributing to Centurion simply open an issue labeled `contribute` and tell us what you would like to contribute. Alternatively, you can fork Centurion and submit a pull request explaining what you are contributing.

## Community

We might have a small community in comparison to other open-source frameworks, but we're only getting started.


### Special Thanks to Our Community

I would also want to thank a few people for their contributions to Centurion.

* [Josh Northcott](https://github.com/jnorthcott22) - for his tireless effort in spreading the word about responsive design and Centurion.
* [Corey Hadden](https://github.com/craql) - for his assistance in making jQuery play nice and for sheer inspiration.


## Licensing

Licensed under [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php).

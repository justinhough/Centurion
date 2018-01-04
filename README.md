# Centurion Framework[<img src="http://www.centurionframework.com/graphics/centurion_200_blue.png" alt="Centurion" width="200" align="right">][centurion]

[![NPM version][npm-img]][npm-url]
[![Gem version][ruby-img]][ruby-url]
[![Gitter chat][gitter-img]][gitter-url]
[![Build Status][travisci-img]](travisci-url)

Centurion is a responsive framework built for speed, simplicity, and flexibility. Originally based loosely on the [960 grid built by Nathan Smith](http://960.gs/), Centurion boasted a responsive grid system that would help alleviate the headache of building responsive designs. Like all web projects it grew and started to capitalize on several different areas like: typography, buttons, tables, and more in order to create a seamless framework that could allow web developers to start up a new project easily without the need to override every little piece.

If you're concerned about browser support then we recommend either [html5shiv](https://code.google.com/p/html5shiv/) or [Modernizr](http://modernizr.com/) to your web site or project to help support CSS3 and HTML5.


## @TODO for 2018
- Rebuild grid to use Flexbox and CSS Grid - [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Rework for responsive breakpoints
- CSS classes reanalyzed to be semantic and better understandable
- New color scheme and full greyscale for backgrounds, text, etc. - [Sass Color Variables That Don’t Suck](https://davidwalsh.name/sass-color-variables-dont-suck)
- Better documentation for Grunt, Gulp and Ruby
- Component and Pattern library for frequently used layouts
- PostCSS package
- SCSS to Sass linter via [Hound](https://houndci.com/configuration#sass-lint)
- Travis CI integration
- Living style guide using [Nucleus](https://holidaypirates.github.io/nucleus/index.html)


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


## Documentation and Examples

Read our [docs](DOCUMENTATION.md) or view examples on our [Github page](http://justinhough.github.io/Centurion/resources.html). We are always trying to improve our documentation and examples, so please submit an issue labeled `docs` with the description of what needs to be updated.

## Versioning

Centurion no longer supports Internet Explorer 7 as of version `3.5.3`.

Review [CHANGELOG](CHANGELOG.md) for updates and changes to the framework.

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

Licensed under [GPL][lic-url].

[centurion]: https://github.com/justinhough/Centurion
[lic-img]: https://img.shields.io/badge/license-apache%202.0-blue.svg?style=flat-square
[lic-url]: LICENSE.md
[gitter-img]: https://badges.gitter.im/centurion-framework/Lobby.svg
[gitter-url]: https://gitter.im/centurion-framework/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[npm-img]: https://badge.fury.io/js/centurion-framework.svg
[npm-url]: http://badge.fury.io/js/centurion-framework
[ruby-img]: https://badge.fury.io/rb/centurion-framework.svg
[ruby-url]: http://badge.fury.io/rb/centurion-framework
[travisci-img]: https://travis-ci.org/justinhough/Centurion.svg?branch=4.0.0
[travisci-url]: https://travis-ci.org/justinhough/Centurion

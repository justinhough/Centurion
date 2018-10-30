## v3.8.1
- Plugins updated:
	- load-grunt-tasks from 3.5.2 to 4.0.0
	- grunt-include-replace from 3.2.0 to 5.0.0
	- grunt-contrib-connect from 0.9.0 to 2.0.0
	- grunt-contrib-uglify from 0.9.2 to 4.0.0
	- grunt-contrib-copy from 0.7.0 to 1.0.0

## v3.8.0
- `.scss-style.yml` updated shorthand property rule to use 4
- Changed `autoprefixer-core` to `autoprefixer` since projects merged
- Plugins updated:
	- grunt-scss-lint from 0.3.8 to 0.5.0
	- [Security] Bump grunt-gh-pages from 0.9.1 to 3.1.0
	- grunt-contrib-compress from 0.13.0 to 1.4.3
	- grunt-postcss from 0.5.5 to 0.9.0
	- grunt from 0.4.5 to 1.0.3
	- grunt-contrib-watch from 0.6.1 to 1.1.0


## v3.7.0
- `.hound.yml` updated to use `.jshintrc`
- fixed compile issue with node-sass upgrade with @extend
- Plugins updates:
 	- grunt-sass requirement from ^1.1.0 to ^3.0.2
	- grunt-banner requirement from ^0.3.1 to ^0.6.0
	- grunt-http-server requirement from ^1.4.0 to ^2.1.0
	- grunt-contrib-clean requirement from ^0.6.0 to ^2.0.0
	- grunt-concurrent requirement from ^1.0.0 to ^2.3.1

## 3.6.4
- Grunt package updates for vulnerabilities in `package-lock.js`
- `@extend` within media query fix for Flex Grid (works with latest node-sass)
- Readme updates

## 3.6.2
- bug fix #27 when using `.ctn-center` would not center grid elements
- Grunt Sass version updated in package.json to `1.1.0` to alleviate compile errors
- Github releases added to Grunt

## 3.6.1
- Autoprefixer added to Grunt
- Flex Grid included as default
- Removed pull from grid markup; only push utilized
- Original grid layout cleaned up for semantic usage
- Fixed bug when nesting grid elements
- Added basic styling for forms
- Docs moved to subfolder (cleanup)
- Favicons are now blue along with color scheme (no more orange)!
- Excluded build folder from repository (cleanup)
- Docs updated with proper grid usage
- Code example Prism.js themes updated from dark to line
- Fix for badge classes not being generated properly

## 3.5.4
- Grunt package dependencies fixed when installing with NPM
- Grunt dependency raised to `^0.4.5` from `~0.4.0`
- README:
	- Added `grunt-sass` as default
	- Added precision and sourcemap to Grunt example
	- Links to both `grunt-sass` and `grunt-contrib-sass`
- Bug fixes:
	- Grid fix for tablet and mobile not overriding desktop widths. (Hierarchy is important.)
	- `@include rem` threw error when strings passed. ([https://github.com/justinhough/Centurion/issues/25](fixed by issue #25)

## 3.5.3
- CSS and JS banners added on build (customized via package version)
- Grid / Push & Pull fixes for responsive
- Refactor of Sass `_grid.scss` file to fix craziness
- Removed IE7 support
- Improved semantic grid `@include ctn-grid`
- Colors refactored
- Badges were simplified
- Tables are now responsive ([https://github.com/justinhough/Centurion/issues/23](fixed by issue #23))
- Reconstructed the grunt build process

## 3.5.2
- `ctn-` added to grid and other elements to prevent collisions with other libraries.
- Added features for full-width container and no margin grid
- CSS compile streamlined with better `@extend` usage
- Grunt:
	- localhost preview port changed `5316`
	- watch functions optimized

## v3.5.1
- bugfix for semantic grid and %clearfix

## v3.5.0
- attached build process to default Grunt command `$ grunt`
- enhanced Sass compile speed and size
	- new mixin support for buttons, colors, and callouts
	- configuration options
	- layout support added based on typography and line-height
- grid now utilizes `rems` with fallback for `px` based browser support
- using normalize instead of reset

## v3.4.0
- version was never released to public
- Centurion Framework site built with v.3.4

## v3.3.0
- Stable release of Centurion with Sass support.
- Semantic grid generator and IE7 grid support

## 3.2.0
- Lots of fun and cool stuff was added (mostly wierd and unnecessary).

## v3.0.0
- Centurion public release.

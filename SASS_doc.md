# Sass Centurion Documentation

The Sass files that Centurion is compiled from are stored in `lib/sass` which contains the Sass files for compile and `lib/sass/centurion` are Centurion’s custom mixin libraries. 

** All files are in `.scss` format unless otherwise noted.

## Sass Structure

	|__ sass/
	|   |__ centurion/
	|   |   |__ _badges
	|   |   |__ _buttons
	|   |   |__ _callouts
	|   |   |__ _clearfix
	|   |   |__ _colors
	|   |   |__ _config
	|   |   |__ _grid-legacy
	|   |   |__ _grid-semantic
	|   |   |__ _grid
	|   |   |__ _layout
	|   |   |__ _mixin
	|   |   |__ _navigation
	|   |   |__ _normalize
	|   |   |__ _tables
	|   |   |__ _typography
	|__ _centurion-framework
	|__ centurion
	|__ custom
	|__ grid-ie7
	|__ grid-rtl
	|__ grid


## Partials

The core folder `lib/sass/centurion` are all the individual partial files that break up the features of Centurion. These files do not get compiled when the CSS files are created.


## Badges
**Location:** `lib/sass/centurion/_badges`

- @include badges()
- @include badge-bk-colors($class, $color)
- @include badge-bk-colors($class, $color, $text-color)



## Buttons
**Location:** `lib/sass/centurion/_buttons`

- @include default-button()
- @include default-button-hover()
- @include create-button($class, $color1, $color2, $text-color)
- @include button($class, $color1, $color2, $text-color)
- @include buttons()



## Callouts
**Location:** `lib/sass/centurion/_callouts`

- @include callout($class, $bk-color, $border-color, $text-color)
- @include callouts


### Config
**Location:** `lib/sass/centurion/_config`

#### Fonts
$font-family
$default-font-size
$default-line-height

#### Legacy Browser Support
$ie7-support

#### Grid Configurations
$desktop-width
$tablet-width
$mobile-width

$inner-width
$gutter
$value

$desktop-columns: 24;
$tablet-columns: 12;
$mobile-columns: 6;

$prefix-class: "ctn";
$container-class: $prefix-class+"-container";
$grid-class: $prefix-class+"-grid";
$tablet-grid-class: $prefix-class+"-tablet";
$mobile-grid-class: $prefix-class+"-mobile";

#### Push, Pull, Pre, and Post Classes
**Note:** Pre and Post are not currently used within Centurion.

$push-class: "push";
$pull-class: "pull";
$pre-class: "pre";
$post-class: "post";

#### RTL Language Support
$lang-front: left;

#### Layout Classes
$margin-top
$margin-bottom
$margin-both
$padding-top
$padding-bottom
$padding-both

#### Browser Prefixes
$prefixes





## Clearfix
**Location:** `lib/sass/centurion/_clearfix`

- @include clearfix()


## Colors
**Location:** `lib/sass/centurion/_colors`

- @include single-color-swatch($class, $color, $light-color, $dark-color)
- @include color-swatches()
  



### Grid
**Location:** `lib/sass/centurion/_grid`

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



### Legacy Grid Support (IE 7)
**Location:** `lib/sass/centurion/_grid-legacy`

- @include ie7-grid-fix($decimal)
- @include ie7-grid-element($decimal)
- @include ie7-push($decimal)
- @include ie7-pull($decimal)



### Semantic Grid
**Location:** `lib/sass/centurion/_grid-semantic`

- @include semantic-grid($type, $width)




### Layout
**Location:** `lib/sass/centurion/_layout’

@include margin-block-layout($layout-rows: 5)
@include padding-block-layout($layout-rows: 5)


### Mixin
**Location:** `lib/sass/centurion/_mixin’

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




### Navigation
**Location:** `lib/sass/centurion/_navigation’

- @include navigation()
- @include breadcrumbs()


### Normalize
**Location:** `lib/sass/centurion/_normalize’

- @include normalize()


### Tables
**Location:** `lib/sass/centurion/_tables’

- @include table-base()
- @include table-color-generator($class, $color1, $color2, $color3)
- @include tables()


### Typography
**Location:** `lib/sass/centurion/_typography’

@include force-wrap()
@include typography()

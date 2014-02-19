# Sass Centurion Documentation

The Sass files that Centurion is compiled from are stored in `assets/sass` and are divided into two different folders based on usage and purpose. 

## Sass Structure

	|__ core/
	|   |__ _alerts
	|   |__ _base
	|   |__ _breadcrumbs
	|   |__ _buttons
	|   |__ _colors
	|   |__ _config
	|   |__ _elusive-webfont
	|   |__ _grid-semantic
	|   |__ _grid
	|   |__ _images
	|   |__ _mixins
	|   |__ _navigation
	|   |__ _pagination
	|   |__ _panels
	|   |__ _print
	|   |__ _tables
	|   |__ _tabs
	|   |__ _tooltips
	|   |__ _typography
	|   |__ _vars
	|__ _custom
	|__ centurion-ie-rtl.sass
	|__ centurion-ie.sass
	|__ centurion-rtl.sass
	|__ centurion.sass
	|__ fluid.sass
	|__ grid.sass
	|__ reset.sass
	|__ semantic.sass


## Partials

The core folder `assets/sass/core` are all the individual partial files that break up the features of Centurion. These files do not get compiled when the CSS files are created. (** Please see section "Build" if you need to see what files are built when Sass is compiled to CSS)

### Config
**Location:** `assets/sass/core/_config.sass`

	$default-prefixes: webkit moz ms o
	$prefixes: $default-prefixes

#### // Media Breakpoints

	$breakpoint-small: 600px
	$breakpoint-medium: 920px
	$breakpoint-large: 1120px

#### // Typography and Font Size

	$font-size-default: 15px
	$default-font-size: 1em
	$small-font-size: .8em
	$line-height: 1.5
	
	// font-family
	$text-font: 'Open Sans', sans-serif
	$heading-font: 'Open Sans Condensed', sans-serif
	

#### // Links

	$default-link-color: #ffa84c
	$default-link-hover-color: #000000

#### // Grid

	// LTR or RTL Support
	$ie7-support: false
	$lang-front: left
	$lang-back: right

	// Desktop
	$max-grid-size: 1120px
	$grid-size: 960px
	$max-space: 2%
	$max-rows: 20

	// Mobile
	$max-resp-width: 100%
	$max-resp-space: $max-space

	// Classes for Grid
	$grid-class: grid
	$mobile-class: mobile
	$pull-class: pull
	$push-class: push




### Alerts
**Location:** `assets/sass/core/_alerts.sass`

#### // Alert
	
	@mixin alert-colors($value, $value2: $value)
	 background: $value
	 border: 1px solid $value2
	
	@mixin create-alert($value1, $border: $value1 )
	 background-color: $value1
	 border-color: $border
	
	 hr
	   border-top-color: darken($border, 5%)
	 .alert-link
	   color: darken($text-color, 10%)
	
	
#### // Default Alert
	@mixin default-alert
	 %text-white
	   p
	     color: $white
	 .alert
	   @include border-radius(4px)
	   @include box-shadow(2px,2px,5px,$grey)
	   @include element-spacing(vertical, margin, 1em)
	   @include element-spacing(two, padding, 10px, 20px)
	   @extend %relative
	   p
	     @include element-spacing(bottom, margin, 0)
	   .close
	     cursor: pointer
	     font-size: $default-font-size
	     font-weight: normal
	     @extend %absolute
	     top: 5px
	     right: 10px
	
#### // Alert Options
	@mixin alert-options
	 .alert-error
	   @extend .alert
	   @include create-alert($red)
	   @extend %text-white
	 
	 .alert-warning
	   @extend .alert
	   @include create-alert($yellow)
	   
	 .alert-info
	   @extend .alert
	   @include create-alert($blue)
	
	 .alert-success
	   @extend .alert
	   @include create-alert($green)



### Base
**Location:** `assets/sass/core/_base.sass`

	// Configuration Options
	@import "config"
	
	// Mixins
	@import "mixins"
	
	// Grid
	@import "grid"
	@import "grid-semantic"
	
	// Features
	@import "colors"
	@import "alerts"
	@import "breadcrumbs"
	@import "buttons"
	@import "elusive-webfont"
	@import "images"
	@import "navigation"
	@import "pagination"
	@import "panels"
	@import "print"
	@import "tables"
	@import "tabs"
	@import "tooltips"
	@import "typography"
	



### Breadcrumbs
**Location:** `assets/sass/core/_breadcrumbs.sass`

	// Breadcrumbs
	@mixin breadcrumbs
	  ul
	    &.breadcrumbs
	      background: $lightgrey
	      border: 1px solid $grey
	      display: block
	      @include border-radius(2px)
	      @include element-spacing(two, padding, 0.4em, 0.667em)      
	      overflow: hidden
	      li
	        display: inline-block 
	        @include element-spacing(none, margin)
	        @include element-spacing(right, padding, 1em)
	        a,
	        span
	          text-transform: uppercase
	          font-size: ($default-font-size - 0.2)
	          @include element-spacing(right, padding, 1em)
	        &:after 
	          content: ">"
	          color: $grey
	        &:last-child:after 
	          content: ""




### Buttons
**Location:** `assets/sass/core/_buttons.sass`

#### Gradient Buttons
	@mixin buttons-gradient
	  .btn-gradient
	    color: $white
	    @include default-gradient-button
	    @extend %noTextDecoration
	
	    &:hover,
	    &:active,
	    &:visited
	      @include default-gradient-button-hover
	      color: $white
	
	    &.small-btn
	      @include border-radius(4px, 4px)
	      font-size: ($default-font-size - 0.15)
	      @include element-spacing(two, padding, 0.533em, 1.2em) //padding: 8px 18px
	
	    &.large-btn
	      @include border-radius(6px, 6px)
	      font-size: ($default-font-size + 0.3)
	      @include element-spacing(two, padding, 0.533em, 1.6em)
	
	    &.full-btn
	      @include element-spacing(vertical, padding, 0.667em) //padding: 10px 0
	      text-align: center
	      width: 100%
	      
	  @include create-button-gradient(grey-btn, $white, #e5e5e5, #b7b7b7)
	  @include create-button-gradient(blue-btn, #a7cfdf, #23538a, #004089)
	  @include create-button-gradient(red-btn, #ff3019, #cf0404, #aa0303)
	  @include create-button-gradient(yellow-btn, #fced62, #febf04, #ffaa00, $text-color)
	  @include create-button-gradient(orange-btn, #ffa84c, #ff7b0d, #fc6000)
	  @include create-button-gradient(green-btn, #a4b357, #75890c, #5b7a00)
	
	
#### Flat Buttons
	@mixin buttons-flat
	  .btn
	    color: $white
	    @include default-button
	    @extend %noTextDecoration
	
	    &:hover,
	    &:active,
	    &:visited
	      @include default-button-hover
	      color: $white
	    
	    &.small-btn
	      font-size: ($default-font-size - 0.15)
	      @include element-spacing(two, padding, 0.533em, 1.2em) //padding: 8px 18px
	
	    &.large-btn
	      font-size: ($default-font-size + 0.3)
	      @include element-spacing(two, padding, 0.533em, 1.6em)
	
	    &.full-btn
	      @include element-spacing(vertical, padding, 0.667em) //padding: 10px 0
	      text-align: center
	      width: 100%
	    
	  @include create-button(grey-btn-flat, $white, #e5e5e5, #b7b7b7)
	  @include create-button(blue-btn-flat, #a7cfdf, #23538a, #004089)
	  @include create-button(red-btn-flat, #ff3019, #cf0404, #aa0303)
	  @include create-button(yellow-btn-flat, #fced62, #febf04, #ffaa00)
	  @include create-button(orange-btn-flat, #ffa84c, #ff7b0d, #fc6000)
	  @include create-button(green-btn-flat, #a4b357, #75890c, #5b7a00)




### Colors
**Location:** `assets/sass/core/_colors.sass`

	
#### // Default Colors
	$default: rgba(#333333, 1.0)
	$text-color: rgba(#555555, 1.0)
	
	$white: rgba(#FFFFFF, 1.0)
	$black: rgba(#000000, 1.0)
	
	$almost-white: rgba(#EDEDED, 1.0)
	$grey: rgba(#CCCCCC, 1.0)
	$lightgrey: rgba(#999999, 1.0)
	$darkgrey: rgba(#333333, 1.0)
	
#### // Default Colors for Alerts, etc
	$red: #ff3019
	$yellow: #febf04
	$blue: #a7cfdf
	$green: #a4b357
	
	
#### // Links - RGBA
	$link-color: rgba($default-link-color, 1.0)
	$link-hover-color: rgba($default-link-hover-color, 1.0)
	
#### // Border - RGBA
	$border-color: rgba(#CCCCCC, 1.0)
	$border-color-light: rgba(#EDEDED, 1.0)
	
	
#### // Default Color Options	
	// Button Colors
	// COLOR              TOP     BOTTOM
	
	// Black          -   #7d7e7d   #0e0e0e
	// Black:hover    -   #9b9b9b   #3d3d3d
	
	// grey           -   #ffffff   #e5e5e5
	// grey:hover     -   #ffffff   #b7b7b7
	
	// blue           -   #a7cfdf   #23538a
	// blue:hover     -   #a7cfdf   #004089
	
	// red            -   #ff3019   #cf0404
	// red:hover      -   #ff3819   #aa0303
	
	// yellow         -   #fced62   #febf04
	// yellow:hover   -   #fced62   #ffaa00
	
	// orange         -   #ffa84c   #ff7b0d
	// orange:hover   -   #ffa84c   #fc6000
	
	// green          -   #a4b357   #75890c
	// green:hover    -   #a4b357   #5b7a00




### Elusive Webfont
**Location:** `assets/sass/core/_elusive-webfont.sass`

For more information on the Elusive Icon Webfont please refer to [URL].

#### // Basic Usage
	.icon-[icon_option]



### Grid Semantic
**Location:** `assets/sass/core/_grid-semantic.sass`

#### // Semantic Grid Container
	@mixin sem-container($total-width)
	  @include element-spacing(auto, margin)
	  width: $total-width

#### // Semantic Grid Element	
	@mixin sem-grid($col-width, $direction: $lang-front, $padding: 1em)
	  +box-sizing(border-box)
	  @include float-direction($direction)
	  padding: 0 $padding
	  position: relative
	  width: 1% * $col-width

#### // Semantic Push
	@mixin sem-push($offset-push, $direction: $lang-front)
	  #{$direction}: (1% * $offset-push)

#### // Semantic Pull	
	@mixin sem-pull($offset-pull, $direction: $lang-front)
	  #{$direction}: -(1% * $offset-pull)
	
	
	
	
#### // Semantic Grid - IE7 Support
	@mixin ie-after-margin-fix ($space)
	  *margin-left: expression((!this.className.match(/grid-[1-9]/) && this.currentStyle.display === "block" && this.currentStyle.width === "auto") && "#{$space}")
	  *margin-right: expression((!this.className.match(/grid-[1-9]/) && this.currentStyle.display === "block" && this.currentStyle.width === "auto") && "#{$space}")
	
	
	@mixin sem-ie-grid($num, $space:2%)
	  $decimal: $num / 100
	  @include ie7-grid-element($decimal)
	  @if $ie7-support
	    *padding-left: 0
	    *padding-right: 0
	    & > *
	      @include ie-after-margin-fix ($space)
	
	@mixin sem-ie-push($num, $space:2%)
	  $decimal: $num / 100
	  @include ie7-push($decimal)
	
	@mixin sem-ie-pull($num)
	  $decimal: $num / 100
	  @include ie7-pull($decimal)
	
	
#### // Semantic Grid - IE Fix for Grid Percentage Converter
	@mixin sem-ie-grid-thirds($num, $space:2%)
	  $mul: 1/3
	  $decimal: $num * $mul
	  @include ie7-grid-element($decimal)
	  @if $ie7-support
	    *padding-left: 0
	    *padding-right: 0
	    & > *
	      @include ie-after-margin-fix ($space)
	
	@mixin sem-ie-push-thirds($num)
	  $mul: 1/3
	  $decimal: $num * $mul
	  @include ie7-push($decimal)
	
	@mixin sem-ie-pull-thirds($num)
	  $mul: 1/3
	  $decimal: $num * $mul
	  @include ie7-pull($decimal)




### Grid
**Location:** `assets/sass/core/_grid.sass`

#### // Grid Generate
	@mixin grid-generate($width:$grid-size)
	  @include grid($width)
	
#### // Mobile Grid
	@mixin mobile-grid-generate($width:$grid-size)
	  @include media-query(phones)
	    @include grid-mobile
	    @include phone-hide-view

#### // Grid Media Query	    
	@mixin grid-media-query
	  @include media-query(tablets)
	    .container
	      width: 98%
	  @include media-query(desktops)
	    .container
	      width: $max-grid-size









### Images
**Location:** `assets/sass/core/_images.sass`


### Mixins
**Location:** `assets/sass/core/_mixins.sass`


### Navigation
**Location:** `assets/sass/core/_navigation.sass`


### Pagination
**Location:** `assets/sass/core/_pagination.sass`


### Panels
**Location:** `assets/sass/core/_panels.sass`


### Print
**Location:** `assets/sass/core/_print.sass`


### Tables
**Location:** `assets/sass/core/_tables.sass`


### Tabs
**Location:** `assets/sass/core/_tabs.sass`


### Tooltips
**Location:** `assets/sass/core/_tooltips.sass`


### Typography
**Location:** `assets/sass/core/_typography.sass`


### Variables
**Location:** `assets/sass/core/_vars.sass`


----

## Build
The build folder refers to everything outside of the `core` folder that generates a CSS file once the Sass files are compiled.

 
 
 
 
 	
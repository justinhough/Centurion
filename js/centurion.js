(function($){
  
  // Navigation URL Detect
  $.fn.extend({
    navigation: function(options) {
      var defaults = {
        active: 'on'
      };
      options = $.extend(defaults, options);
      
      return this.each(function() {				
        var $o, $obj, $leng;
        
        $o = options;
        $obj = $(this);
        $leng = 0;
        
        $($obj).find('a').each(function(){
          var path = $(this).attr('href');
          if(window.location.pathname.indexOf(path) != -1 && path.length > $leng){
            $leng = path.length
            $(this).addClass($o.active).siblings().removeClass($o.active);
          }
        });
      });
    }
  });

  // Tables
  $.fn.extend({
    tables: function(options) {
      var defaults = {
        even: "even",
        odd: "odd"
      };
      options = $.extend(defaults, options);
      
      return this.each(function() {				
        var $o, $obj;
        
        $o = options;
        $obj = $(this);
        $($obj).each(function(){
          $("tbody tr:even", this).addClass('.' + $o.odd);
          $("tbody tr:odd", this).addClass('.' + $o.even);
        });
      });
    }
  });
  
  // Mobile Menu
  $.fn.extend({
    mobileNav: function(options) {
  
      var defaults = {
          mobileMenu: 'Menu', // Text in the mobile menu
          bNav: true, // add classes and structure to ul list
          // Sub Menu 
          //subMenuID: '_______',
          menuIcon: 'menuIcon', // icon for mobile menu
          menuActive: 'down', // mobile menu open state change
          // Sub Menu Dropdown
          subMenuToggle: 'mobileMenu', // submenu ID to toggle - ul list
          subDrop: 'subMobile', // class to identify elements with children links
          subDropIcon: 'subIcon', // submenu dropdown icon
          subDropActive: 'on', // submenu dropdown active class
      };
  
      options = $.extend(defaults, options);
  
      return this.each(function() {				
        var $o, $obj, $mobileBtn, $subDropBtn, $isbNavOn;
        
        $o = options;
        $obj = $(this);
        // HTML for menu button
        $mobileBtn = '<span>'+ $o.mobileMenu +'</span><span class="'+ $o.menuIcon +'"></span>';
        // HTML for plus icon for submenu
        $subDropBtn = '<span class="'+ $o.subDropIcon +'"></span>';
  
        // Check to see if Build Nav is true
        $isbNavOn = $o.bNav;
        
        // Build Navigation adds classes and structure to UL list
        if ($isbNavOn == true){
          // Hide all menus
          $('ul', $obj).show();
  
          // add mobile button to page
          $($obj).prepend($mobileBtn);
          $($obj).children('ul').attr('id',$o.subMenuToggle);
  
          // Find all elements with children and add sub menu button
          $('li > ul', $obj).parent().addClass($o.subDrop).prepend($subDropBtn);
        }
        else { 
          // Leave navigation alone
        }

        // Mobile Navigation
        $($obj).click(function(){	
          $('.'+ $o.subDropIcon).removeClass($o.subDropActive);
          $('ul ul', $obj).hide();
          $('#'+ $o.subMenuToggle).toggle();
          $(this).toggleClass($o.menuActive);
        });
        
        // Mobile Navigation Children
        $('.' + $o.subDropIcon, $obj).click( function() {
          $(this).nextAll('ul').slideToggle('fast');
          $(this).toggleClass($o.subDropActive);
          return false;
        });
        
        // Style resets in case browser window is adjusted
        function screenAdapt(width) {
          width = parseInt(width);
          if (width > 760) {
            // Show on Desktop
            // Hide main menu
            $($obj).hide();
          }
          else {
            // Catch all mobile
            // Hide main menu
            $($obj).show();
            $($obj).removeClass($o.menuActive);
            // Hide children
            $('ul ul', $obj).hide();
            $('.'+ $o.subDropIcon).removeClass($o.subDropActive);
          }
        }
        // Executes the screen size check
        $(function() {
            screenAdapt($(this).width());
            $(window).resize(function() {
                screenAdapt($(this).width());
            });
        });
        // End of resize window function
      });
    }
  });
  
  
  // Alerts Plugin
  $.fn.extend({
    alerts: function(options) {
      var defaults = {
        closeBtn: '.close',
        icon: 'icon-remove',
      };
  
      options = $.extend(defaults, options);
      
      return this.each(function() {				
        var $o, $obj, $closeBtnSt;
        
        $o = options;
        $obj = $(this);
      
        $closeBtnSt = '<span href="#" class="close '+ $o.icon +'"></span>';
   
        $($obj).prepend($closeBtnSt);
        $($o.closeBtn, $obj).click(function(){
          $(this).parent().fadeOut();
        });
        
      });
    }
  });
  
  
  // Tooltips
  $.fn.extend({
    tooltip: function(options) {
      var defaults = {
        rel: 'tooltip',
        hover: 'tipHover',
        click: 'tipClick',
        speed: 'slow'
      };
  
      options = $.extend(defaults, options);
      
      return this.each(function() {				
        var $o, $obj, $tooltipHead, $tooltipFoot, $tipClick, $tipHover;
        
        $o = options;
        $obj = $(this);
      
        // tooltip header
        $tooltipHead = '<div class="' + $o.rel + '"><div class="arrow-up"></div><div class="tipHeader"></div><div class="toolBodyWidth"><div class="tipBody">';
        // tooltip footer
        $tooltipFoot = '</div></div><div class="tipFooter"></div><div class="arrow-down"></div></div>';
        
        // Clickable Tooltip - gets data from title tag
        $tipClick = $('a.' + $o.click).attr('title');	
        $('a[rel=' + $o.rel + '].' + $o.click).append($tooltipHead + $tipClick + $tooltipFoot);
        // Hover Tooltip - gets data from title tag
        $tipHover = $('a.' + $o.hover).attr('title');	
        $('a[rel=' + $o.rel + '].' + $o.hover).append($tooltipHead + $tipHover + $tooltipFoot);
        
        // Tooltip content is grabbed from title tag
        $('a[rel=' + $o.rel + ']').attr('title','');
        // hides tooltips
        $('.' + $o.rel).hide();
        
        // clickable tooltip 
        $('a.' + $o.click).click(function(e) {
          $(this).stop().children('a[rel=' + $o.rel + '] .' + $o.rel).fadeToggle($o.speed);
          //$(this).children('a[rel=tooltip] .tooltip').mouseleave().fadeToggle("slow");
        })
        // hoveable tooltip 
        $('a.' + $o.hover).hover(
          function() {
            $(this).children('a[rel=' + $o.rel + '] .' + $o.rel).stop(true, true).fadeIn($o.speed);
          },
          function() {
            $(this).children('a[rel=' + $o.rel + '] .' + $o.rel).delay(800).fadeOut($o.speed);
        });
      });
    }
  });
  

  
  // Plugin Stripped Down
//   $.fn.extend({
//     _plugin_name_: function(options) {
//       var defaults = {
//         // default options
//       };
//   
//       options = $.extend(defaults, options);
//       
//       return this.each(function() {				
//         var $o, $obj, $tooltipHead, $tooltipFoot, $tipClick, $tipHover;
//       
//         $o = options;
//         $obj = $(this);
//       
//         // Plugin code
//       });
//     }
//   });
  
  // Default activations
  $(document).ready(function(){
    $('table').tables();
    $('nav').navigation();
    $(this).tooltip();
    $('.alert').alerts();
  });

})(jQuery);


// Activate the individual plugins

$(document).ready(function(){
  
  //$('.tabBox.bottom div').addClass('innerBox');
  
  $('.tabBox div').addClass('innerBox');
  $('.tabBox .tabs').each(function(){
      var $active, $content, $links = $(this).find('a');
      
      $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
      $active.parent('li').addClass('active');
      $content = $($active.attr('href'));
  
      // Hide tab content
      $links.not($active).each(function () {
          $($(this).attr('href')).hide();
      });
  
      // Bind the click event handler
      $(this).on('click', 'a', function(e){
          // Old tab inactive
          $active.parent('li').removeClass('active');
          $content.hide();
  
          // Update variables
          $active = $(this);
          $content = $($(this).attr('href'));
  
          // Activate new tab
          $active.parent('li').addClass('active');
          $content.show();
  
          // Stop anchor default action
          e.preventDefault();
      });
  });
  
});


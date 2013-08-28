  // Mobile Menu
  $.fn.extend({
    mobileNav: function(options) {
  
      var defaults = {
          mobileMenu: 'Menu', // Text in the mobile menu
          bNav: true, // add classes and structure to ul list
          // Sub Menu 
          //subMenuID: '_______',
          menuIcon: 'icon-list', // icon for mobile menu
          menuActive: 'down', // mobile menu open state change
          // Sub Menu Dropdown
          subMenuToggle: 'mobileMenu', // submenu ID to toggle - ul list
          subDrop: 'subMobile', // class to identify elements with children links
          subDropIcon: 'subIcon', // submenu dropdown icon
          subDropActive: 'on' // submenu dropdown active class
      };
  
      options = $.extend(defaults, options);
  
      return this.each(function() {				
        var $o, $obj, $mobileBtn, $subDropBtn, $isbNavOn;
        
        $o = options;
        $obj = $(this);
        // HTML for menu button
        $mobileBtn = '<span>'+ $o.mobileMenu +'</span><span class="'+ $o.menuIcon + '"></span>';
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
        $('span', $obj).click(function(){	
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
          //width = parseInt(width);
          width = $(document).width();
          if (width > 600) {
            // Show on Desktop
            // Hide main menu
            //$($obj + ' ul').show();
            $('#'+ $o.subMenuToggle).show();
          }
          else {
            // Catch all mobile
            // Hide main menu
            $($obj).show();
            $($obj).removeClass($o.menuActive);
            // Hide children
            $('ul ul', $obj).hide();
            $('#'+ $o.subMenuToggle).hide();
            $('.'+ $o.subDropIcon).removeClass($o.subDropActive);
          }
        }
        // Executes the screen size check
        $(function() {
				  var width = $(window).width();
					screenAdapt($(this).width());
					$(window).resize(function() {
					  if($(this).width() != width){
              screenAdapt($(this).width());
              width = $(this).width();
            }
					});
				});
        // End of resize window function
      });
    }
  });
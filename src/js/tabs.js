  $.fn.extend({
    tabs: function(options) {
      var defaults = {
        // default options
      };
   
      options = $.extend(defaults, options);
   
      return this.each(function() {				
        var $o, $obj;
  
        $o = options;
        $obj = $(this);
        // Plugin code
        
        $('div', $obj).addClass('innerBox');
        $('.tabs', $obj).each(function(){
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
      }
  });

  // Tooltips
  $.fn.extend({
    tooltip: function(options) {
      var defaults = {
        rel: 'tooltip',
        hover: 'tipHover',
        //click: 'tipClick',
        speed: 'slow',
        active: 'on',
        left: 'ttLeft',
        right: 'ttRight',
        ttContainer: 'theTooltip'
      };
  
      options = $.extend(defaults, options);
      
      return this.each(function() {				
        var $o, $obj;
        
        $o = options;
        $obj = $(this);
        
        
        $('a.'+ $o.rel).each(function(){ 
          var addon = $o.left;
          var titleContent = $(this).data('title');
          if($(this).position().left > ($(this).parents().width()/2) ){
            addon = $o.right;
          } 
          $(this).append('<div class="'+$o.ttContainer+'"><div class="arrow-up"></div><div class="tipBody '+addon+'">'+titleContent+'</div><div class="arrow-down"></div></div>');
         
          $(this).click(function() {
            $(this).toggleClass($o.active);
            //$('.tooltip.on').not(this).removeClass($o.active);
            $('.'+$o.rel + '.'+$o.active).not(this).removeClass($o.active);
          });
          
          $('.'+$o.hover).hover(
            function() {
              $(this).children('.'+$o.ttContainer).stop(true, true).fadeIn($o.speed);
            },
            function() {
              $(this).children('.'+$o.ttContainer).delay(200).fadeOut($o.speed);
          });
          
        });
        
      });
    }
  });
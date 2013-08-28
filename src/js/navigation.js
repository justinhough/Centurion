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
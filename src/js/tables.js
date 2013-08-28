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
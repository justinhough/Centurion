  // Alerts Plugin
  $.fn.extend({
    alerts: function(options) {
      var defaults = {
        closeBtn: '.close',
        icon: 'icon-remove'
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
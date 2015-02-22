// Centurion JS

function centurionCurrent(elem) {
  var mlen = 0,tsnm = null;
  
  //@todo: current navigation needs to account for "/" and find first nav item or index
  
  $(elem).find('a').each(function(){
    var pat = $(this).attr('href');
    
    if(window.location.pathname.indexOf(pat) != -1 && pat.length > mlen){
      mlen = pat.length
      $(this).addClass('nav-current').siblings().removeClass('nav-current');
    }
  });
}
centurionCurrent('#main');

//@todo: rewrite all functions into one centurion class based function.

// Alerts
function centurionAlerts() {
  $('.btn-expand').on('click',function(){
    
    var obj = $(this),
        alBox = obj.parent().children('.alert-expand');
    
    if (obj.hasClass('open')){
      obj.removeClass('open');
      alBox.removeClass('expanded');  
    } else {
      obj.addClass('open');
      alBox.addClass('expanded');
    }
    
  });
}
centurionAlerts();


// Tables
function centurionTables() {
  $('.striped-table').each(function(){
		//$('tbody tr:odd', this).addClass("odd");
		$('tbody tr:even', this).addClass("even");
	});
	
	//@TODO: rewrite into a more useful and streamlined function without jQuery
	$('table').wrap('<div class="ctn-table-wrapper"><div class="ctn-responsive-table"></div></div>');	
}
centurionTables();

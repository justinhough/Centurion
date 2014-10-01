// Centurion JS

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
}
centurionTables();
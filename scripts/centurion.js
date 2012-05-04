$(document).ready(function(){
    
	// Table Striping
	$("table").each(function(){
      $("tbody tr:even", this).addClass("odd");
      $("tbody tr:odd", this).addClass("even");
    });
	
    // More scripting coming soon
    
});



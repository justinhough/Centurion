$(document).ready(function(){

	// Table Striping
	$("table").each(function(){
      $("tbody tr:even", this).addClass("odd");
      $("tbody tr:odd", this).addClass("even");
    });
	
    // More scripting coming soon
    
		
		// Navigation
		var cUrlPath = jQuery.url.attr("path");
		var cCurrentfile = jQuery.url.attr("file");
		//var cDir = jQuery.url.attr("directory");
		
		if(cCurrentfile == null){
			cUrlPath += "index.html";
		}
		
		$("nav ul li a").each(function () {
			var cNav = $(this).attr("href");
			if(cNav.search(cCurrentfile) > -1) {
				$(this).addClass("on");
			}
			if($("nav ul li a.on").size() > 1){
				$("nav ul li a").removeClass("on");
				//$("nav ul li a:first").addClass("on");
			}
			
		});
		
});



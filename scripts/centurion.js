$(document).ready(function(){

  // Table Striping
  $("table").each(function(){
      $("tbody tr:even", this).addClass("odd");
      $("tbody tr:odd", this).addClass("even");
    });
  
  // Navigation
  var cUrlPath = jQuery.url.attr("path");
  var cCurrentfile = jQuery.url.attr("file");
  //var cDir = jQuery.url.attr("directory");

  $("nav ul li a").each(function () {
    var cNav = $(this).attr("href");
    if(cNav.search(cCurrentfile) > -1) {
      $(this).addClass("on");
    }
    if($("nav ul li a.on").size() > 1){
      $("nav ul li a").removeClass("on");
    }
      
  }); 
});


// ADAPT.JS
// Handles the stylesheet switching involved with mobile detection
function centurionID(i, width) {
  document.documentElement.id = 'centurion_' + i;
}
var ADAPT_CONFIG = {
  dynamic: true,
  callback: centurionID,
  range: [
    '0 to 320',
    '320 to 480',
    '480 to 700',
    '700 to 1000',
    '1000',
  ]
};
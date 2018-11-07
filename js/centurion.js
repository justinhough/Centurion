/* -------------------------------------------------------- 
 *  Centurion Framework v3.8.1 
 *  Justin Hough (http://www.justinhough.com/) 
 *  Licensed under GPL and MIT. 
 * -------------------------------------------------------- */

function centurionCurrent(elem){var mlen=0;$(elem).find("a").each(function(){var pat=$(this).attr("href");-1!=window.location.pathname.indexOf(pat)&&pat.length>mlen?(mlen=pat.length,$(this).addClass("nav-current").siblings().removeClass("nav-current")):$(elem+" a:first-of-type").addClass("nav-current")})}function centurionAlerts(){$(".btn-expand").on("click",function(){var obj=$(this),alBox=obj.parent().children(".alert-expand");obj.hasClass("open")?(obj.removeClass("open"),alBox.removeClass("expanded")):(obj.addClass("open"),alBox.addClass("expanded"))})}function centurionTables(){$(".striped-table").each(function(){$("tbody tr:even",this).addClass("even")}),$("table").wrap('<div class="ctn-table-wrapper"><div class="ctn-responsive-table"></div></div>')}centurionCurrent("#main"),centurionAlerts(),centurionTables();
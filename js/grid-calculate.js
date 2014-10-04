// Grid Calculate

function gridBoxElements() {
  $('.calculate [class*="grid-"]').append('<span class="box-grid"><span class="pixels"></span></span>');
}

function gridCalculate() {
  $('.calculate [class*="grid-"]').each(function(){
    var el = $(this);
    var width = el.innerWidth()-20 + 'px';
    var gridClass = $(this).attr('class');
    el.find('span.pixels').html(width);
    //el.find('span.grid-class').html(gridClass);
  });
}
width = $(document).width();


$(function() {
  gridBoxElements();
  gridCalculate($(this).width());
  $(window).resize(function() {
    gridCalculate($(this).width());
  });
});
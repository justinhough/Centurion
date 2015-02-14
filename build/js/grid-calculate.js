// Grid Calculate

htmlStructure = '<div class="color-box">'+
                '<span class="color-swatch"></span>'+
                '<span class="color-code">'+
                  '<span class="color-code-hex"></span><br />'+
                  '<span class="color-code-rgb"></span>'+
                '</span>'+
                '<span class="color-name"></span>'+
                '</div>';

$('#colors div[data-color]').append(htmlStructure);

//$('#colors div[data-color]').after('<div class="clear"></div>');
$('#colors div[data-color]').each(function(){
  data = $(this).attr('data-color');
  colorClass = data;
  bkColorClass = data;

  $(this).find('.color-swatch').addClass(bkColorClass);

  // Grab background color value for current item - returns RGB
  colorValue = $(this).find('.color-swatch').css('backgroundColor');

  //Convert HEX to RGB
  var rgbValue = colorValue;
  var parts = rgbValue.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  delete (parts[0]);
  for (var i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16);
      if (parts[i].length == 1) parts[i] = '0' + parts[i];
  }
  var hexValue ='#'+parts.join('').toUpperCase();

  // Return HTMl to page
  $(this).find('.color-code-hex').addClass(colorClass).html(hexValue);
  $(this).find('.color-code-rgb').addClass(colorClass).html(rgbValue);
  $(this).find('.color-name').addClass(colorClass).html(data);
});




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

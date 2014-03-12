/* --------------------------------------------------------
 * Centurion Javascript Library 2.0
 * http://centurionframework.com/
 *
 * Copyright 2014 Justin Hough.
 * Licensed under GPL and MIT.
 *
 * Updated: 2014-03-09
 * ----------------------------------------------------- */

// Declaring vars for functions
var nav, mNav, table, alert, tab, tooltip;

// Centurion Navigation Detect
function centurionNav(nav) {
  console.log('Navigation is running with ' + nav);
  
  var options = {
    activeClass: 'active'
  };
  
  o = options;
  obj = $(nav);
  leng = 0;
  
  //obj.addClass(o.activeClass);
  
  obj.find('a').each(function(){
    var path = $(this).attr('href');
    
    if(window.location.pathname.indexOf(path) != -1 && path.length > leng){
      leng = path.length
      $(this).addClass(o.activeClass).siblings().removeClass(o.activeClass);
    }
  });
  
}

// Centurion Tables
function centurionTables(table) {
  console.log('Tables are active ' + table);
  
  var options = {
    evenRow: "even",
    oddRow: "odd"
  };
  
  o = options;
  obj = $(table);
  //leng = 0;
    
  obj.each(function(){
    $("tbody tr:even", this).addClass(o.oddRow);
    $("tbody tr:odd", this).addClass(o.evenRow);
  });
  
}


// Centurion Mobile Navigation
function centurionResponsiveNav(mNav) {
  console.log('Responsive nav is running with ' + mNav);
  
  var options = {
    mobileMenu: 'Menu', // Text in the mobile menu
    bNav: true, // add classes and structure to ul list
    // Sub Menu 
    menuIcon: 'menuIcon', // icon for mobile menu
    menuActive: 'down', // mobile menu open state change
    // Sub Menu Dropdown
    subMenuToggle: 'mobileMenu', // submenu ID to toggle - ul list
    subDrop: 'subMobile', // class to identify elements with children links
    subDropIcon: 'subIcon', // submenu dropdown icon
    subDropActive: 'on', // submenu dropdown active class
  };

  o = options;
  obj = $(mNav);
  //leng = 0;
    		
  // HTML for menu button
  $mobileBtn = '<span>'+ o.mobileMenu +'</span><span class="'+ o.menuIcon + '"></span>';
  // HTML for plus icon for submenu
  $subDropBtn = '<span class="'+ o.subDropIcon +'"></span>';
  
  // Check to see if Build Nav is true
  $isbNavOn = o.bNav;
  
  // Build Navigation adds classes and structure to UL list
  if ($isbNavOn == true){
    // Hide all menus
    $('ul', obj).show();
  
    // add mobile button to page
    obj.prepend($mobileBtn);
    obj.children('ul').attr('id',o.subMenuToggle);
  
    // Find all elements with children and add sub menu button
    $('li > ul', obj).parent().addClass(o.subDrop).prepend($subDropBtn);
  }
  else { 
    // Leave navigation alone
  }
  
  // Mobile Navigation
  $('span', obj).click(function(){	
    $('.'+ o.subDropIcon).removeClass(o.subDropActive);
    $('ul ul', obj).hide();
    $('#'+ o.subMenuToggle).toggle();
    $(this).toggleClass(o.menuActive);
  });
  
  // Mobile Navigation Children
  $('.' + o.subDropIcon, obj).click( function() {
    $(this).nextAll('ul').slideToggle('fast');
    $(this).toggleClass(o.subDropActive);
    return false;
  });
  
  // Style resets in case browser window is adjusted
  function screenAdapt(width) {
    //width = parseInt(width);
    width = $(document).width();
    if (width > 520) {
      // Show on Desktop
      // Hide main menu
      //$(obj + ' ul').show();
      $('#'+ o.subMenuToggle).show();
    }
    else {
      // Catch all mobile
      // Hide main menu
      $(obj).show();
      $(obj).removeClass(o.menuActive);
      // Hide children
      $('ul ul', obj).hide();
      $('#'+ o.subMenuToggle).hide();
      $('.'+ o.subDropIcon).removeClass(o.subDropActive);
    }
  }
  // Executes the screen size check
  $(function() {
      screenAdapt($(this).width());
      $(window).resize(function() {
        screenAdapt($(this).width());
      });
  });
  // End of resize window function

}

// Centurion Alerts
function centurionAlerts(alert) {
  console.log('Alerts is running with ' + alert);
  
  var options = {
    closeBtn: 'close',
    icon: 'icon-remove',
  };
  
  o = options;
  obj = $(alert);
  //leng = 0;
  var closeBtnSt;

  closeBtnSt = '<span href="#" class="'+ o.closeBtn +' '+ o.icon +'"></span>';
  
  obj.prepend(closeBtnSt);
  
  $("."+ o.closeBtn, obj).click(function(){
    $(this).parent().fadeOut();
  });
        
  
}


// Centurion Tooltips
function centurionTooltips(tooltip) {
  console.log('Tooltips is running with' + tooltip);
  
  var options = {
    rel: 'tooltip',
    hover: 'tipHover',
    //click: 'tipClick',
    speed: 'slow',
    active: 'on',
    left: 'ttLeft',
    right: 'ttRight',
    ttContainer: 'theTooltip'
  };
  
  o = options;
  obj = $(tooltip);
  
        
        
  $('a.'+ o.rel).each(function(){ 
    var addon = o.left;
    var titleContent = $(this).data('title');
    if($(this).position().left > ($(this).parents().width()/2) ){
      addon = o.right;
    } 
    $(this).append('<div class="'+o.ttContainer+'"><div class="arrow-up"></div><div class="tipBody '+addon+'">'+titleContent+'</div><div class="arrow-down"></div></div>');
   
    $(this).click(function() {
      $(this).toggleClass(o.active);
      //$('.tooltip.on').not(this).removeClass(o.active);
      $('.'+o.rel + '.'+o.active).not(this).removeClass(o.active);
    });
    
    $('.'+o.hover).hover(
      function() {
        $(this).children('.'+o.ttContainer).stop(true, true).fadeIn(o.speed);
      },
      function() {
        $(this).children('.'+o.ttContainer).delay(200).fadeOut(o.speed);
    });
    
  });
  
}


// Centurion Tabs
function centurionTabs(tab) {
  console.log('Tabs is running with ' + tab);
  
  var options = {
    // options go here
  };
  
  o = options;
  obj = $(tab);
  
  $('div', obj).addClass('innerBox');
    $('.tabs', obj).each(function(){
        var active, content, links = $(this).find('a');
        
        active = $(links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        //active = links.filter('[href="'+location.hash+'"]')[0] || links[0]);
        active.parent('li').addClass('active');
        content = $(active.attr('href'));
    
        // Hide tab content
        links.not(active).each(function () {
            $($(this).attr('href')).hide();
        });
    
        // Bind the click event handler
        $(this).on('click', 'a', function(e){
            // Old tab inactive
            active.parent('li').removeClass('active');
            content.hide();
    
            // Update variables
            active = $(this);
            content = $($(this).attr('href'));
    
            // Activate new tab
            active.parent('li').addClass('active');
            content.show();
    
            // Stop anchor default action
            e.preventDefault();
        });
    });

}

// Run all of Centurion at once
function centurion(options) {

  var options = options || {};
  
  var navDetect = options.navDetect || '.navigation';
  var mobile = options.mobile || '.navigation';
  var alerts = options.alerts || '.alert';
  var tables = options.tables || 'table';
  var tooltips = options.tooltips || '.tooltip';
  var tabs = options.tabs || '.tabBox';

  // Navigation
  centurionNav(navDetect);
  // Tables
  centurionTables(tables);
  // Alerts
  centurionAlerts(alerts);
  // Toolips
  centurionTooltips(tooltips);
  // Tabs
  centurionTabs(tabs);
  // Mobile Navigation - activate last
  centurionResponsiveNav(mobile);
}

$(document).ready(function() { 
  // Activate with defaults
  centurion()
});

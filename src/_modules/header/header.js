'use strict';

var $ = require('jquery');


// Constructor
var Header = function() {

  var dropdownTrigger = function() {
    
    // Saving all Header Nav Links and Desktop Dropdown Menus as varibles
    var desktopNavLinks = $('nav.desktop-nav a');
    var desktopDropdownMenus = $('.header-dropdown');

    // Click Function
    desktopNavLinks.click(function(e) {
      
      // ID of clicked element
      var elementID = $(this).attr('id');
      // Adding -dropdown to match ID of corresponding dropdown menu
      var dropdownID = elementID + '-dropdown';
      var id;
      
      // Loop through each dropdown menu
      $.each(desktopDropdownMenus, function(){
        // Get ID of each dropdown menu
        id = $(this).attr('id');

        // If ID does not match the ID of the clicked element, slideUp
        if (id !== dropdownID) {
          $(this).slideUp();
        }
      })

      // Apply slideToggle to the dropdown of the clicked link
      dropdownID = '#' + elementID + '-dropdown';
      $(dropdownID).slideToggle();
    
    });
  }


  var mobileMenuTrigger = function () {

    $('.mobile-nav').click(function(e) {
      e.preventDefault();
      $('.mobile-nav-popup').fadeIn();
      $('html, body').addClass('overflow-hidden');
    });

    $('#close-btn').click(function(e) {
      e.preventDefault();
      $('.mobile-nav-popup').fadeOut();
      $('html, body').removeClass('overflow-hidden');
    })

    var mobileNavLinks = $('.mobile-nav-link a');
    var mobileSubNav = $('mobile-nav-popup > li > ul');

    mobileNavLinks.click(function(e){
      $(this).siblings().slideToggle();
    });

  }

  // Calling all our defined functions
  dropdownTrigger();
  mobileMenuTrigger();
};

module.exports = Header;

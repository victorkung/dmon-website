'use strict';

var $ = require('jquery');


// Constructor
var Header = function() {

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
  mobileMenuTrigger();
};

module.exports = Header;

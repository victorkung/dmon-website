// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Header = require('../_modules/header/header');

// Slick Carousel
// require('slick-carousel');



$(function () {
  new Header(); // Activate Header module logic

  // Calling Slick Carousel
  // $('.carousel-wrapper').slick({
  //   dots: true,
  //   arrows: false
  // });

});
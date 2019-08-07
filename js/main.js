---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    $('.panel-cover').toggleClass('panel-cover--collapsed slideOutLeft')
    $('.content-wrapper').toggleClass('animated slideInRight')
  });

  if ((window.location.hash && window.location.hash !== undefined) 
  || (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html')){
    $('.panel-cover').toggleClass('panel-cover--collapsed slideOutLeft')
    $('.content-wrapper').toggleClass('animated slideInRight')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  });

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  });
});

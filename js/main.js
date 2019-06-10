---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    $('.panel-cover').toggleClass('panel-cover--collapsed')
    $('.content-wrapper').toggleClass('animated slideInRight')
  });

  if ((window.location.hash && window.location.hash !== undefined) 
  || (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html')){
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  });

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  });

  $('#upcoming .post').each((index, post) => { 
    const postDate = moment($(post)[0].id, moment.ISO_8601);
    const nowDate = moment();
    const upcoming = postDate >= nowDate;
    if (upcoming) {
      $(post).removeClass('hidden');
    }
  });

  $('#past .post').each((index, post) => { 
    const postDate = moment($(post)[0].id, moment.ISO_8601);
    const nowDate = moment();
    const past = postDate < nowDate;
    if (past) {
      $(post).removeClass('hidden');
    }
  });
});

---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
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

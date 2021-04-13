'use strict';

$('p').hide();

$(document).ready(function () {
  $('#getJson').click(function () {
    $.getJSON('db.json', function (result) {
      $.each(result.posts, function (i, field) {
        $('main').append(
          `<section><h4>${result.posts[i].user}</h4><p>${result.posts[i].text}</p></section>`
        );
        // console.log(result.posts[1]);
      });
    });
  });
});

$('#addPost').click(function () {
  const user = document.querySelector('.user').value;
  const txt = document.querySelector('.text').value;
  //   console.log('Clicked addpost');
  if (user || txt) {
    $('main').append(`<section><h4>${user}</h4><p>${txt}</p></section>`);
  }
});

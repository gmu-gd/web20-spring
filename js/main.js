$(document).ready(function() {
    // run function on initial page load
    studentHeight();
    menuSlide();
    clickableDiv();

    // run function on resize of the window
    $(window).resize(function() {
      studentHeight();
    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

var textHeight = $('.student h2').outerHeight();

function studentHeight() {
  var headHeight = $('header').outerHeight();
  var pageHeight = $(window).height();
  var height = ((pageHeight - headHeight) / 4);
  var topPadding = ((height - textHeight) / 2);
  $('.student').css("height", height);
  $('.student').css("background-color", height);
  $('.menu-list').css("height", (height * 4));
  $('.student h2').css("padding-top", topPadding);
}

var i = 1;
function menuSlide() {
  $('.menu-icon').click(function() {
    if (i == 1) {
      $('body').toggleClass('lock-y');
      $('.hamburger').toggleClass('is-active');
      $('#nav-home').toggleClass('menu-hide');
      $('#nav-home').toggleClass('menu-animate', 500);
      i++;
      console.log("first click" + i);
    }
    else {
      $('body').toggleClass('lock-y');
      $('.hamburger').toggleClass('is-active');
      setTimeout(function() {
        $('#nav-home').toggleClass('menu-hide');
      }, 500);
      $('#nav-home').toggleClass('menu-animate', 500);
      i = 1;
      console.log("second click" + i);
    }
  });
}

function clickableDiv() {
  $('.student').click(function() {
    window.open($(this).attr("data-href"), '_blank');
  });
}

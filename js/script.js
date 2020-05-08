$(document).ready(function () {
  $(".slider-blocks").slick({
    autoplay: true,
  });

  let menuBtn = $(".top-nav_button"); 
  let adaptMenu = $(".top-nav_menu");
  let btnScroll = $('.btn-scroll');
  let menuScroll = $('.content-block6-item_none');
  let plus = $('.fa-plus');

  menuBtn.on('click', function(event) {
    event.preventDefault();
    adaptMenu.toggle();
  })

  // menuBtn.on("click", function (event) {
  //   event.preventDefault();
  //   menu.toggle("top-nav_menu__active");
  // });

  btnScroll.on('click', function() {
    menuScroll.slideToggle(300);
    plus.toggle();
  });

});


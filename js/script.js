$(document).ready(function () {
  $(".slider-blocks").slick();

  let menuBtn = $(".top-nav_button"); 
  let menu = $(".top-nav_items");
  let btnScroll = $('.btn-scroll');
  let menuScroll = $('.content-block6-item_none');
  let plus = $('.fa-plus');

  menuBtn.on("click", function (event) {
    event.preventDefault();
    menu.toggle("top-nav_items__active");
  });

  btnScroll.on('click', function() {
    menuScroll.slideToggle(300);
    plus.toggle();
  });

});


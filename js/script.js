$(document).ready(function () {
  $(".slider-blocks").slick();

  let menuBtn = $(".top-nav_button"); 
  let menu = $(".top-nav_items");

  menuBtn.on("click", function (event) {
    event.preventDefault();
    menu.toggle("top-nav_items__active");
  });
});

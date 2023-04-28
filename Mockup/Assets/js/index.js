$(document).ready(function () {
  // $("#ham-toggle").on("change", function () {

  // });
  var header = $("header");
  var sticky = header.offset().top;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > sticky) {
      header.addClass("sticky");
      //get header height
      var headerHeight = header.height();
      console.log(headerHeight);
      $("body").css("padding-top", headerHeight + "px");
    } else {
      header.removeClass("sticky");
      $("body").css("padding-top", "");
    }
  });

  // //drop down
  // $(".drop-down").on("click", function () {
  //   $(this).toggleClass("focus");
  // });
});

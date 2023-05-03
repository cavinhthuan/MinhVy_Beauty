$(document).ready(function () {
  // get all link tags
  let links = document.getElementsByTagName("a");
  let nav = document.getElementById("ham-toggle");
  let header = $("header");
  let sticky = header.offset().top;

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

  // loop through each link
  for (let link of links) {
    // add onclick event listener
    link.addEventListener("click", function (event) {
      // get the uri from the href attribute
      let uri = link.getAttribute("href");
      // check if uri is a hashtag
      if (uri.startsWith("#")) {
        // prevent the default behavior of jumping to the element
        event.preventDefault();
        // get the element with the id matching the hashtag
        let target = document.getElementById(uri.slice(1));
        // get the header element height
        let headerHeight = document.querySelector("header").offsetHeight;
        // scroll to the target element smoothly with padding top by header height
        window.scrollTo({
          top: target.offsetTop - headerHeight - 15,
          behavior: "smooth",
        });
      }
    });
  }
});

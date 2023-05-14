import { minisearch } from "/Assets/js/_search.js";
import Cart from "/Assets/js/_cart.js";
import { products } from "/Assets/js/_data.js";
let cart = new Cart();
const searchEngine = minisearch(products);

$(document).ready(function () {
  // Get the header element
  let header = document.querySelector("header");
  let links = document.getElementsByTagName("a");
  // Get the offset position of the header
  let sticky = header.offsetTop;
  let nav = document.getElementById("ham-toggle");
  let navAfter = document.querySelector("#nav-left");

  console.log("loaded");
  // get all link tags
  window.addEventListener("scroll", function () {
    if ($(this).scrollTop() > sticky) {
      header.classList.add("sticky");
      //get header height
      var headerHeight = header.offsetHeight;
      $("body").css("padding-top", headerHeight + "px");
    } else {
      header.classList.remove("sticky");
      $("body").css("padding-top", "");
    }
  });
  nav.addEventListener("change", function () {
    //get all .drop-down elements
    var items = document.querySelectorAll(".drop-down .drop-down--items");

    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
  });

  // loop through each link
  for (let link of links) {
    // add onclick event listener
    link.addEventListener("click", function (event) {
      console.log("click");
      // get the uri from the href attribute
      let uri = link.getAttribute("href");
      // check if uri is a hashtag
      if (uri.startsWith("#")) {
        // prevent the default behavior of jumping to the element
        event.preventDefault();
        if (uri.length > 1) {
          if (
            link.nextElementSibling != null &&
            link.nextElementSibling.classList.contains("drop-down--items") &&
            link.nextElementSibling.style.display == "flex"
          ) {
            // get the element with the id matching the hashtag
            let target = document.getElementById(uri.slice(1));
            // get the header element height
            let headerHeight = document.querySelector("header").offsetHeight;
            // scroll to the target element smoothly with padding top by header height
            window.scrollTo({
              top: target.offsetTop - headerHeight - 15,
              behavior: "smooth",
            });

            if (nav.checked) {
              console.log("close 1");
              nav.checked = false;
            }
            var items = document.querySelectorAll(
              ".drop-down .drop-down--items"
            );

            for (var i = 0; i < items.length; i++) {
              items[i].style.display = "none";
            }
          } else {
            ///debug
            console.log(link);
            console.log(link.nextElementSibling != null);
            if (link.nextElementSibling != null) {
              console.log(
                link.nextElementSibling.classList.contains("drop-down--items")
              );
              console.log(link.nextElementSibling.style.display == "flex");

              console.log(link.nextElementSibling);
              console.log(link.nextElementSibling.classList);
              console.log(link.nextElementSibling.style.display);
            }
            ///end debug

            //next element is null doing scroll
            if (link.nextElementSibling != null) {
              if (
                link.nextElementSibling.classList.contains("drop-down--items")
              ) {
                if (link.nextElementSibling.style.display == "flex") {
                  //close all drop down
                  // var items = document.querySelectorAll(
                  //   ".drop-down .drop-down--items"
                  // );
                  // items.forEach(function (item) {
                  //   item.style.display = "none";
                  // });
                  //go
                } else if (link.nextElementSibling.style.display == "none") {
                  //close all drop down
                  link.nextElementSibling.style.display = "flex";
                  return;
                }
              } else {
                // //close all drop down
                // var items = document.querySelectorAll(
                //   ".drop-down .drop-down--items"
                // );
                // items.forEach(function (item) {
                //   item.style.display = "none";
                // });
                //go
              }
            }
            //go to
            let target = document.getElementById(uri.slice(1));
            // get the header element height
            let headerHeight = document.querySelector("header").offsetHeight;
            // scroll to the target element smoothly with padding top by header height
            window.scrollTo({
              top: target.offsetTop - headerHeight - 15,
              behavior: "smooth",
            });

            if (nav.checked) {
              console.log("close 2");

              nav.checked = false;
            }

            var items = document.querySelectorAll(
              ".drop-down .drop-down--items"
            );

            for (var i = 0; i < items.length; i++) {
              items[i].style.display = "none";
            }
          }
        }
      }
    });
  }

  // add a click event listener to the nav element
  navAfter.addEventListener("click", function (e) {
    // get the position and size of the nav element
    var rect = navAfter.getBoundingClientRect();

    // get the position and size of the hamburger hamburger-toggle element. (id is hamburger-toggle) 描述: hamburger hamburger
    // calculate the position and size of the pseudo-element
    var pseudoX = rect.right - 10; // assuming 10px width
    var pseudoY = rect.top - 2; // assuming -2px top position
    var pseudoWidth = 10; // assuming 10px width
    var pseudoHeight = rect.height + 4; // assuming -2px top and bottom positions

    // check if the click event was inside the pseudo-element
    if (e.clientX >= pseudoX && nav.checked) {
      // toggle the checked property of the ham element
      nav.checked = !nav.checked;
    }
  });
});

import { minisearch } from "./_search.js";
const documents = [
  {
    id: "1",
    name: "Bột tăng chiều cao Lysine cho bé từ 7 tháng tuổi Bio Island Lysine Starter For Kid 150g",
    price: "489000",
    thumnal: "BioLand Lysine Starter for kids cong dung.jpg",
    "page ": "# ",
  },
  {
    id: "2",
    name: "Canxi Bio Island Milk Calcium 90 viên",
    price: "397000",
    thumnal: "BioLand Canxi HDSD.jpg",
    "page ": "# ",
  },
  {
    id: "3",
    name: "Collagen dạng nước Nature's Way Beauty Collagen Liquid 500ml",
    price: "395000",
    thumnal: "Collagen nuoc Natures Way HDSD.jpg",
    "page ": "# ",
  },
  {
    id: "4",
    name: "Dầu cá DHA Bio Island DHA For Kid 60 viên nang",
    price: "374000",
    thumnal: "Bioland DHA cong dung.jpg",
    "page ": "# ",
  },
  {
    id: "5",
    name: "Dầu xanh Eagle Brand Medicated Oil Singapore nhập Úc 24ml",
    price: "125000",
    thumnal: "daugioxanh (2).jpg",
    "page ": "# ",
  },
  {
    id: "6",
    name: "Viên uống hỗ trợ Gout Blackmores Celery 3000 50 viên",
    price: "348000",
    thumnal: "dieutrigout (4).jpg",
    "page ": "# ",
  },
  {
    id: "7",
    name: "Kem xoa bóp Voltaren Emulgel 100g",
    price: "276000",
    thumnal: "emulgel (4).jpg",
    "page ": "# ",
  },
  {
    id: "8",
    name: "Phấn hoa khử mùi Pollen",
    price: "39000",
    thumnal: "Phan Pollen huong dan su dung.jpg",
    "page ": "# ",
  },
  {
    id: "9",
    name: "Siro Vitamin Centrum Kids Incremin Iron Mixture 200ml",
    price: "334000",
    thumnal:
      "Siro Bieng An Centrum Kids Incremin Iron Mixture 200ml anh bia.jpg",
    "page ": "# ",
  },
  {
    id: "10",
    name: "Sụn vi cá mập Healthy Care Shark Cartilage 200 viên",
    price: "378000",
    thumnal: "Sun vi ca Shark Catilage HC cong cung.jpg",
    "page ": "# ",
  },
  {
    id: "11",
    name: "Viên hỗ trợ đau dạ dày Nexium 24h 14 viên nén",
    price: "329000",
    thumnal: "Thuoc dau bao tu Nexium 24h 14 vien anh bia.jpg",
    "page ": "# ",
  },
  {
    id: "12",
    name: "Viên uống giảm đau khớp Nutra Life Joint Formula Triple Action",
    price: "640000",
    thumnal: "Nutra Life Joint Formula anh bia.jpg",
    "page ": "# ",
  },
  {
    id: "13",
    name: "Viên uống hỗ trợ Omega 369 Healthy Care",
    price: "385000",
    thumnal: "Omega 369 Healthy care cong dung.jpg",
    "page ": "# ",
  },
  {
    id: "14",
    name: "Viên uống tuần hoàn máu Ginko Biloba 2000mg Úc",
    price: "270000",
    thumnal: "Ginkgo biloba 2000 anh cong dung.jpg",
    "page ": "# ",
  },
];
const searchEngine = minisearch(documents);

//
$(document).ready(function () {
  // get all link tags
  let links = document.getElementsByTagName("a");
  let nav = document.getElementById("ham-toggle");
  let navAfter = document.querySelector("#nav-left");

  let header = $("header");
  let sticky = header.offset().top;
// Lấy các phần tử drop-down và drop-down--items
var dropdowns = document.getElementsByClassName("drop-down");
var dropdownItems = document.getElementsByClassName("drop-down--items");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > sticky) {
      header.addClass("sticky");
      //get header height
      var headerHeight = header.height();
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
        if (uri.length > 1) {
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
      }
    });
  }


// // Duyệt qua các phần tử drop-down và gán sự kiện click
// for (var i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener("click", function(e) {
//     e.preventDefault();
//     // Đóng tất cả các drop-down--items khác
//     for (var j = 0; j < dropdownItems.length; j++) {
//       if (dropdownItems[j] !== this.nextElementSibling) {
//         dropdownItems[j].style.display = "none";
//       }
//     }
//     // Hiển thị hoặc ẩn drop-down--items hiện tại
//     var items = $(this).children(".drop-down--items")[0];
//     console.log(items);
//     if (items.style.display === "block") {
//       items.style.display = "none";
//       // Cuộn tới phần tử có hash tương ứng
//       var hash = this.firstElementChild.getAttribute("href");
//       var element = document.querySelector(hash);
//       element.scrollIntoView({behavior: "smooth"});
//     } else {
//       items.style.display = "block";
//     }
//   });
// }
  // get the element with class .nav--mobile::after

  // get the element with id #ham-toggle

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

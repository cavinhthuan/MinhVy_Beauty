import { minisearch } from "./_search.js";
import Cart from "./_cart.js";
let cart = new Cart();
const products = [
  {
    id: "1",
    name: "Bột tăng chiều cao Lysine cho bé từ 7 tháng tuổi Bio Island Lysine Starter For Kid 150g",
    price: "489000",
    thumnal: "BioLand Lysine Starter for kids cong dung.jpg",
    catalogs: "danhchotreem",
    "page ": "# ",
  },
  {
    id: "2",
    name: "Canxi Bio Island Milk Calcium 90 viên",
    price: "397000",
    thumnal: "BioLand Canxi HDSD.jpg",
    catalogs: "danhchotreem",
    "page ": "# ",
  },
  {
    id: "3",
    name: "Collagen dạng nước Nature's Way Beauty Collagen Liquid 500ml",
    price: "395000",
    thumnal: "Collagen nuoc Natures Way HDSD.jpg",
    catalogs: "danhchonam,danhchonu",
    "page ": "# ",
  },
  {
    id: "4",
    name: "Dầu cá DHA Bio Island DHA For Kid 60 viên nang",
    price: "374000",
    thumnal: "Bioland DHA cong dung.jpg",
    catalogs: "danhchotreem",
    "page ": "# ",
  },
  {
    id: "5",
    name: "Dầu xanh Eagle Brand Medicated Oil Singapore nhập Úc 24ml",
    price: "125000",
    thumnal: "daugioxanh (2).jpg",
    catalogs: "danhchonguoilontuoi",
    "page ": "# ",
  },
  {
    id: "6",
    name: "Viên uống hỗ trợ Gout Blackmores Celery 3000 50 viên",
    price: "348000",
    thumnal: "dieutrigout (4).jpg",
    catalogs: "danhchonguoilontuoi,danhchonam,danhchonu",
    "page ": "# ",
  },
  {
    id: "7",
    name: "Kem xoa bóp Voltaren Emulgel 100g",
    price: "276000",
    thumnal: "emulgel (4).jpg",
    catalogs: "danhchonguoilontuoi,danhchonam,danhchonu",
    "page ": "# ",
  },
  {
    id: "8",
    name: "Phấn hoa khử mùi Pollen",
    price: "39000",
    thumnal: "Phan Pollen huong dan su dung.jpg",
    catalogs: "danhchonam,danhchonu",
    "page ": "# ",
  },
  {
    id: "9",
    name: "Siro Vitamin Centrum Kids Incremin Iron Mixture 200ml",
    price: "334000",
    thumnal:
      "Siro Bieng An Centrum Kids Incremin Iron Mixture 200ml anh bia.jpg",
    catalogs: "danhchotreem",
    "page ": "# ",
  },
  {
    id: "10",
    name: "Sụn vi cá mập Healthy Care Shark Cartilage 200 viên",
    price: "378000",
    thumnal: "Sun vi ca Shark Catilage HC cong cung.jpg",
    catalogs: "danhchonguoilontuoi,danhchonam,danhchonu",
    "page ": "# ",
  },
  {
    id: "11",
    name: "Viên hỗ trợ đau dạ dày Nexium 24h 14 viên nén",
    price: "329000",
    thumnal: "Thuoc dau bao tu Nexium 24h 14 vien anh bia.jpg",
    catalogs: "danhchonguoilontuoi,danhchonam,danhchonu",
    "page ": "# ",
  },
  {
    id: "12",
    name: "Viên uống giảm đau khớp Nutra Life Joint Formula Triple Action",
    price: "640000",
    thumnal: "Nutra Life Joint Formula anh bia.jpg",
    catalogs: "danhchonguoilontuoi,danhchonam",
    "page ": "# ",
  },
  {
    id: "13",
    name: "Viên uống hỗ trợ Omega 369 Healthy Care",
    price: "385000",
    thumnal: "Omega 369 Healthy care cong dung.jpg",
    catalogs: "danhchonguoilontuoi,danhchonam,danhchonu",
    "page ": "# ",
  },
  {
    id: "14",
    name: "Viên uống tuần hoàn máu Ginkgo Biloba 2000mg Úc",
    price: "270000",
    thumnal: "Ginkgo biloba 2000 anh cong dung.jpg",
    catalogs: "danhchonguoilontuoi,danhchonam,danhchonu",
    "page ": "# ",
  },
];
const searchEngine = minisearch(products);
//products
function createProductElement(product) {
  // Tạo một thẻ div có class là product
  let productDiv = document.createElement("div");
  productDiv.className = "product";

  // Tạo một thẻ div có class là product-image và chứa một thẻ img
  let productImageDiv = document.createElement("div");
  productImageDiv.className = "product-image";
  let productImage = document.createElement("img");
  productImage.src = "Assets/image/" + product.thumnal;
  productImage.alt = product.name;
  productImageDiv.appendChild(productImage);

  // Tạo một thẻ div có class là product-name và chứa tên sản phẩm
  let productNameDiv = document.createElement("div");
  productNameDiv.className = "product-name";
  productNameDiv.textContent = product.name;

  // Tạo một thẻ div có class là product-price và chứa giá sản phẩm
  let productPriceDiv = document.createElement("div");
  productPriceDiv.className = "product-price";
  let formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  productPriceDiv.textContent = `${formatter
    .format(product.price)
    .replace("₫", "")
    .trimEnd()} `;
  let currency = document.createElement("u");
  currency.textContent = "đ";
  productPriceDiv.appendChild(currency);

  // Tạo một thẻ div có class là btn-addtocart và chứa nút thêm vào giỏ hàng
  let btnAddtocartDiv = document.createElement("div");
  btnAddtocartDiv.className = "btn-addtocart";
  btnAddtocartDiv.textContent = "Chọn Mua";
  btnAddtocartDiv.setAttribute("data-product-id", product.id);
  btnAddtocartDiv.addEventListener("click", function () {
    var productId = this.dataset.productId;
    cart.addProduct(productId, 1);
  });

  // Thêm các thẻ div con vào thẻ div cha
  productDiv.appendChild(productImageDiv);
  productDiv.appendChild(productNameDiv);
  productDiv.appendChild(productPriceDiv);
  productDiv.appendChild(btnAddtocartDiv);
  // Trả về phần tử HTML của sản phẩm
  return productDiv;
}
// Hàm để thêm các sản phẩm vào các catalog tương ứng
function appendProductsToCatalogs(products) {
  // Lấy ra tất cả các phần tử section có class là group-products

  // Duyệt qua mảng các sản phẩm
  for (let product of products) {
    // Lấy ra các catalog của sản phẩm và chuyển thành mảng
    let productCatalogs = product.catalogs.split(",");

    // Duyệt qua mảng các catalog
    for (let catalog of productCatalogs) {
      // Tạo một phần tử HTML cho sản phẩm
      let productElement = createProductElement(product);
      let catalogElement = document.getElementById(`${catalog}`);
      let catalogElementParent = catalogElement.parentElement;
      let section = catalogElementParent.nextElementSibling;

      section.appendChild(productElement);
    }
  }
}
// Gọi hàm để thêm các sản phẩm vào các catalog tương ứng
appendProductsToCatalogs(products);

//
$(document).ready(function () {
  // get all link tags
  let links = document.getElementsByTagName("a");
  let nav = document.getElementById("ham-toggle");
  let navAfter = document.querySelector("#nav-left");
  let productsHtml = document.querySelectorAll(".product");

  let header = $("header");
  let sticky = header.offset().top;

  nav.addEventListener("change", function () {
    //get all .drop-down elements
    var items = document.querySelectorAll(".drop-down .drop-down--items");

    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
  });

  productsHtml.forEach(function (product) {
    // Lấy vị trí của .product so với cửa sổ xem
    var rect = product.getBoundingClientRect();
    // Lấy chiều cao của cửa sổ
    var height = window.innerHeight;
    // Nếu .product đi qua điểm cuối của trang mà không có class .scale-up-bl
    if (rect.top < height) {
      product.classList.add("scale-up-bl");
    }
  });
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
    // Lặp qua tất cả các .product
    productsHtml.forEach(function (product) {
      // Lấy vị trí của .product so với cửa sổ xem
      var rect = product.getBoundingClientRect();
      // Lấy chiều cao của cửa sổ
      var height = window.innerHeight;
      // Nếu .product đi qua điểm cuối của trang mà không có class .scale-up-bl
      if (
        rect.top <= height &&
        !product.classList.contains("scale-up-bl")
      ) {
        // Thêm class .scale-up-bl cho .product
        product.classList.add("scale-up-bl");
      } else if (
        rect.top > height &&
        product.classList.contains("scale-up-bl")
      ) {
        // Nếu điểm đầu của sản phẩm đã đi qua điểm cuối của trang mà có chứa class .scale-up-bl
        // Xóa class .scale-up-bl cho .product
        product.classList.remove("scale-up-bl");
      }
    });
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
              nav.checked = false;
            }
            var items = document.querySelectorAll(
              ".drop-down .drop-down--items"
            );

            for (var i = 0; i < items.length; i++) {
              items[i].style.display = "none";
            }
          } else {
            if (link.nextElementSibling != null) {
              link.nextElementSibling.style.display = "flex";
            } else {
              let target = document.getElementById(uri.slice(1));
              // get the header element height
              let headerHeight = document.querySelector("header").offsetHeight;
              // scroll to the target element smoothly with padding top by header height
              window.scrollTo({
                top: target.offsetTop - headerHeight - 15,
                behavior: "smooth",
              });

              if (nav.checked) {
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

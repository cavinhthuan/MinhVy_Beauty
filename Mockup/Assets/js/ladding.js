import { products } from "/Assets/js/_data.js";
import Swiper from "/node_modules/swiper/swiper-bundle.esm.browser.min.js";
const banner = new Swiper("#banner", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletClass: 'swiper-pagination-bullet',
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slide--next",
    prevEl: ".slide--prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});
const bloger = new Swiper("#bloger", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slide--next",
    prevEl: ".slide--prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});

function createProductElement(product) {
  // Tạo một thẻ div có class là product
  let productDiv = document.createElement("div");
  productDiv.className = "product";

  // Tạo một thẻ div có class là product-image và chứa một thẻ img
  let productImageDiv = document.createElement("div");
  productImageDiv.className = "product-image";
  let productImage = document.createElement("img");
  productImage.src = "/Assets/image/" + product.thumnal;
  productImage.alt = product.name;
  var link = document.createElement("a");
  link.href = product.page
  link.textContent = "Xem Thêm";
  productImageDiv.appendChild(productImage);
  productImageDiv.appendChild(link);

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

      section.prepend(productElement);
    }
  }
}
// Gọi hàm để thêm các sản phẩm vào các catalog tương ứng
function notiGroupProductsEmpty() {
  // select all the .group-products elements
  let groups = document.querySelectorAll(".group-products");
  // loop through each group
  for (var i = 0; i < groups.length; i++) {
    // check if it has any .product element inside
    var hasProduct = groups[i].querySelector(".product") !== null;
    // if not, add the .group-products-empty class
    if (!hasProduct) {
      groups[i].classList.add("group-products-empty");
    }

    var checkbox = groups[i].querySelector(
      ".view-more > input[type='checkbox']"
    );
    // add an event listener for the change event
    checkbox.addEventListener("change", function () {
      // check if the checkbox is checked
      if (this.checked) {
        // add the .show-more class to the group
        this.closest(".group-products").classList.add("show-more");
      } else {
        // remove the .show-more class from the group
        this.closest(".group-products").classList.remove("show-more");
      }
    });
  }
}

window.addEventListener("load", function () {
  
  let productsHtml = document.querySelectorAll(".product");
  let groupProducts = document.querySelectorAll(".group-products");

  

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
  window.addEventListener("scroll", function () {
    productsHtml.forEach(function (product) {
      // Lấy vị trí của .product so với cửa sổ xem
      var rect = product.getBoundingClientRect();
      // Lấy chiều cao của cửa sổ
      var height = window.innerHeight;
      // Nếu .product đi qua điểm cuối của trang mà không có class .scale-up-bl
      if (rect.top <= height && !product.classList.contains("scale-up-bl")) {
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
});
//window on scroll

appendProductsToCatalogs(products);
notiGroupProductsEmpty();

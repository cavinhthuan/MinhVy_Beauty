
// Lấy phần tử input#search-bar và a#search-icon
let searchBar = document.querySelector("input#search-bar");
let searchIcon = document.querySelector("a#search-icon");
let searchBox = document.querySelector("form#search-box");
let searchResult = document.querySelector("#search-result");
// import MiniSearch  from "/node_modules/minisearch/dist/umd/index.js";
// A collection of documents for our examples
export const minisearch = function (documents) {
  let miniSearch = new MiniSearch({
    fields: ["name"], // fields to index for full-text search
    storeFields: ["name", "thumnal"], // fields to return with search results
  });
  miniSearch.addAll(documents);
  function searchAndDisplay() {
  // Lấy giá trị từ input#search-bar
  let query = searchBar.value;

  // Nếu query không rỗng thì tiến hành tìm kiếm
  if (query) {
    // Dùng miniSearch.search để tìm kiếm
    let results = miniSearch.search(query);

    // Xóa nội dung cũ của #search-result
    searchResult.innerHTML = " ";

    // Duyệt qua từng result trong results
    for (let result of results) {
      // Tạo một phần tử div có class là search-result-item
      let item = document.createElement("div");
      item.className = "search-result-item";

      // Tạo các phần tử con cho item
      let img = document.createElement("img");
      img.src = "Assets/image/" + result.thumnal;
      img.className = "thumnal";

      let productName = document.createElement("div");
      productName.className = "productName";
      productName.textContent = result.name;

      let navigate = document.createElement("a");
      navigate.href = result.page;
      navigate.className = "navigate";

      let icon = document.createElement("i");
      icon.className = "fa-solid fa-expand";

      // Thêm các phần tử con vào item
      navigate.appendChild(icon);
      item.appendChild(img);
      item.appendChild(productName);
      item.appendChild(navigate);

      // Thêm item vào #search-result
      searchResult.appendChild(item);
    }
  }
}

// Index all documents


// Hàm để thực hiện tìm kiếm và hiển thị kết quả

// Thêm sự kiện khi người dùng nhấn chuột vào bất kỳ đâu trên trang
document.addEventListener("click", function (event) {
  // Lấy đối tượng được focus
  let target = event.target;

  // Kiểm tra xem đối tượng được focus có phải là searchBar hoặc searchResult hoặc con của searchResult không
  if (
    target !== searchBar &&
    target !== searchResult &&
    !searchResult.contains(target) &&
    target !== searchIcon &&
    !searchIcon.contains(target)
  ) {
    // Nếu không thì xóa bỏ tất cả kết quả
    searchResult.innerHTML = "";
  }
});

// Thêm sự kiện khi người dùng nhập thông tin vào input#search-bar
searchBar.addEventListener("input", searchAndDisplay);

// Thêm sự kiện khi người dùng nhấn vào a#search-icon
searchIcon.addEventListener("click", function (event) {
  event.preventDefault();
  searchAndDisplay();
});
searchBox.addEventListener("submit", function (event) {
  // Hủy bỏ hành động mặc định của form
  event.preventDefault();

  // Gọi hàm tìm kiếm và hiển thị kết quả
  searchAndDisplay();
});

  return searchAndDisplay;
};

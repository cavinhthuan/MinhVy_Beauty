// cart.js file
// define a function that updates the #cart-count element
// pass the cart object as a parameter
function updateCartCount(cart) {
  // get the #cart-count element
  let cartCount = document.getElementById("cart-count");
  // get the total number of products in the cart
  let totalProducts = cart.getTotalProducts();
  // set the text content of the #cart-count element to the total number of products
  cartCount.textContent = totalProducts;
}

// create a class Cart
class Cart {
  // initialize an empty array of products or get the existing one from the local storage
  constructor() {
    this.products = JSON.parse(localStorage.getItem("products")) || [];
    updateCartCount(this);
  }

  // add a product with id and quantity to the cart
  addProduct(id, quantity) {
    // check if the product already exists in the cart
    let product = this.products.find(p => p.id === id);
    if (product) {
      // if yes, increase the quantity by the given amount
      product.quantity += quantity;
    } else {
      // if no, create a new product object and push it to the array
      product = { id, quantity };
      this.products.push(product);
    }
    // store the products array in the local storage as a string
    localStorage.setItem("products", JSON.stringify(this.products));
    // update the cart count
    // pass this as a parameter to refer to the current cart object
    updateCartCount(this);
  }

  // remove a product with id and quantity from the cart
  removeProduct(id, quantity) {
    // check if the product exists in the cart
    let product = this.products.find(p => p.id === id);
    if (product) {
      // if yes, decrease the quantity by the given amount
      product.quantity -= quantity;
      // if the quantity becomes zero or negative, remove the product from the array
      if (product.quantity <= 0) {
        this.products = this.products.filter(p => p.id !== id);
      }
    } else {
      // if no, do nothing or throw an error
      console.log("Product not found in the cart");
    }
    // store the products array in the local storage as a string
    localStorage.setItem("products", JSON.stringify(this.products));
    // update the cart count
    // pass this as a parameter to refer to the current cart object
    updateCartCount(this);
  }

  // get the total number of products in the cart
  getTotalProducts() {
    // use reduce to sum up the quantities of all products
    return this.products.reduce((total, product) => total + product.quantity, 0);
  }

  // get the total price of products in the cart
  getTotalPrice() {
    // use reduce to sum up the prices of all products
    // assume that each product has a price property
    return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
  }
}

// export the Cart class as a default export
export default Cart;

import { getLocalStorage, setLocalStorage } from "./utils.mjs"; //I add the getLocalStorage
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

const cartItems = getLocalStorage("so-cart") || []; //Get products currently in cart, if empty initilize an array

function addProductToCart(product) {
  cartItems.push(product); //Adding products to the cart
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

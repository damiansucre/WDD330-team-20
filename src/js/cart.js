import { loadHeaderFooter } from "./utils.mjs";
//import { getLocalStorage, getNumFromCart } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

/* function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  //New code I just added condicional start
  if (cartItems != null){
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  //New code I just added condicional end
  //New code Start
    const totalPrice = cartItems.reduce(
      (a, {FinalPrice}) => a + FinalPrice, 0);
    document.getElementById("totalPrice").innerHTML = totalPriceTemplate(totalPrice);
  }
  //New code end
} 

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

//New code start
function totalPriceTemplate(price) {
  return `<h3 class="total-price-label-color">Total: <span class="total-price-color">$${price}</span></h3>`;
}
//New code End */

const cart = new ShoppingCart(".product-list");

loadHeaderFooter();

cart.renderCartContents();

//renderCartContents();
//calling new function
//getNumFromCart();

import { getLocalStorage } from "./utils.mjs";

export default class ShoppingCart {
    
    constructor(parentSelector) {
        this.parentSelector = parentSelector
    }

    totalPriceTemplate(price) {
        return `<h4 class="total-price-label-color">Total: <span class="total-price-color">$${price}</span></h3>`;
      }

    renderCartContents() {
        const cartItems = getLocalStorage("so-cart");
        if (cartItems != null) {
          const htmlItems = cartItems.map((item) => this.cartItemTemplate(item));
          document.querySelector(".product-list").innerHTML = htmlItems.join("");
      
          // Calculate total price of items
          const totalPrice = cartItems.reduce(
            (a, { FinalPrice }) => a + FinalPrice,
            0
          );
          console.log(totalPrice);
          document.getElementById("totalPrice").innerHTML =
            this.totalPriceTemplate(totalPrice);
        }
    }

        cartItemTemplate(item) {
            return `<li>
            <div class="cart-card divider">
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
        }
}
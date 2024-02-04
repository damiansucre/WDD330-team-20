import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ShoppingCart {
    
    constructor(parentSelector) {
        this.parentSelector = parentSelector
    }

    totalPriceTemplate(price) {
        return `<h4 class="total-price-label-color">Total: <span class="total-price-color">$${price}</span></h3>`;
      }

    removeFromCart() {
      const element = document.querySelectorAll(".cartItem");
      element.forEach(item => {
        const remove = document.createElement("p")
        remove.classList.add("removeBtn");
        remove.innerHTML = `<span>X</span>`;
        item.appendChild(remove);

        remove.addEventListener("click", function (e) {
          if (e.target.tagName == "SPAN") {
            const cartId = item.id;
            item.remove();
            let cart = getLocalStorage("so-cart");
            let newCart = [];

            cart.forEach(cartItem => {
              if (cartItem.Id !== cartId) {
                newCart.push(cartItem);
              }
            })
            setLocalStorage("so-cart", newCart)
            document.querySelector(".cart-num").innerHTML = getLocalStorage("so-cart").length;
            
            cart = getLocalStorage("so-cart")
            const totalPrice = cart.reduce(
              (a, { FinalPrice }) => a + FinalPrice,
              0
            );
            document.querySelector(".total-price-color").innerHTML = `$${totalPrice}`
          }}
      )}
    )}

    renderCartContents() {
        const cartItems = getLocalStorage("so-cart");
        if (cartItems != null) {
          const htmlItems = cartItems.map((item) => this.cartItemTemplate(item));
          document.querySelector(".product-list").innerHTML = htmlItems.join("");
          
          this.removeFromCart();
          // Calculate total price of items
          const totalPrice = cartItems.reduce(
            (a, { FinalPrice }) => a + FinalPrice,
            0
          );
          document.getElementById("totalPrice").innerHTML =
            this.totalPriceTemplate(totalPrice);
        }
    }

        cartItemTemplate(item) {
            return `<li id="${item.Id}" class="cartItem">
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
            <p class="cart-card__quantity">qty: ${item.quantity}</p>
            <p class="cart-card__price">$${item.FinalPrice}</p>
          </li>`;
        }
}
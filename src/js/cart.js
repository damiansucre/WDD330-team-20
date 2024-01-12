import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItem = getLocalStorage("so-cart");

  if (cartItem) {
    // Renderizar el carrito
    const htmlItem = cartItemTemplate(cartItem);
    document.querySelector(".product-list").innerHTML = htmlItem;
  } else {
    // Carrito vacío o no es un objeto, manejar según sea necesario
    document.querySelector(".product-list").innerHTML = "<p>El carrito está vacío.</p>";
    console.log("El carrito está vacío o no es un objeto");
  }
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

renderCartContents();

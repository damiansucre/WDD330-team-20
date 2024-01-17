import { getLocalStorage, setLocalStorage, getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParams("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// Función para agregar un producto al carrito
// eslint-disable-next-line no-shadow
function addProductToCart(product) {
  // Obtener el carrito actual del almacenamiento local
  let cartItems = getLocalStorage("so-cart") || [];

  // Asegurarse de que cartItems sea un array
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }

  // Agregar el nuevo producto al carrito
  cartItems.push(product);

  // Guardar el carrito actualizado en el almacenamiento local
  setLocalStorage("so-cart", cartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const selectedProduct = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(selectedProduct);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

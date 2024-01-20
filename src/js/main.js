import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { getNumFromCart } from "./utils.mjs";

const dataSource = new ProductData("tents");
const list = new ProductListing(
  "tents",
  dataSource,
  document.querySelector(".product-list")
);

list.init();
getNumFromCart();

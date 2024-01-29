import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
//new code
import { loadHeaderFooter } from "./utils.mjs";

const dataSource = new ProductData("tents");
const list = new ProductListing(
  "Tents",
  dataSource,
  document.querySelector(".product-list")
);

list.init();
//new code
loadHeaderFooter();

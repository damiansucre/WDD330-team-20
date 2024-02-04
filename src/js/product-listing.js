/* import ProductData from "./ProductData.mjs";
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
loadHeaderFooter();  */

import { loadHeaderFooter, getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ExternalServices(category);
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();

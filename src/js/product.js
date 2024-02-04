import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

const dataSource = new ExternalServices("tents");
const productId = getParam("product");
const list = new ProductDetails(productId, dataSource);

list.init();
loadHeaderFooter();

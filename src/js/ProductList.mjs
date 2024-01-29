import { renderListWithTemplate } from "./utils.mjs";

export default class ProductListing {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.list = {};
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    this.list = await this.dataSource.getData();
    // render the list
    this.renderList(this.list);
  }

  productCardTemplate(product) {
    return `<li class="product-card">
            <a href="product_pages/index.html?product=${product.Id}">
            <img src="${product.Image}" alt="Image of ${product.Name}"/>
            <div class="badge-overlay">
            <span class="top-right badge">Sale</span></div>
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.NameWithoutBrand}</h2>
            <p class="product-card__price"><span class="product-card__discount">$${product.SuggestedRetailPrice} </span>$${product.FinalPrice}</p></a>
  </li>`;
  }
  // render after doing the first stretch
  renderList(list) {
    renderListWithTemplate(this.productCardTemplate, this.listElement, this.filterProducts(list));
  }
  filterProducts(list){
    let filteredList = list.filter((tent) => tent.FinalPrice != "179.99");
    return filteredList;
  }
}

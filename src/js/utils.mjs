// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}


export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);

  return product;
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  if (clear) {
    parentElement.textContent = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(template, parentElement, data = {}, position = "afterbegin"){
  parentElement.insertAdjacentHTML(position,template);
}

//New code start
export async function loadHeaderFooter(){
  const header = await loadTemplate("../partials/header.html")
  const footer = await loadTemplate("../partials/footer.html")

  const headerElement = document.getElementById("main-header")
  const footerElement = document.getElementById("main-footer")

  renderWithTemplate(header, headerElement)
  renderWithTemplate(footer, footerElement)

  getNumFromCart()
}

async function loadTemplate(path){
  let html = await fetch(path)
  const template = await html.text()
  return template
}

export function getNumFromCart() {
  let num = "";
  const list = getLocalStorage("so-cart");
  if (list != null) {
    num = list.length;
  }
  document.querySelector(".cart-num").innerHTML = num;
}

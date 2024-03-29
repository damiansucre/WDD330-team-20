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

// pass parameters through the url
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);

  return product;
}
// takes a template, html element and a JS list. It then adds those
// list items to the html element using the template.
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

// takes a template, html element and a JS list. It then adds those
// list items to the html element using the template.
export function renderWithTemplate(template, parentElement, data = {}, position = "afterbegin") {
  parentElement.insertAdjacentHTML(position, template);
  //if (callback) {
  //  callback(data)
  //}
}

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

export function alertMessage(message, scroll = true) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  if (scroll) window.scrollTo(0, 0);
}

export function removeAlerts() {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => document.querySelector("main").removeChild(alert))
}
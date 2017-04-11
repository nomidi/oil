import "./oil.scss";
import { isDOMElement, addClickHandler } from './scripts/utils.js';
import { findConfiguration } from "./scripts/config";

// Dummy state variable to contain optin state
window.oil = {
  optin: false
};


/**
 * Returns html content for our OIL overlay
 */
function defineOilContent() {
  return (
    `
      <h1 class="oil__heading">
        Axel Springer Optin Layer
      </h1>
      <p class="oil__intro-text">
        Hi, this is a little intro text.
      </p>
      <button class="oil__button oil__button--primary js-optin">
        Yes, I want!
      </button>
      <button class="oil__button oil__button--secondary js-optlater">
        Not now
      </button>
    `
  );
}


/**
 * Injects OIL into DOM at entry point
 */
function injectOil(entryPoint) {
  if (isDOMElement(entryPoint)) {
    // Create overlay container
    const oil = document.createElement('div');
    oil.setAttribute('class', 'oil');
    // Add overlay content
    oil.innerHTML = defineOilContent();
    // Add to DOM
    entryPoint.appendChild(oil);
  }
}


/**
 * Add click handler
 */
function addOilClickHandler() {
  const btnOptIn = document.getElementsByClassName('js-optin')[0];
  const btnOptLater = document.getElementsByClassName('js-optlater')[0];
  addClickHandler(btnOptIn, () => {
    console.log("Optin")
    window.oil.optin = true;
    injectTealium();
  });
  addClickHandler(btnOptLater, () => console.log("OptLater"));
}


/**
 * Inject Tealium 
 */
function injectTealium() {
  if (typeof(utag) === 'undefined') {
    window.utag_data = {};
    let a='//tags.tiqcdn.com/utag/axelspringer/lib-dip-optin/prod/utag.js';
    let b=document;
    let c='script';
    let d=b.createElement(c);
    d.src=a;
    d.type='text/java'+c;
    d.async=true;
    a=b.getElementsByTagName(c)[0];
    a.parentNode.insertBefore(d,a);
  }
}

/**
 * Init OIL
 */
(function(){
  injectOil(document.body);
  addOilClickHandler();
  findConfiguration();
}());
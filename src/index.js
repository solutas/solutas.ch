import "@babel/polyfill";
import "./scss/index.scss";
import "@fortawesome/fontawesome-free/js/all";

import Navbar from "./plugins/navbar";
import Hero from "./plugins/hero";
import CoverImage from "./plugins/coverImage";
import ContactForm from "./plugins/ContactForm";

class Pages {
  constructor() {
    try {
      ga("create", "UA-147508305-1", "auto");
    } catch (e) {}
    new Navbar("navbar");
    new Hero("site-header");
    new CoverImage("senol");

    let forms = document.getElementsByClassName("contact-form");
    for (let form of forms) {
      new ContactForm(form);
    }
  }
}

//const document = window.document || {};
document.addEventListener("DOMContentLoaded", () =>
  window.setTimeout(() => new Pages(), 200)
);

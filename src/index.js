import "@babel/polyfill";
import "./scss/index.scss";
import "@fortawesome/fontawesome-free/js/all";

import Navbar from "./plugins/navbar";
import Hero from "./plugins/hero";
import CoverImage from "./plugins/coverImage";
import ContactForm from "./plugins/ContactForm";

class Pages {
  constructor() {

    // ca=1 == website
    //ca=3 custom app
    const mobileApp = location.href.indexOf("ca=0") != -1;
    const website = location.href.indexOf("ca=1") != -1;
    const customApp = location.href.indexOf("ca=2") != -1;
    let maintitle = null;
    let subtitle = null;
    
    if(mobileApp) {
        maintitle ="Wir bauen Ihre Mobile App!";
        subtitle = "Ihr Partner auf dem Weg in die Zukunft";
        window.localStorage.setItem("source", "gmobileapp");
    }

    if(website) {
      maintitle ="Wir erstellen Ihre Website!";
      subtitle = "Ihr Partner auf dem Weg in die Zukunft";
      window.localStorage.setItem("source", "gwebsite");
    }
    if(customApp) {
      maintitle = "Wir erstellen Ihre Individual Software!";
      subtitle = "Because Simplicity Matters, Ihr Partner auf dem Weg in die Zukunft.";
      window.localStorage.setItem("source", "gcustomapp");
    }
    if(maintitle !== null && subtitle !== null) {
      document.querySelector(".site-header .title").innerHTML = maintitle;
      document.querySelector(".site-header .subtitle").innerHTML = subtitle;
    }


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

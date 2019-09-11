import "@babel/polyfill";
import "./scss/index.scss";
import '@fortawesome/fontawesome-free/js/all';

import Navbar from "./plugins/navbar";
import Hero from "./plugins/hero";
import CoverImage from "./plugins/coverImage";
import ContactForm from "./plugins/ContactForm";


class Pages {
    constructor() {
        //this.doAlert();
        new Navbar("navbar");
        new Hero("site-header");
        new CoverImage("senol");

        let forms = document.getElementsByClassName("contact-form");
        for(let form of forms) {
            new ContactForm(form);
        }
    }
    
    doAlert() {
        alert("done");
    }
}

//const document = window.document || {};
document.addEventListener("DOMContentLoaded", ()=> new Pages());

import "./scss/index.scss";

import Navbar from "./plugins/navbar";
import Hero from "./plugins/hero";
import CoverImage from "./plugins/coverImage";

class Pages {
    constructor() {
        //this.doAlert();
        new Navbar("navbar");
        new Hero("site-header");
        new CoverImage("senol");
    }
    
    doAlert() {
        alert("done");
    }
}

//const document = window.document || {};
document.addEventListener("DOMContentLoaded", ()=> new Pages());

import axios from "axios";

const ENDPOINT = "/wp-json/solutas/v1/contact";

class ContactForm {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init = () => {
    console.log("CONTACT FORM");

    console.log(this.container);
    this.form = this.container.querySelector(".form");
    this.card = this.container;
    this.success = this.container.querySelector(".success");
    this.error = this.container.querySelector(".error");
    
    let close = document.createElement("a");
    close.classList.add("delete");
    close.classList.add("is-hidden-tablet");

    close.addEventListener("click", ()=>this.error.classList.add("is-hidden"));
    this.error.querySelector(".message").prepend(close);

    this.form.onsubmit = this.publishForm;
  };

  disableAllFields = (disabled = false)=>{
    [...this.form.elements].forEach(input => {
      input.disabled = disabled;
    });
  }

  publishForm = async e => {
    e.preventDefault();

    let data = {};

    [...this.form.elements].forEach(input => {
      if (input.type !== "submit") {
        data[input.name || input.id] = input.value;
      }
    });

    if (!this.error.classList.contains("is-hidden"))
        this.error.classList.add("is-hidden");

    this.container.classList.add("loading");
    this.disableAllFields(true);
    this.form.classList.remove("success");
    try {
      let response = await axios.post("/wp-json/solutas/v1/contact", {
        ...data
      });
      this.container.classList.remove("loading");
      this.success.classList.remove("is-hidden");
      this.form.classList.add("is-hidden");
  
    } catch (e) {
      this.error.classList.remove("is-hidden");
      this.container.classList.remove("loading");
    }
    this.disableAllFields(false);

    return false;
  };
}

export default ContactForm;

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
    console.log(this.card);

    this.form.onsubmit = this.publishForm;
  };

  publishForm = async e => {
    e.preventDefault();
    
    
    let data = {};
        
    [...this.form.elements].forEach(input=>{
        if(input.type !== "submit") {        
            data[input.name|| input.id] = input.value;
        }
        
    })

console.log("add laoding calss to the form");
console.log(this.card);
console.log("done with it");
  this.form.classList.add("loading");
  this.form.classList.remove("success");
console.log(this.form);
    try {
    let response = await axios.post("/wp-json/solutas/v1/contact",{
      ...data
    });

    }catch(e) {
        console.log(e);
    }
    console.log("this.form.parent");
    console.log(this.card);

    //this.card.classList.add("success");
    this.form.classList.remove("loading");
    this.success.classList.remove("is-hidden");
    this.form.classList.add("is-hidden");
    return false;
  };
}

export default ContactForm;

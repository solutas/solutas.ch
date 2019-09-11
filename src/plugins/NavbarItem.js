class NavbarItem {
  constructor(item) {
    this.item = item;
    let target = item.dataset.navigationTarget;
    if (!target) {
      this.target = 0;
    } else {
      this.target = document.getElementById(target);
    }
    this.calculatePosition();
    this.item.addEventListener("click", e => {
      e.preventDefault();
      this.scroll();
      return false;
    });
    window.addEventListener("resize", this.calculatePosition); 

    this.active = false;
    window.addEventListener('scroll', this.calculateTop);
  }

  calculateTop = ()=> {
      if(window.scrollY >= this.position.top  && window.scrollY <= this.position.bottom){
          if(!this.active) {
              this.active = true;
              if(!this.item.dataset.noactive)
                this.item.classList.add("is-active");
             // var stateObj = { foo: "bar" };
             // history.pushState(stateObj, "page 2", "" + (this.target.id ? this.target.id : "/"));
          }           
      } else {
          if(this.active) {
              this.active = false;
             this.item.classList.remove("is-active");
          }
      }
      
  }

  calculatePosition = () => {
      let top = this.target ? this.target.getBoundingClientRect().top  : 0;
      let bottom = top + (this.target ? this.target.getBoundingClientRect().height : 0);

    this.position = {
      top,
      bottom        
    };
    console.log(this.position);
  };

  scroll = e => {
    window.scrollTo({
      top: this.position.top,
      left: window.scrollX,
      behavior: "smooth"
    });
    return false;
  };
}

export default NavbarItem;

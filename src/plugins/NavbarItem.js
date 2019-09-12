class NavbarItem {
  constructor(item, topNav = true) {
    this.supportSmoothScroll =
      "scrollBehavior" in document.documentElement.style;

    this.item = item;

    let target =  topNav ? item.dataset.navigationTarget : item.getAttribute("href").replace("/#", "").replace("#", "");

    if(!topNav) {

      this.item.setAttribute("data-noactive", true);
    }

    if (!target) {
      this.target = 0;
    } else {
      this.target = document.getElementById(target);
    }
    this.calculatePosition();
    this.item.addEventListener("click", e => {
      e.preventDefault();      
      this.scroll();
      ga('send', 'event', 'ClickNavigation', this.item.id);

      return false;
    });
    window.addEventListener("resize", this.calculatePosition);

    this.active = false;
    window.addEventListener("scroll", this.calculateTop);
  }

  calculateTop = () => {
    if (
      window.scrollY >= this.position.top &&
      window.scrollY <= this.position.bottom
    ) {
      if (!this.active) {
        this.active = true;
        if (!this.item.dataset.noactive) {
          this.item.classList.add("is-active");
        }
        // var stateObj = { foo: "bar" };

        history.pushState(
          {},
          "page",
          (this.target && this.target.id ? "/#"+this.target.id : "")
        );
        ga('send', 'pageview', this.target && this.target.id ? this.target.id : "homepage");
      }
    } else {
      if (this.active) {
        this.active = false;
        this.item.classList.remove("is-active");
      }
    }
  };

  calculatePosition = () => {
    window.requestAnimationFrame(() => {
      let top = this.target ? this.target.getBoundingClientRect().top : 0;
      let bottom =
        top + (this.target ? this.target.getBoundingClientRect().height : 0);

      this.position = {
        top,
        bottom
      };
    });
  };

  scroll = e => {
    if (this.supportSmoothScroll) {
      window.scrollTo({
        top: this.position.top,
        left: window.scrollX,
        behavior: "smooth"
      });
    } else {
      window.scrollTo(window.scrollX, this.position.top);
    }
    return false;
  };
}

export default NavbarItem;

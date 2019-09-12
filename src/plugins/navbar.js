import NavbarItem from "./NavbarItem";

/**
 * Navbar - bulma navigation
 */
class Navbar {
  constructor(className) {
    this.className = className;
    this.top = true;
    this.showMenu = false;
    this.init();
  }

  init() {
    this.navbarElement = document.getElementsByClassName(this.className);
    this.navItems = document.getElementsByClassName("scroll-navigation");
    this.outerLinks = document.querySelectorAll("a[href*='#/']");
    
    
    this.phoneLinks = document.querySelectorAll("a[href*='tel']");

    [...this.phoneLinks].forEach((item)=>{
      item.addEventListener("click", ()=>{
        ga('send', 'event', {
          eventCategory: 'ContactForm',
          eventAction: 'click phone link',
          eventLabel: "PhoneLink"
        });
      })
    });
    
    this.calculateTop();
    window.addEventListener("scroll", this.calculateTop);
    this.attachHamburgerMenu();
    this.attachAutoScroll();
    
  }

  attachAutoScroll = () => {
    for (let item of this.navItems) {
      new NavbarItem(item);
    }

    [...this.outerLinks].forEach((item)=>new NavbarItem(item, false));
    
  };
  attachHamburgerMenu = () => {
    for (let item of this.navbarElement) {
      let hamburgerItems = item.getElementsByClassName("navbar-burger");
      for (let burgerItem of hamburgerItems) {
        let target = burgerItem.dataset.target;
        let targetMenu = document.getElementById(target);
        let container = item.parentElement;
        burgerItem.addEventListener("click", () =>
          this.toggleIsActiveMenu(targetMenu, burgerItem, container)
        );
      }
    }
  };

  toggleIsActiveMenu = (targetMenu, activator, container) => {
    window.requestAnimationFrame(() => {
      targetMenu.classList.toggle("is-active");
      activator.classList.toggle("is-active");
      container.classList.toggle("hamburger-is-active");
    });
  };

  calculateTop = () => {
    window.requestAnimationFrame(() => {
      let scrollPosition = window.scrollY;
      let showShadow = scrollPosition > 20;
      if (showShadow) {
        this.toggleTop(false);
        this.top = false;
      } else if (!showShadow) {
        this.toggleTop(true);
        this.top = true;
      }
    });
  };

  toggleTop(top = true) {
    for (let item of this.navbarElement) {
      if (top) {
        item.parentElement.classList.add("is-top");
      } else {
        item.parentElement.classList.remove("is-top");
      }
    }
  }
}

export default Navbar;

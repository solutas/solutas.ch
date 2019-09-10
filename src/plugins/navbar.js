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
        this.calculateTop();
        window.addEventListener('scroll', this.calculateTop);
        this.attachHamburgerMenu();
        this.navItems = document.getElementsByClassName("scroll-navigation");
        this.attachAutoScroll();
    }

    attachAutoScroll = ()=> {
        console.log("attah scoroalsdf");
        for(let item of this.navItems) {
            new NavbarItem(item);
        }
    }
    attachHamburgerMenu = () => {
        for(let item of this.navbarElement) {
            let hamburgerItems = item.getElementsByClassName("navbar-burger");
            for(let burgerItem of hamburgerItems) {
                let target = burgerItem.dataset.target;
                let targetMenu = document.getElementById(target);
                burgerItem.addEventListener("click", ()=>this.toggleIsActiveMenu(targetMenu, burgerItem));
            }
        }
    }

    toggleIsActiveMenu = (targetMenu, activator) => {
            targetMenu.classList.toggle("is-active")
            activator.classList.toggle("is-active")
    }

    calculateTop = ()=> {
        let scrollPosition = window.scrollY;          
        let showShadow = scrollPosition > 20;
        if (showShadow) {
          window.requestAnimationFrame(()=> {
            this.toggleTop(false);
            this.top = false
          });                
        } else if(!showShadow){
            window.requestAnimationFrame(()=> {
                this.toggleTop(true);
                this.top = true;
              });                    
        }
    }

    toggleTop(top=true) {
        for(let item of this.navbarElement) {
            if(top) {
                item.classList.add("is-top");
            } else {
                item.classList.remove("is-top");
            }
        }
    }
}

export default Navbar;
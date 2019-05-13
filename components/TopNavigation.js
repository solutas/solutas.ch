import React from "react";
import Header from "./Header";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Icon from "../assets/solutas-brief-weiss.png";
import Icon2 from "../assets/solutas-icon.png";
import eventService from "../services/ScrollEventService";

// color1="#4b6bb7ed" color2="#182848e5" color=""

export default class TopNavigation extends React.Component {
  offsetTop = 0;
  elementHeight = 0;
  highlight = false;

  constructor(props) {
    super(props);
    this.navigationElement = React.createRef();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      highlight: false
    };
  }

  handleScrollEvent = event => {
    this.offsetTop = window.pageYOffset;
    this.calculateNav();
  };

  calculateNav = () => {
    if (this.offsetTop >= this.elementHeight && !this.highlight) {
      this.setState({
        highlight: true
      });
      this.highlight = true;
      eventService.emmit({
        subject: "TOPNAV_CHANGE",
        status: true
      });
    } else if (this.offsetTop < this.elementHeight && this.highlight) {
      this.setState({
        highlight: false
      });
      this.highlight = false;
      eventService.emmit({
        subject: "TOPNAV_CHANGE",
        status: false
      });
    }
  };
  updateElementHeight = () => {
    if (this.navigationElement)
      this.elementHeight =
        this.navigationElement.offsetHeight + 50;
  };
  componentDidMount() {
    this.updateElementHeight();
    window.addEventListener("scroll", this.handleScrollEvent);
    window.addEventListener("resize", this.updateElementHeight);
    this.offsetTop = this.navigationElement.offsetTop;
  }

  componentWillUnmount() {
    window.removeEventListener(this.handleScrollEvent);
    window.removeEventListener(this.updateElementHeight);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div
        ref={ref => (this.navigationElement = ref)}
        className={
          this.state.highlight
            ? "fixed-top navactive brandnav"
            : "fixed-top brandnav"
        }
      >
        <Navbar
          color={this.state.highlight ? "primary" : "none"}
          expand="md"
          className="TopNavigation md-auto"
        >
          <NavbarBrand href="/">
            <img src={Icon2} className="logoicon" /> 
          </NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>         
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About Us </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Custom Development
                </NavLink>
              </NavItem>              
              <NavItem>
                <NavLink href="/components/">Our Services</NavLink>
              </NavItem>

            </Nav>
          </Collapse> 
        </Navbar>
        <style jsx>{`
          .bg-solutas {
            background-color: r;
          }
        `}</style>
      </div>
    );
  }
}

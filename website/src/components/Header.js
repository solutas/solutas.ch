import React from "react"
import Link from "gatsby-link"
import SelectLanguage from "./SelectLanguage"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"
import IntlLink from "./IntlLink"
import { FormattedMessage } from "react-intl"
import useScroll from "../hooks/scroll"

import Logo from "../assets/sol-regular-icon.svg"
import LogoWhite from "../assets/solutas-icon-white.svg"
import Wave from "../assets/wave.svg"

const Header = props => {
  let scroll = useScroll(56)

  //<!Wave className={scroll ? 'waved' : 'waved hide'}/>
  return <header className="top-header">
    <IntlLink to="/" className="navbar-brand mr-2 ml-2">
      <LogoWhite className="solutas-icon" />
    </IntlLink>
  </header>
}
export default Header

/*
<Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
    <IntlLink to="/" className="navbar-brand mr-2 ml-2">
      <LogoWhite className="solutas-icon" />
    </IntlLink>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-2 ml-auto">
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
        <SelectLanguage langs={props.langs} />
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  <Navbar bg={scroll ? 'primary' : 'brown'}  variant={scroll ? 'dark' : 'dark'} fixed="top" expand="lg">
    <IntlLink to="/" className="navbar-brand"> 
      {scroll ? <LogoWhite className="solutas-icon"/> : <LogoWhite className="solutas-icon"/>  }
    </IntlLink>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav>
      <Nav.Link href="#home" className={scroll  ? 'sol-btnd' : null}>Who we are</Nav.Link>
      <Nav.Link href="#features" className={scroll  ? 'sol-btnd' : null}>What we do</Nav.Link>
      <Nav.Link href="#pricing" className={scroll  ? 'sol-btnd' : null}>Why we do</Nav.Link>
      <Nav.Link href="#pricing" className={scroll  ? 'sol-btnd' : null}>Get in touch</Nav.Link>
      
    </Nav>
      {/*
      <SelectLanguage langs={props.langs} />
      <SelectLanguage langs={props.langs} />
      <IntlLink to="/profile/settings">Profile</IntlLink>

      <IntlLink to="/terms">
        <FormattedMessage id="termsandconditionlink" />
      </IntlLink>
      </Navbar.Collapse>
    
      </Navbar>
  */

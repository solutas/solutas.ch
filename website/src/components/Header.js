import React from "react"
import Link from "gatsby-link"
import SelectLanguage from "./SelectLanguage"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import IntlLink from "./IntlLink"
import { FormattedMessage } from "react-intl"

const Header = props => (
  <Navbar bg="brand" variant="dark" fixed="top">
    <IntlLink to="/" className="navbar-brand">
      <img src={require("../assets/solutas-icon-white.svg")} height="25" />
    </IntlLink>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Who we are</Nav.Link>
      <Nav.Link href="#features">What we do</Nav.Link>
      <Nav.Link href="#pricing">Why we do</Nav.Link>
      <Nav.Link href="#pricing">Get in touch</Nav.Link>
      <SelectLanguage langs={props.langs} />
    </Nav>
      {/*<SelectLanguage langs={props.langs} />
      <IntlLink to="/profile/settings">Profile</IntlLink>

      <IntlLink to="/terms">
        <FormattedMessage id="termsandconditionlink" />
      </IntlLink>*/}
    
  </Navbar>
)

export default Header

import React, { useState } from "react"
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

const Header = ({ menuLinks }) => {
  let scroll = useScroll(65)
  let [navOpen, setNavOpen] = useState(false)

  //<!Wave className={scroll ? 'waved' : 'waved hide'}/>
  return (
    <header
      className={scroll ? "top-header" : "top-header top-header--scrolled"}
    >
      <IntlLink to="/" className="navbar-brand mr-2">
        <svg
          height="30px"
          className="solutas-icon"
          viewBox="0 0 30 31"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-2"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Artboard-Copy"
              transform="translate(-585.000000, -394.000000)"
            >
              <g id="Group-6" transform="translate(585.000000, 394.000000)">
                <path
                  d="M23.66403,24.412197 C29.07754,25.730727 29.07754,27.868485 23.66403,29.187015 C18.25056,30.505552 9.47359,30.505552 4.060111,29.187015 C-1.3533923,27.868485 -1.3533923,25.730727 4.060111,24.412197 C9.47359,23.09366 18.25056,23.09366 23.66403,24.412197 Z"
                  id="Fill-1"
                  fill="#DD851B"
                ></path>
                <path
                  d="M12.65161,15.43325 C16.61541,14.4441 22.87007,15.12516 26.62179,16.95444 C30.37354,18.78371 30.20162,21.068487 26.23781,22.057626 C22.27401,23.046775 16.01935,22.365715 12.26763,20.53644 C8.515881,18.70716 8.687796,16.42239 12.65161,15.43325 Z"
                  id="fill-2"
                  fill="#DD851B"
                ></path>
                <path
                  d="M15.37285,7.52576 C18.49343,6.54167 23.3927,7.07514 26.31567,8.71731 C29.23866,10.35947 29.07847,12.48846 25.95787,13.47255 C22.83729,14.45664 17.93802,13.92317 15.01504,12.281 C12.09205,10.63884 12.25225,8.50985 15.37285,7.52576 Z"
                  id="sol-logo-colord"
                  fill-opacity="0.7922"
                  fill={scroll ? "#F5EFED" : "#0F0A0A"}
                ></path>
                <path
                  d="M24.50246,0.87083 C26.72486,1.52403 26.80944,2.89682 24.6914,3.93705 C22.57336,4.97728 19.05476,5.29103 16.83238,4.63783 C14.60999,3.98463 14.5254,2.61184 16.64345,1.57161 C18.76148,0.53138 22.28008,0.21763 24.50246,0.87083 Z"
                  id="Fill-5"
                  fill="#DD851B"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </IntlLink>
      <div className={`navbar-links ${navOpen? 'open' :null}`}>
        {menuLinks
          ? menuLinks.map(item => (
              <IntlLink to={item.link} className="navbar-link">
                {item.name}
              </IntlLink>
            ))
          : null}
      </div>

      <svg viewBox="0 0 100 80" width="20" height="20" className={`hamburger ${navOpen? 'open' :null}`} onClick={()=>setNavOpen(!navOpen)}>
        <rect width="100" height="2" className="line1"></rect>
        <rect y="30" width="100" height="2" className="line2"></rect>
        <rect y="60" width="100" height="2" className="line3"></rect>
      </svg>
    </header>
  )
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

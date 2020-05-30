import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { FormattedMessage } from "react-intl"
import NavDropdown from "react-bootstrap/NavDropdown"

const SelectLanguage = props => {
  const links = props.langs.map(lang => (
    <NavDropdown.Item as={Link} to={lang.link} active={lang.selected}>
      {lang.langKey}
    </NavDropdown.Item>
  ))

  return (
    /*<NavDropdown className="navbar-link"  title={<FormattedMessage id="selectLanguage" />} id="collasible-nav-dropdown">
      {links}                    
    </NavDropdown>      */
    props.langs.map(lang =>
      !lang.selected ? (
        <Link to={lang.link} className="navbar-link">
          <FormattedMessage id={lang.langKey}/>
        </Link>
      ) : (
        null
      )
    )
  )
}

SelectLanguage.propTypes = {
  langs: PropTypes.array,
}

export default SelectLanguage

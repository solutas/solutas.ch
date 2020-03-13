import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import NavDropdown from "react-bootstrap/NavDropdown";


const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <NavDropdown.Item as={Link} to={lang.link} active={lang.selected}>{lang.langKey}</NavDropdown.Item>        
  );

  return (
    <NavDropdown title={<FormattedMessage id="selectLanguage" />} id="collasible-nav-dropdown">
      {links}                    
    </NavDropdown>      
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
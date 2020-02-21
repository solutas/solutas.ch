import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import Dropdown from "react-bootstrap/Dropdown";


const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Dropdown.Item as={Link} to={lang.link} active={lang.selected}>{lang.langKey}</Dropdown.Item>        
  );

  return (
    
      <Dropdown>
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
  <FormattedMessage id="selectLanguage" />
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {links}    
  </Dropdown.Menu>
</Dropdown>
      
    
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
import React from 'react';
import Logo from "../assets/solutas-brief.png";
import SwissLogo from "../assets/Schweizer-Kreuz.jpg";
import { FormattedMessage, useIntl } from "react-intl"
import IntlLink from "./IntlLink"
export default ()=>(
    
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <img src={Logo} width="100%" className="mb-2"/>
          <small className="d-block mb-3 text-muted">&copy; 2019-2020</small>
        </div>
        <div className="col-12 col-md">
        <img src={SwissLogo} height="37" className="mb-2"/>
        <small className="d-block mb-0 text-muted">Swiss Quality</small>
        <small className="d-block mb-3 text-muted">Made with <span className="text-swiss">♥</span> in Basel </small>
        </div>
        <div className="col-12 col-md">
          <h5>Contact</h5>
          <small className="text-muted"><strong>SOLUTAS GmbH</strong><br/>
          Paradieshofstrasse 117<br/>
          4051 Basel, Switzerland<br/><br/>
          +41 79 597 50 06</small>
        </div>
        <div className="col-12 col-md">
          <h5><FormattedMessage id="Resources" /></h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="http://www.livebeam.me" target="_blank">www.livebeam.me</a></li>            
          </ul>
        </div>
        <div className="col-12 col-md">
          <h5><FormattedMessage id="About"/></h5>
          <ul className="list-unstyled text-small"> 
          <li><IntlLink className="text-muted" to="/team">Team</IntlLink></li>
            {/*<li><a className="text-muted" href="#">Locations</a></li>
            <li><a className="text-muted" href="#">Privacy</a></li>*/}
            <li><IntlLink className="text-muted" to="/terms">Terms</IntlLink></li>
          </ul>
        </div>
      </div>
    </footer>)
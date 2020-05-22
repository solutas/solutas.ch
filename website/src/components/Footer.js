import React from 'react';
import Logo from "../assets/solutas-brief.png";
import SwissLogo from "../assets/Schweizer-Kreuz.jpg";

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
        <small className="d-block mb-3 text-muted">Made with ♥ in Basel </small>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Resource</a></li>
            <li><a className="text-muted" href="#">Resource name</a></li>
            <li><a className="text-muted" href="#">Another resource</a></li>
            <li><a className="text-muted" href="#">Final resource</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Business</a></li>
            <li><a className="text-muted" href="#">Education</a></li>
            <li><a className="text-muted" href="#">Government</a></li>
            <li><a className="text-muted" href="#">Gaming</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Team</a></li>
            <li><a className="text-muted" href="#">Locations</a></li>
            <li><a className="text-muted" href="#">Privacy</a></li>
            <li><a className="text-muted" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>)
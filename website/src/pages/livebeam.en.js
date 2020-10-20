import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/de"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import TextBlock from "../components/TextBlock"
import Form from "../components/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import HeroImage from  '../assets/undraw_solution_mindset_34bi.svg';
import SwissLogo from "../assets/Schweizer-Kreuz.jpg";
import TimeImage from  '../assets/undraw_season_change_f99v.svg';
import SoluneoOne from "../assets/soluneo-1.gif";
import LivebeamOne from "../assets/livebeam-1.gif";

const SecondPage = (props) => (
  <Layout location={props.location}>
    
       
    <Jumbotron fluid bsPrefix="hero">
        <div className="hero__content">
          <Container> 
            <Row>
              <Col md={{ span: 4, offset: 1 }} className="hero__content--left">
              <HeroImage width="100%" height="100%" className="heroimg"/>
              </Col>
              <Col md="7" className="hero__content--right">
              <h1 className="display-3 mb-4 d-flex" style={{alignItems: 'center'}}>LiveBeam.me</h1>
                <h2 class="display-5">Ihr Event.</h2>
              {/*  <a  className="btn btn-primary btn-sm" href="#" role="button">
                  getting started
</a> */}
              </Col>
            </Row>
          </Container>
        </div>  
      </Jumbotron>

      <TextBlock position="right" title="LiveBeam.me erweiterete Beta" >
      <p>Sie haben ein Event mit mehr als 25 Gästen?</p>
      <p>Lassen Sie uns wissen um was für ein Event es sich handelt.
          <ul>
              <li>Firmenfeier, Geburtstag, Hochzeit?</li>
              <li>Privat, öffentlich?</li>
              <li>Wieveile Teilnehmer?</li>
          </ul>

      </p>
      
      </TextBlock>
     
      <Form/>
  </Layout>
)

export default SecondPage
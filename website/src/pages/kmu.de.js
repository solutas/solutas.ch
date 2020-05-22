import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/de"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import TextBlock from "../components/TextBlock"
import Form from "../components/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import HeroImage from  '../assets/undraw_barber_3uel.svg';
import SwissLogo from "../assets/Schweizer-Kreuz.jpg";

const SecondPage = (props) => (
  <Layout location={props.location}>
    
       
    <Jumbotron fluid bsPrefix="hero">
        <div className="hero__content">
          <Container> 
            <Row>
              <Col md={{ span: 4, offset: 1 }} className="hero__content--left">
              <HeroImage width="100%" height="100%" className="d"/>
              </Col>
              <Col md="7" className="hero__content--right">
              
                <h1 className="display-3 mb-4 d-flex" style={{alignItems: 'center'}}><img src={SwissLogo} height="20" className="mr-2"/>Your Local Partner.</h1>                
                <h2 className="display-5">For small business owners.</h2>
                
                
                <a  className="btn btn-primary btn-sm" href="#" role="button">
                  getting started
                </a> 
              </Col>
            </Row>
          </Container>
        </div>  
      </Jumbotron>
     
  </Layout>
)

export default SecondPage
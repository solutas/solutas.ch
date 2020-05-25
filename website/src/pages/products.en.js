import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/en"
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
              <h1 className="display-3 mb-4 d-flex" style={{alignItems: 'center'}}><img src={SwissLogo} height="20" className="mr-2"/>We innovate.</h1>
                <h2 class="display-5">For you. In Switzerland.</h2>
                <a  className="btn btn-primary btn-sm" href="#" role="button">
                  getting started
                </a> 
              </Col>
            </Row>
          </Container>
        </div>  
      </Jumbotron>

      <TextBlock position="right" title="Soluneo. Locally Connected." image={<div><img src={SoluneoOne}  width="100%"/></div>}>
      <p>Soluneo is providing a Digital Platform to support local SMEs and MICRO Businesses to establish a locally shared customer base by enabling them to easily create a Unique web-presence leading into increased consumer recognition, conversion rates and therefor increased sales.</p>

<p>The universal page editor provides maximum flexibility; for example being able to manage targeted campaigns (like “new arrivals”) to audience nearby, with the simple “Calendar Management” solution, we provide an end-to-end solution for your appointment management.</p>
<p>We provide you the option of a unique e-commerce solution paired with the “Check-in” & “Check-out” functionality to increase customer satisfaction due to securely captured personal details like payment types, delivery address etc.</p>
      </TextBlock>
      <TextBlock position="left" title="Livebean.me - Capture your event out of the eyes of your guests." image={<div><img src={LivebeamOne}  width="100%"/></div>}>
      <p>A totally new way to engage with your audience.</p>

<p>Let your guests connect to your event screen.</p>
<p>Get a live ambient feeling of your event with in realtime.</p>
      </TextBlock>      
  </Layout>
)

export default SecondPage
import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/de"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import TextBlock from "../components/TextBlock"
import Form from "../components/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import HeroImage from  '../assets/undraw_city_girl_ccpd.svg';
import Developer from  '../assets/undraw_web_developer_p3e5.svg';
import SuperHero from  '../assets/undraw_superhero_kguv.svg';
import TimeImage from  '../assets/undraw_season_change_f99v.svg';

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
                <h1 class="display-3 mb-4">Your trusted Agency.</h1>                
                <h2 class="display-5">For your Magnolia Projects.</h2>
                <a  className="btn btn-primary btn-sm" href="#" role="button">
                  getting started
                </a> 
              </Col>
            </Row>
          </Container>
        </div>  
      </Jumbotron>

      <TextBlock position="right" title="Take advantage of the full potential." image={<SuperHero width="300" height="182"/>}>      
      <p>One of our Founder alone has more then 20 Years expierence within the Enterprise Content Management field.</p>
      <p>He contributed to Open Source Projects such as Apache Sling and influenced well known commercial Systems like Adobe AEM.
      Knowing all the pitfalls, our goal at SOLUTAS is to unfold the full potental of your Content Management Systems.
      </p>
      </TextBlock>

      <TextBlock position="left" title="Jam. JAM. JAM STack." image={<Developer width="300" height="182"/>}>            
      <p>Unlike many established Agencies in the Sector, we started our journey with the strong belief that in order to be successful you need to fully boost the Frontend implementation, especially with Java backed CMS Systems.</p>
      <p>We have a strong track record, implementing technologies like offline-first, server side rendering, even before the terms have had been created</p>
      <p>No miscommunication between "Backend" and "Frontend" Development.</p>
      </TextBlock>      

      <Form/>
     
  </Layout>
)

export default SecondPage
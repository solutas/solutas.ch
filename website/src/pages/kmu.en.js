import React from 'react'
import Layout from "../layouts/en"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import TextBlock from "../components/TextBlock"
import Form from "../components/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import HeroImage from  '../assets/undraw_barber_3uel.svg';
import SwissLogo from "../assets/Schweizer-Kreuz.jpg";
import TimeImage from  '../assets/undraw_season_change_f99v.svg';
import SoluneoOne from "../assets/soluneo-1.gif";
import Behndi from "../assets/behndi.gif";
import Courses from "../assets/classes.gif";
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
              
                <h1 className="display-3 mb-4 d-flex" style={{alignItems: 'center'}}><img src={SwissLogo} height="20" className="mr-2"/>Your Local Partner.</h1>                
                <h2>For small business owners.</h2>
                
                
                <a  className="btn btn-primary btn-sm" href="#" role="button">
                  getting started
                </a> 
              </Col>
            </Row>
          </Container>
        </div>  
      </Jumbotron>


      <TextBlock position="right" title={<span>We <span className="text-swiss">♥</span> Small Businesses. We <span className="text-swiss">♥</span> to impact.</span>} image={<div><img src={Courses}  height="300" /></div>}>
      <p>Our goal is to support our Local Small  and Micro-Business. We believe that you can benefit from our extensive knowledge in Digitalization.</p>
      <p>We have worked as futurists and have developed prototypes more then 15 years ago from the world we are living in Today.</p>
      <p>Don't be ok with just following what is needed today, but build up your business to be up-to-date and ready for what ever will happen in the future. We love to partner with you.</p>
      </TextBlock>

      <TextBlock position="left" title={<span>We <span className="text-swiss">♥</span> to innovate. And we are right in your Neighborhood.</span>} image={<div><img src={Behndi}  height="300" /></div>}>
      <p>We believe, you don't need to wait for the silicon valley to bring us a solution, changing and adapting it until it fits our local market.</p>
      <p>We are already building them, no customization, because we have and are building the future together with you.</p>
      <p>Weather it will be a Mobile App, PWA, Intranet, Website,E-Commerce, IoT,... you name it - we got your back!</p>      
      </TextBlock>
      <TextBlock>
      <p>So, you will not read anything like Wordpress, Jimdo, Shopify, PHP, WooCommerce or anything alike form us. Tell us your challeange and we will show you an actually matching solution. Get in touch with us, we are happy to help!</p>
      </TextBlock>

      <Form/>
     
  </Layout>
)

export default SecondPage
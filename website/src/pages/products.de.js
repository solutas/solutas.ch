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
              <h1 className="display-3 mb-4 d-flex" style={{alignItems: 'center'}}><img src={SwissLogo} height="20" className="mr-2"/>We innovate.</h1>
                <h2 class="display-5">For you. In Switzerland.</h2>
              {/*  <a  className="btn btn-primary btn-sm" href="#" role="button">
                  getting started
</a> */}
              </Col>
            </Row>
          </Container>
        </div>  
      </Jumbotron>

      <TextBlock position="right" title="Soluneo. Locally Connected." image={<div><img src={SoluneoOne}  width="100%"/></div>}>
      <p>Soluneo ("the new solution"), currently in private Beta,  is providing a Digital Platform to support local SMEs and MICRO Businesses to establish a locally shared customer base by enabling them to easily create a Unique web-presence leading into increased consumer recognition, conversion rates and therefor increased sales.</p>
      <p>The universal page editor provides maximum flexibility; for example being able to manage targeted campaigns (like “new arrivals”) to audience nearby, with the simple “Calendar Management” solution, we provide an end-to-end solution for your appointment management.</p>
      
      </TextBlock>
      <TextBlock>
        <div>
        <p>We provide you the option of a unique e-commerce solution paired with the “Check-in” & “Check-out” functionality to increase customer satisfaction due to securely captured personal details like payment types, delivery address etc.</p>
        <strong>Current &amp; Desired Features</strong>
<ul>
  <li>A Complete Web-CMS Solution for Small and Micro Businesses with access to thousends of royalty free Images. Change your content on the road with your Phone or Tablet.</li>
  <li>E-Commerce Solution to handle one-time payment</li>
  <li>Subscription Management for recuring revenue</li>
  <li>Manage Classes &amp; Workshops from Website, Payment to Booking</li>
  <li>Manage Services</li>
  <li>Enable Virtual Classes &amp; Workshops through integrated unique TV-Like Conferencing solution</li>
  <li>Shared Customer Base: Customers buying something from another Shop or attending classes, don't need to enter their information when buying or booking from you</li>
  <li>Push Notification for local users</li>
  <li>Payout Solution</li>
  <li>Touchless Payment Solution</li>
</ul>
<p>We are currently in Beta, but our goal is to offer Soluneo for one price only. No add-ons, no hidden costs. One Price for all current and future features.</p>
<strong>Interested?</strong> Get in touch with us for a Demo we are happy to evaluate if we can extend our Beta Program to you.
        </div>
      </TextBlock>

      <TextBlock>

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2QP6SxUDYbA" allowfullscreen></iframe>
</div>
      </TextBlock> 

     
      <TextBlock position="left" title="Livebeam.me - Experience Your Event With The Eyes Of Your Guests." image={<div><img src={LivebeamOne}  width="100%"/></div>}>
      <p>Livebeam.me started as a private Project for a Wedding, Birthday for a Child and New Years Party. 
        After getting so many requests from the Attendees to make that available to them, we have decided to invest in this Product to make it publicly available.</p>
        <p>We were hit very hard from the Corona situation and therefore we were forced to put the project on hold.</p>        
      </TextBlock>      
      <TextBlock>
        <div>
        <p><strong>But we believe that Events will be possible and therefore we started again to work on livebeam.</strong> Before the crices, our first external users gave Livebeam.me such a good feedback that we simply cannot ignore it.</p>
        <p>The Software is working and you can already use it for your Event. Still we have decided to get more experience and decided to roll it out in an controlled envrionment.</p>
        <p>We launched the site <a href="http://www.livebeam.me" target="_blank">www.livebeam.me</a> for all people interested to register.</p>
        <p>Register for the Beta Program and if you know already of an Event, let us know. We are more then happy to come back to you and to give you a demo account.</p>      
        </div>
      </TextBlock>

      
      <TextBlock>
      <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/HUzgxscpsWM" allowfullscreen></iframe>
</div>
      </TextBlock>
      <Form/>
  </Layout>
)

export default SecondPage
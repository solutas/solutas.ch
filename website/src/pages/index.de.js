import React from "react"

import Layout from "../layouts/de"
import Link from "gatsby-link"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import IntlLink from "../components/IntlLink"

const IndexPage = props => (
  <Layout location={props.location}>
    <div>
      <Jumbotron fluid bsPrefix="hero">
        <div class="hero__content">
          <Container>
            <Row>
              <Col>
                <h2>We are</h2>                
                <h1>the Link</h1>
                <a class="btn btn-primary btn-lg" href="#" role="button">
                  learn more
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </Jumbotron>
      <Container className="text-centers section-header">
        <h1 className="display-5">We are the next generation
implementation Partner!</h1>
      </Container>
      <Container className="mb-5">
        <Row>
          <Col md={{ span: 8 }} lg={{ span: 10 }}>
          
        <p>We have been around, when the Term Content Management System was not even invented. </p>

<p>We built websites in Perl. We even built them in C  and of course PHP. We also did CGI. And yes, Java as well. 
  We built webapps with ajax when it was just XMLHttpRequest and webapp wasn't even a word yet. Doesn’t ring a bell? 
  
  Doesn’t have to. 
  
  We built tiny small websites. We built huge news portals for TV and Radio stations. We consultated newspapers. We helped hospitals to organize their content. We were part of succesful aquiositions. We developed core components for hudge international content management systems, used by thousends of developers and marketers. We helped the worlds largest system integrators to be succesful. We helped the world most trusted agencies.</p>

<p>But now,  we all came finally together. We are here. We will stay.</p>
          </Col>
          <Col>
          <img src={require("../assets/solutas-brief-weiss.svg")}/>
          </Col>
        </Row>
        
      </Container>
<Jumbotron fluid className="happyppl">


<h1>We bridge the gap between IT, System Integrators and Marketers, Agencies</h1>

</Jumbotron>

      <Container>
      
<h4> We are not a system integrator.</h4><h4> We are not an Agency.</h4><h4><strong>We are SOLUTAS.</strong> Because simplicity Matters!</h4>
        <IntlLink to="/page-2/"> zurseiten 234234</IntlLink>

      </Container>
    </div>
  </Layout>
)

export default IndexPage

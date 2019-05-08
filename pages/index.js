
import Hero from "../components/Hero";
import Layout from "../components/MainLayout.js";
import { Jumbotron, Button,Container, Row, Col ,Badge } from "reactstrap";
import TopNavigation from "../components/TopNavigation";
import Logo from "../assets/solutas-icon.png";

const Index = () => (
  <Layout>
    <Hero title="Time to reclaim what's really important" color1="#000015" color2="#4b6cb7"/> 
    <TopNavigation/>    
  <Container  fluid>
    <Row>      
      <Col lg="3" style={{textAlign: "center", paddingTop: "20px"}} className="something d-none d-lg-block"><img  className=" leo animated flipInY" src={Logo}/>
      </Col>  
      <Col md="12" lg="9">
      <h1>About Us</h1>
      <h2>Simplicity Matters.</h2>
      <p>We are a Software Consultancy and Engineering Company located in Basel, Switzerland.</p>
      <p>Our two Founders do have two totally different and unique Backgrounds. A licensed Nurse and a Computer Scientist. While both have had working in different domains, they both realized that technology, espacially in Software Engineering needs to be crafted around actual Human needs.</p>
      <p>Merging over 10 Years experience in LifeScience, Tele Medicin, practicing Nurcing with more then 20 Years experience in Software Engineering in Digital Marketing, Media and Television resulted in SOLUTAS, because simplicty matters.</p>
      <p>We dislike the Term User simply because it is degrating a Human just to be tool for using technology.</p>
      <p>We believe that starting any Software Project focusing on the Human you want to target will ultimatvily lead to better results.</p>
      <h3>At SOLUTAS we...</h3>
      <blockquote className="blockquote">
      <ul>
        <li>...do love technology</li>
        <li>...do love to solve very complex problems</li>
        <li>...transfer your complex challenges into beautiful small and simple solutions</li>
        <li>...design it for you</li>
        <li>...architect it for you</li>
        <li>...craft the software for you</li>
        <li>...help you to focus on what you need</li>
        <li>...simply enable you to your full potential</li>
      </ul>
      </blockquote>

      </Col>
    </Row>  
  </Container>    

  <Hero title="The Solution. Tailerd to you."
  color="rgba(255,255,255,0.7)"
  subHeader
  color1="#000015" color2="#dd851b" />


<Container >
    <Row>  
    
      <Col lg="12">
      <h2 styleName="display-2">Custom Development</h2>
      <h1 styleName="display-1">Engineering to make you happy.</h1>
      <p>We believe that everybody diserves to have a custom software crafted to their individual needs.</p>
      <p>We believe that this is possible regardless of the size of your organization.</p>
      <p>We believe that there is a solution for every budget.</p>
      <ul>
        <li>Escalation Management</li>
        <li>Custom Applications (for any size of business)</li>
      </ul>
      </Col>
      
    </Row>  
  </Container>   

  <Hero title="Our Services. Your Solution."   
  color="rgba(255,255,255,0.7)"
  subHeader
  color1="#000015" color2="#4b6cb7" />

    
<Container>
    <Row>  
    <Col lg="6">
    <h1 styleName="display-1">Business Consulting</h1>
      </Col>  
    
      <Col lg="6">
      <h1 styleName="display-1">App Development</h1>
      <p>For us, you are not just a User, we are putting all our effort into designing and engineering solutions based around actual Human beeing.</p>
     
      <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>

      <ul>
        <li>Escalation Management</li>
        <li>Custom Applications (for any size of business)</li>
      </ul>
      </Col>
      
    </Row>  
  </Container>   

  <Hero title="Our Expertise. Your Benefit."   
  color="rgba(255,255,255,0.7)"
  subHeader
  color1="#000015" color2="#4b6cb7" />

    
<Container>
    <Row>  
    <Col md="5">
    <h4>Software Engineering</h4>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <div className="expertise">
    <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="light">Light</Badge>
        <Badge color="dark">Dark</Badge>
    
    </div>
      </Col>  
    
      <Col md="5">
      <h4>Network Engineering</h4>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <div className="expertise">
    <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="light">Light</Badge>
        <Badge color="dark">Dark</Badge>
    
    </div>
      </Col>  
      
    </Row>  
  </Container>   


  </Layout>
);
export default Index;

//import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/website.scss";
//import "../assets/custom.css";
import {  Button,Container, Row, Col  } from "reactstrap";
import Header from "./Header";
import TopNavigation from "./TopNavigation";
import Icon from "../assets/solutas-brief-weiss.png";
const layoutStyle = {
  margin: 0,
  padding: 0
};

const Layout = props => (
  <div style={layoutStyle}>
    <TopNavigation/> 
    {props.children}


    <div className="footer">
      <Container>
        <Row>
          <Col sm="12" md="3" className="logo d-none d-lg-block"><img src={Icon} style={{ width: "200px"}}/>
          </Col>
          <Col sm="6" md="3">
          <address>
  <strong>SOLUTAS GmbH</strong><br/>
  Paradieshofstrasse 117<br/>
  4054 Basel, Switzerland
  </address>
          </Col>
          <Col sm="6" md="3">
          <address><br/>
          <abbr title="Phone">Phone</abbr> +41 79 597 500 6<br/>
            <abbr title="E-Mail">E-Mail</abbr> info@solutas.ch
          </address>
          </Col>
          <Col sm="12" lg="3" className="d-none d-lg-block">
          <address>
          <abbr title="CH VAT No">CH VAT No</abbr> CH-234.973.545 MWST<br/>
<abbr title="USt-IdNr">USt-IdNr</abbr> CH-234.973.545
</address></Col>
        </Row>
        <Row>
          <Col md="12" className="text-center copyright">Copyright &copy; 2019 SOLUTAS GmbH. All rights reserved.</Col>          
        </Row>
      </Container>
    </div>
  </div>
);

export default Layout;

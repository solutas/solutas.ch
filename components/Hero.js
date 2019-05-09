import Link from "next/link";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import Logo from "../assets/solutas-brief.png";
const linkStyle = {
  marginRight: 15
};

const Hero = props => (
  <Jumbotron
    className={`Hero ${props.subHeader? "subHeader" : ""}`}
    fluid
    style={{
        background: `linear-gradient(
  to top right,
      ${props.color1 ? props.color1 : "#000015"},
      ${props.color2 ? props.color2: "#000015c7"}
    )`
      }}
  >
      { props.roundTop ? <div className="round-top"></div> : null }

    <Container>
      {props.title ? 
      <h1 className="display-1 fadeInUp animated delay-2"   style={{
      color: `${props.color ? props.color : ""}
  `
    }}>{props.title ? props.title : "add title"}</h1>
      : null}

    {props.children}
      {/*
      
      
      
      <p className="lead">    
      We are using technology to develop solutions for Humans, not the other way around
    </p>
    <hr className="my-2" />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
    <p className="lead">
      <Button color="primary">Learn More</Button>
    </p>*/}
    </Container>
    { props.roundBottom ? <div className="round"></div> : null }
  </Jumbotron>
);

export default Hero;

import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/de"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import TextBlock from "../components/TextBlock"
import Form from "../components/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ThemePreview from "../components/ThemePreview"
import HeroImage from "../assets/undraw_solution_mindset_34bi.svg"
import Modal from "react-bootstrap/Modal"
import SwissLogo from "../assets/Schweizer-Kreuz.jpg"
import TimeImage from "../assets/undraw_season_change_f99v.svg"
import SoluneoOne from "../assets/soluneo-1.gif"
import LivebeamOne from "../assets/livebeam-1.gif"
import EditorImage from "../assets/soluneopageeditor.gif"
const SecondPage = props => (
  <Layout location={props.location}>
    <Jumbotron fluid bsPrefix="hero">
      <div className="hero__content">
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 1 }} className="hero__content--left">
              <HeroImage width="100%" height="100%" className="heroimg" />
            </Col>
            <Col md="7" className="hero__content--right">
              <h1
                className="display-3 mb-4 d-flex"
                style={{ alignItems: "center" }}
              >
                Soluneo Private Beta
              </h1>
              <h2 class="display-5">Website Accelerator Program</h2>
              {/*  <a  className="btn btn-primary btn-sm" href="#" role="button">
                  getting started
</a> */}
            </Col>
          </Row>
        </Container>
      </div>
    </Jumbotron>

    <TextBlock
      position="right"
      title="Choose a theme to jumpstart your project"
      image={
        <div>
          <img src={EditorImage} width="100%" />
        </div>
      }
    >
      <p>
        To accelerate your implementaiton and focus on your long term goals and
        the Soluneo application goals as well, we provide following themes to
        choose from to accelerate the design phase
        <hr />
        <div className="d-flex flex-row flex-wrap justify-content-around">
          <ThemePreview source="https://spyre-theme.bitbucket.io/v1.4.0/pages/index.html">
            Spyre
          </ThemePreview>
          <ThemePreview source="https://square-theme.github.io/index.html">
            Square
          </ThemePreview>
          <ThemePreview source="https://demos.creative-tim.com/marketplace/now-ui-kit-pro/presentation.html">
            Now UI
          </ThemePreview>
          <ThemePreview source="https://yevgenysim.github.io/incline/">
            Incline
          </ThemePreview>
          <ThemePreview source="https://focus.11bits.es/">Focus</ThemePreview>
        </div>
      </p>
    </TextBlock>
    <TextBlock
      position="left"
      title="How does it work?"
      image={
        <div>
          <img
            src="http://senolio.flywheelsites.com/wp-content/uploads/2020/08/senol-itting-1-2048x1463.png"
            style={{ width: "100%" }}
          />
        </div>
      }
    >
      <p>
        Pick your Theme and inform your primary contact for yor EA Project. We
        will then incorporate the Theme in your specific Soluneo APP as much as
        reasonable.
      </p>
      <p>
        All Themes are carefully chosen and are crafted around the Bootstrap
        Framework which is first class citizen of the Soluneo XMS Platform and
        expected to work when Soluneo is in General Availability.
      </p>
    </TextBlock>
    <TextBlock title="Who owns the Theme License?" position="right">
      SOLUTAS will purchase a license for your Implementation project which will
      then be transfered to you. We are under pricing negotiation with the
      respective license owner(s). If the end license will not reach a
      threshold, we are aiming to provide you the Theme with your Early Acess
      Program fix price solution.
    </TextBlock>
    <TextBlock position="right" title="Any questions?">
      Get in touch with your primary contact or use the form below:
    </TextBlock>
    <Form />
  </Layout>
)

export default SecondPage

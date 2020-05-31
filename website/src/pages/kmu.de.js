import React from "react"
import Layout from "../layouts/de"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import TextBlock from "../components/TextBlock"
import Form from "../components/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import HeroImage from "../assets/undraw_barber_3uel.svg"
import SwissLogo from "../assets/Schweizer-Kreuz.jpg"
import TimeImage from "../assets/undraw_season_change_f99v.svg"
import SoluneoOne from "../assets/soluneo-1.gif"
import Behndi from "../assets/behndi.gif"
import Courses from "../assets/classes.gif"
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
                <img src={SwissLogo} height="20" className="mr-2" />
                Ihr lokaler Partner.
              </h1>
              <h2>Für Ihre KMU.</h2>
              {/*
                
                <a  className="btn btn-primary btn-sm" href="#" role="button">
                  getting started
                </a> */}
            </Col>
          </Row>
        </Container>
      </div>
    </Jumbotron>
    <TextBlock
      position="right"
      title={
        <span>
          Wir lieben <span className="text-swiss">♥</span> KMU's. Wir lieben es{" "}
          <span className="text-swiss">♥</span> etwas zu bewirken.
        </span>
      }
      image={
        <div>
          <img src={Courses} height="300" />
        </div>
      }
    >
      <p>
        Unser Ziel ist es Klein- Mittel- und Kleinstunternehmen zu unterstützen.
        Wir glauben, dass Sie von unserem umfangreichen Wissen in
        Digitalisierung profitieren können.
      </p>
      <p>
        Wir haben als Futuristen gearbeitet und vor mehr als 15 Jahren
        Prototypen aus der Welt entwickelt, in der wir heute leben.
      </p>
      <p>
        Befolgen Sie nicht nur das, was heute benötigt wird, sondern bauen Sie
        Ihr Unternehmen auf, um auf dem neuesten Stand und bereit zu sein für
        alles, was in Zukunft passieren wird. Wir lieben es, mit Ihnen
        zusammenzuarbeiten.
      </p>
    </TextBlock>

    <TextBlock
      position="left"
      title={
        <span>
          Wir lieben <span className="text-swiss">♥</span> es innovativ zu sein.
          Und wir sind direkt in Ihrer Nachbarschaft.
        </span>
      }
      image={
        <div>
          <img src={Behndi} height="300" />
        </div>
      }
    >
      <p>
        Wir glauben, dass Sie nicht warten müssen, bis das Silicon Valley uns
        eine Lösung bietet, die Sie ändern und anpassen müssen, bis sie zu
        unserem lokalen Markt passt.
      </p>
      <p>
        Wir bauen sie schon, keine Anpassung, denn wir haben und entwickeln die
        Zukunft gemeinsam mit Ihnen.
      </p>
      <p>
        Egal ob es sich um eine Mobile App, eine Progressive Webapp, Intranet,
        Webseite, E-Commerce, IoT,... handelt, was auch immer es ist – wir
        halten Ihnen den Rücken frei!
      </p>
    </TextBlock>
    <TextBlock>
      <p>
        Also, Sie werden an dieser Stelle nichts von uns über Wordpress, Jimdo,
        Shopify, PHP, WooCommerce oder irgendetwas ähnliches lesen. Teilen Sie
        uns Ihre Herausforderung mit und wir zeigen Ihnen eine wirlich passende Lösung.
        Nehmen Sie Kontakt mit uns auf, wir helfen Ihnen gerne weiter!
      </p>
    </TextBlock>
    <Form />
  </Layout>
)

export default SecondPage

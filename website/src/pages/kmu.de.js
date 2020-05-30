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
        Unser Ziel ist Klein- Mittel und Micro Unternehmen zu unterstützen. Wir
        glauben, dass Sie von unserem umfangreichen Wissen in Digitalisierung
        profitieren können.
      </p>
      <p>
        Wir haben als Futuristen Prototypen entwickelt vor über 15 Jahren,
        dessen Prinzipen in der heutigen Welt gang und gäbe sind.
      </p>
      <p>
        Geben Sie sich nicht nur zufrieden mit dem Nötigsten für die Welt von
        heute, sondern bauen Sie sich Ihr Geschäft auf, um auf dem neusten Stand
        der Zukunft zu sein, was auch immer diese bringen mag. Wir tun uns gerne
        mit Ihnen zusammen.
      </p>
    </TextBlock>

    <TextBlock
      position="left"
      title={
        <span>
          Wir lieben <span className="text-swiss">♥</span> es innovativzu sein.
          Wir sind in Ihrer Nachbarschaft.
        </span>
      }
      image={
        <div>
          <img src={Behndi} height="300" />
        </div>
      }
    >
      <p>
        Wir glauben, dass Sie nicht auf das Silicon Valley warten müssen um eine
        Lösung rauszubringen, nur um diese umzuwandeln und zu adaptieren bis sie
        auf unserem lokalen Markt brauchbar ist.
      </p>
      <p>
        Wir bauen die Lösungen hier, keine Anpassung und Adaption auf unseren
        lokalen Markt nötig, weil wir die Zukunft gemeinsam mit Ihnen
        erstellt haben und erstellen werden.
      </p>
      <p>
        Egal ob es sich um eine Mobile App, eine Progressive Webapp, Intranet, Webseite, E-Commerce, IoT,... handelt,
        was auch immer es ist –
        wir halten Ihren Rücken frei!
      </p>
    </TextBlock>
    <TextBlock>
      <p>
        Also, Sie werden an dieser Stelle nichts von uns über Wordpress, Jomdo,
        Shopify, PHP, WooCommerce oder irgendetwas ähnliches lesen. Erzählen Sie
        uns uns von Ihren grössten Herrausforderungen und wir werden Ihnen eine
        wirklich passende Lösung aufzeigen. Setze Sie sich mit uns in
        Verbindung, wir freuen uns Ihnen zu helfen!
      </p>
    </TextBlock>
    <Form />
  </Layout>
)

export default SecondPage

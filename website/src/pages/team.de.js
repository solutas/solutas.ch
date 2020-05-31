import React from "react"
import Layout from "../layouts/de"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import TextBlock from "../components/TextBlock"
import Form from "../components/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import HeroImage from "../assets/undraw_online_collaboration_7pfp.svg"
import SwissLogo from "../assets/Schweizer-Kreuz.jpg"
import TimeImage from "../assets/undraw_season_change_f99v.svg"
import SoluneoOne from "../assets/soluneo-1.gif"
import Founder from "../assets/undraw_true_friends_c94g.svg"
import Behndi from "../assets/behndi.gif"
import Team from "../assets/team.png"
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
                SOLUTAS.
              </h1>
              <h2>Your digital Solution Partner</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </Jumbotron>

    <TextBlock
      position="right"
      title="Über uns."
      image={
        <div>
          {/*<Founder width="300" height="187" />*/}
          <img src={Team} height="250" style={{ borderRadius: "10px" }} />
        </div>
      }
    >
      <p>
        Die beiden Firmengründer haben zwei ganz unterschiedliche Werdegänge.
        Janine, eine diplomierte Pflegefachfrau und Şenol, ein Computer
        Scientist. Während beide ganz unterschiedlichen Bereichen gearbeitet
        hatten, haben beide realisiert, dass Technologie, besonders in der
        Softwareentwicklung mit dem Menschen im Mittelpunkt entwickelt werden
        muss.
      </p>
      <p>
        Um erfogreich eingeführt werden zu können, müssen Prozesse und Lösungen
        einfach zu verstehen und zu bedienen sein.
      </p>
    </TextBlock>
    <TextBlock>
      <p>
        Die Zusammenführung von mehr als 10 Jahren Erfahrung in LifeScience,
        Telemedizin und Krankenpflege mit mehr als 20 Jahren Erfahrung in
        Software Engineering in den Bereichen digitales Marketing, Medien und
        Fernsehen führte zu SOLUTAS, because simplicity matters.​
      </p>
    </TextBlock>

    <TextBlock
      title="Unser Team."
      image={
        <div>
          <Founder width="300" height="187" />
        </div>
      }
    >
      <div>
        <ul>
          <li>
            <strong>Janine</strong> Managing Director, Operations, co-owner
          </li>
          <li>
            <strong>Şenol</strong> Managing Director, Engineering, co-owner
          </li>
          <li>
            <strong>René</strong> Managing Partner, Sales, livebeam.me &amp;
            Soluneo
          </li>
          <li>
            <strong>Clelia</strong> Product &amp; Community Manager, Trainings
            &amp; Livebeam.me
          </li>
          <li>
            <strong>Lucas</strong> Praktikant, Frontend and Cloud Engineering
          </li>
        </ul>
        .... und ein grosses Netzwerk and hoch talentierten Freunden.
      </div>
    </TextBlock>

    <Form />
  </Layout>
)

export default SecondPage

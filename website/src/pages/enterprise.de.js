import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/de"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import TextBlock from "../components/TextBlock"

import Form from "../components/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import HeroImage from "../assets/undraw_city_girl_ccpd.svg"
import Developer from "../assets/undraw_web_developer_p3e5.svg"
import SuperHero from "../assets/undraw_superhero_kguv.svg"
import TimeImage from "../assets/undraw_season_change_f99v.svg"
import LightDev from "../assets/mgnl-lightdev.png"
import ScrumBoard from "../assets/undraw_scrum_board_cesn.svg"
import CelebrateImage from "../assets/undraw_celebration_0jvk.svg"
import LiveDevelopment from "../assets/undraw_developer_activity_bv83.svg"
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
              <h1 class="display-3 mb-4">Ihre neue Software-Agentur.</h1>
              <h2 class="display-5">Für Ihre Magnolia CMS Projekte.</h2>
              {/*<a className="btn btn-primary btn-sm" href="#" role="button">
                getting started
</a>*/}
            </Col>
          </Row>
        </Container>
      </div>
    </Jumbotron>

    <TextBlock
      position="right"
      title="Bring dein CMS Projekt zum nächsten Level."
      image={<SuperHero width="300" height="182" />}
    >
      <p>
        Einer unserer Gründer hat allein über 20 Jahre Erfahrung im Enterprise
        Content Management Bereich.
      </p>
      <p>
        Er steuerte bei grossen Open Source Projekten wie zum Beispiel bei
        Apache Sling, die{" "}
        <a
          href="https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
          target="_blank"
        >
          HTL Library und Spezifikation
        </a>{" "}
        bei. Damit beeinflusste er bekannte kommerzielle Systeme wie Adobe AEM.
        Mit dem Wissen, wo die Schwachpunkte von solchen Projekten liegen, hat
        ich die SOLUTAS das Ziel gesetzt das volle Potenzial von ihrem
        bestehenden Content Management Systemen auszunutzen oder neue Projekte
        gezielt anzuheben.
      </p>
    </TextBlock>

    <TextBlock
      position="left"
      title="Volle Enterprise-Power aber leichte Entwicklung."
      image={<LiveDevelopment width="300" height="182" />}
    >
      <p>
        Für uns als SOLUTAS, bringt das Magnolia CMS die Freude an der
        Implementation von Enterprise Web Projekten zurück.
      </p>
      <p>
        Magnolia CMS ist ein starkes stabiles System in Java geschrieben und auf
        JCR aufbauend. Mit der einzigartigen leichten Entwicklung und dem
        Vorteil die Option zu haben, das System mit der Magnolia Cloud zu
        koppeln, kann jedes Projekt fahrt in unglaubliche Dimensionen aufnehmen.
      </p>
      <p>
        Direkt vom Start an können wir uns auf Ihr eigentliches Projektziel
        konzentrieren, mit dem Wissen das keine Grenzen gesetzt sind mit dem
        starken Rückgrat von Magnolia CMS.
      </p>
    </TextBlock>

    <TextBlock
      position="right"
      title="Jam. JAM. JAMStack."
      image={<Developer width="300" height="182" />}
    >
      <p>
        Im Herzen ist Jamstack eine moderne Webentwicklungsarchitektur. JAM
        referiert zu einer JavaScript Benutzerschnittstelle, wiederverwendbare
        APIs und vorgebautem Markup. Jamstack erlaubt es Ihnen die Performance
        Ihrer Seite zu verbessern indem gewisse statische Seiten bei Ausführung
        in ein Content Delivery Network (CDN) eingesetzt werden.
      </p>
      <p>
        Nicht wie manche etablierte Agenturen in diesem Sektor, starteten wir
        unseren Weg mit der Überzeugung, dass um Erfolgreich zu sein, es nötig
        ist sich auf die Frontend Entwicklung zu konzentrieren, besonders auf
        Java basierenden CMS Systemen.
      </p>
    </TextBlock>
    <TextBlock>
      <p>
        We are very strong in the Java World but we do love{" "}
        <span className="text-swiss">♥</span> Frontend development. Since we as
        a company are feeling at home in both worlds equaly there will be{" "}
        <string>
          no more miscommunication between "Backend" and "Frontend" Development.
        </string>{" "}
        You will see creative Solutions, such as adding a GraphQL layer to your
        portfolio to handle legacy systems. <strong>SOLUTAS</strong> is a Cloud
        Native Company.
      </p>
    </TextBlock>
    <TextBlock
      position="left"
      title="Wir schaffen Ihr Projekt"
      image={<ScrumBoard width="300" height="182" />}
    >
      <p>
        Wir werden Ihnen nicht eine Liste mit Schlagwörtern über Agile
        Entwicklung und Test Driven Development liefern. Wir sind sicher, dass
        Sie davon schon genug gehört haben.
      </p>
      <p>
        Im Kern werden Implementationen von uns mit der Agilen Methoden
        umgesetzt. Aber auch wenn Sie Prince, Hermes oder andere Methoden
        anwenden, sind wir in der Lage unsere Entwicklungen in Ihre bestehende
        Projekt Management Frameworks einzubauen. SOLUTAS hat Erfahrung in
        regulierten Umgebungen.
      </p>
    </TextBlock>
    <TextBlock
      title="Erfolgreich mit 4D"
      position="right"
      image={<CelebrateImage width="300" height="211" />}
    >
      <div>
        <p>
          Normalerweise benutzen wir Phasen wie Ermittlung, Definition, Liefern.
        </p>
        <p>
          Wir nutzen Story Mapping um Erweiterungen zu Planen und eine klare
          Roadmap aufzuzeichnen. Sie wissen genau, was wir liefern können und
          was wir geplant haben. Das macht es einfacher für Sie, den Fortschritt
          an Interne Stakeholders kommunizieren.
        </p>
      </div>
    </TextBlock>
    <TextBlock>
      <p>
        Genug geschrieben, kontaktieren Sie uns. Wir präsentieren Ihnen gerne eine Demo und
        zeigen Ihnen unser einzigartiges Vorgehen.
      </p>
    </TextBlock>
    <Form />
  </Layout>
)

export default SecondPage

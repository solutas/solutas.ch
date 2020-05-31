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
      title="Bringen Sie Ihr CMS-Projekt auf die nächste Stufe."
      image={<SuperHero width="300" height="182" />}
    >
      <p>
        Allein einer unserer Gründer verfügt über mehr als 20 Jahre Erfahrung im
        Bereich Enterprise Content Management.
      </p>
      <p>
        Er trug zu Open Source-Projekten wie Apache Sling (z.B. der{" "}
        <a
          href="https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
          target="_blank"
        >
          HTL-Bibliothek und -Spezifikation
        </a>
        ) bei und beeinflusste bekannte kommerzielle Systeme wie Adobe AEM.
        Unser Ziel bei SOLUTAS ist es, das volle Potenzial Ihres vorhandenen
        Content Management Systems auszuschöpfen oder Ihr neues Projekt
        voranzutreiben.
      </p>
    </TextBlock>

    <TextBlock
      position="left"
      title="Volle Enterprise-Power aber leichtgewichtige Entwicklung."
      image={<LiveDevelopment width="300" height="182" />}
    >
      <p>
        Für uns als SOLUTAS, bringt das Magnolia CMS die Freude an der
        Implementation von Enterprise Web Projekten zurück.
      </p>
      <p>
        Magnolia CMS ist ein starkes stabiles System, das in Java gerschrieben
        ist und auf JCR aufbaut. Dank seiner einzigartigen Art der "Light
        Development" und der Möglichkeit, die gebrauchsfertige Magnolia Cloud zu
        nutzen, wird jedes Projekt in unglaublichen Dimensionen beschleunigt.
      </p>
      <p>
        Von Anfang an können wir uns auf Ihr eigentliches Ziel konzentrieren, da
        wir wissen, dass aufgrund des starken Hintergrunds von Magnolia CMS
        keine Grenzen gesetzt sind.
      </p>
    </TextBlock>

    <TextBlock
      position="right"
      title="Jam. JAM. JAMStack."
      image={<Developer width="300" height="182" />}
    >
      <p>
        Im Kern ist Jamstack eine moderne Webentwicklungsarchitektur. JAM
        bezieht sich auf clientseitiges JavaScript, wiederverwendbare APIs und
        vorgefertigtes Markup. Mit Jamstack können Sie die Site-Leistung
        verbessern, indem Sie beim Erstellen eine Reihe statischer Seiten
        rendern und diese in einem Content Delivery Network (CDN) bereitstellen.
      </p>
      <p>
        Im Gegensatz zu vielen etablierten Agenturen in diesem Sektor haben wir
        unsere Reise mit der festen Überzeugung begonnen, dass Sie die
        Frontend-Implementierung, insbesondere mit Java-basierten CMS-Systemen,
        vollständig vorantreiben müssen, um erfolgreich zu sein.
      </p>
    </TextBlock>
    <TextBlock>
      <p>
        Wir sind sehr stark in der Java-Welt, aber wir lieben die{" "}
        <span className="text-swiss">♥</span>
        Frontend-Entwicklung. Da wir uns als Unternehmen in beiden Welten
        gleichermaßen zu Hause fühlen, wird es{" "}
        <string>
          keine Fehlkommunikation mehr zwischen "Backend" und "Frontend"
          -Entwicklung geben
        </string>
        . Sie sehen kreative Lösungen, z. B. das Hinzufügen einer GraphQL-Ebene
        zu Ihrem Portfolio, um ältere Systeme zu verwalten. SOLUTAS ist ein
        Cloud Native Company.
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
        Im Kern führen wir unsere Implementierung mit unserer agilen Methodik
        durch. Wenn Sie jedoch Prince, Hermes oder eine andere Methodik
        verwenden, können wir unseren Engineering-Aufwand in Ihr bestehendes
        Projektmanagement-Framework einbetten. SOLUTAS hat auch Erfahrung in der
        Arbeit in regulierten Umgebungen.
      </p>
    </TextBlock>
    <TextBlock
      title="Erfolgreich mit 4D"
      position="right"
      image={<CelebrateImage width="300" height="211" />}
    >
      <div>
        <p>
          Normalerweise benutzen wir Phasen wie Discovery, Define, Develop,
          Deliver.
        </p>
        <p>
          Wir verwenden eine Methode namens Story Mapping, um Ihren gewünschten
          Funktionsumfang vollständig zu planen und eine vernünftige Roadmap zu
          erstellen. Sie wissen genau, was geliefert wird und was geplant ist.
          Dies erleichtert es Ihnen, Ihren internen Stakeholdern den Fortschritt
          und die zukünftige Planung mitzuteilen.
        </p>
      </div>
    </TextBlock>
    <TextBlock>
      <p>
        Genug geschrieben, kontaktieren Sie uns. Wir zeigen Ihnen gerne
        eine Demo und präsentieren Ihnen unser einzigartiges Vorgehen.
      </p>
    </TextBlock>
    <Form />
  </Layout>
)

export default SecondPage

import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/de"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import TextBlock from "../components/TextBlock"
import Form from "../components/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import HeroImage from "../assets/undraw_solution_mindset_34bi.svg"
import SwissLogo from "../assets/Schweizer-Kreuz.jpg"
import TimeImage from "../assets/undraw_season_change_f99v.svg"
import SoluneoOne from "../assets/soluneo-1.gif"
import LivebeamOne from "../assets/livebeam-1.gif"

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
                Wir innovieren.
              </h1>
              <h2 class="display-5">Für Sie. In der Schweiz.</h2>
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
      title="Soluneo. Lokal verbunden."
      image={
        <div>
          <img src={SoluneoOne} width="100%" />
        </div>
      }
    >
      <p>
        Soluneo (“die neue Lösung”), derzeit in der privaten Beta-Phase, bietet eine
        digitale Plattform für den Support von lokalen KMUs und Micro-Geschäften
        um eine lokal geteilte Kundenbasis aufzubauen. Dies indem es möglich für
        sie wird, einfache und einzigartige Web-Präsenz aufzubauen die zu einer
        erhöhten Konsumenten Sichtbarkeit führt und damit Verkaufszahlen steigen
        lässt.
      </p>
      <p>
        Der universale Webseiten- Editor bietet die best mögliche Flexibilität.
        Zum Beispiel ist es mit Soluneo möglich, eine gezielte Kampagne (wie
        “neu im Verkauf”) zu Kunden in der Nähe, mit einer einach zu bedienenden
        Kalendermanagement funktion zu erstellen.
      </p>
    </TextBlock>
    <TextBlock>
      <div>
        <p>
          Wir bieten Ihnen die einzigartige Option mit unserer E-Commerce-Lösung
          mit implementierter “Check-in” & “Check-out” Funktionalität, die
          Kundenzufriedenheit mit sicher gespeicherten Personendaten wie
          Bezahlung, Lieferungsadresse usw. zu erhöhen.
        </p>
        <strong>Jetzige & Gewünschte Funktionen:</strong>
        <ul>
          <li>
            Eine vollständige Web-CMS-Lösung für KMUs und Micro-Unternehmen mit
            Zugriff auf frei verfügbaren Bildern zur Nutzung. Sie können Inhalte
            auch von unterwegs via Telefon oder Tablet verändern.
          </li>
          <li>E-Commerce Lösung für einmalige Zahlungen.</li>
          <li>Abonnementverwaltung für wiederkehrende Einnahmen.</li>
          <li>
            Verwaltung von Kursen &amp; Workshops von Webseiten, von Buchung bis
            hin zur Bezahlung
          </li>
          <li>Dienstleistungen verwalten und anbieten</li>
          <li>
            Bereitstellungen von virtuellen Kursen &amp; Workshops über eine
            einzeigartige Live-TV ähnliche Videokonferenz Lösung.
          </li>
          <li>
            Geteilte Kundenbasis: Kunden die im einen Shop einkaufen oder an
            einem Kurs teilnehmen, müssen die Zahlungsinformationen nicht
            nochmals eingeben, wenn sie einen Kurs oder Produkt bei Ihnen
            kaufen.
          </li>
          <li>Push-Notifikationen für Kunden in der nächsten Umgebung.</li>
          <li>Lösung von Bankauszahlungen über die Platform auf Ihr Konto.</li>
          <li>“Touchless Payment” Berührungslose Bezahlungslösung </li>
        </ul>
        <p>
          Soluneo befindet sich in der geschlossenen Beta-Phase, aber unser Ziel
          ist es, die gesamte Plattform für einen fixen Preis auf den Markt zu
          bringen. Dies ohne Zusatz und versteckte Kosten. Einen Preis für die
          jetzigen Funktionen und alle zukünftigen Erweiterungen, die noch
          kommen werden.
        </p>
        <strong>Interessiert?</strong>{" "}
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            window.scroll({
              left: 0,
              top: document.querySelector("#contact-form").offsetTop - 120,
              behavior: "smooth",
            })
          }}
        >
          Kontaktieren Sie uns für eine Demonstration
        </a>{" "}
        wir freuen uns darauf, zu prüfen, ob wir unser Beta-Programm auf Sie
        ausweiten können.
      </div>
    </TextBlock>

    <TextBlock>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/2QP6SxUDYbA"
          allowfullscreen
        ></iframe>
      </div>
    </TextBlock>

    <TextBlock
      position="left"
      title="Livebeam.me - Erleben Sie Ihren Anlass mit den Augen Ihrer Gäste."
      image={
        <div>
          <img src={LivebeamOne} width="100%" />
        </div>
      }
    >
      <p>
        Livebeam.me startete als privates Projekt für eine Hochzeit, Geburtstag
        und Neujahrsparty. Nachdem viele Anfragen von Gästen kamen, die
        das Tool auch nutzen wollten, haben wir entschieden, in dieses Produkt
        zu investieren, um es öffentlich verfügbar zu machen.
      </p>
      <p>
        Corona hat uns schwer getroffen und wir konnten livebean.me nicht wie geplant
        veröffentlichen und wir sahen uns gezwungen das Projekt zu pausieren.
      </p>
    </TextBlock>
    <TextBlock>
      <div>
        <p>
          <strong>
            Aber wir glauben daran, dass Anlässe bald wieder möglich sind und
            deshalb haben wir wieder angefangen an Livebeam.me weiterzuarbeiten.
          </strong>{" "}
          Vor der Krise haben wir bereits so gutes Feedback zu Livebeam.me
          bekommen, dass wir es einfach nicht ignorieren können.
        </p>
        <p>
          Die Software funktioniert und man kann sie auch schon für Anlässe
          nutzen. Trotzdem haben wir uns dazu entschieden, mehr Erfahrungen
          sammeln zu wollen und die Software erst in einer kontrollierten
          Umgebung zu veröffentlichen.
        </p>
        <p>
          Unter{" "}
          <a href="http://www.livebeam.me" target="_blank">
            www.livebeam.me
          </a>{" "}
          kann man sich bei Interesse registrieren.
        </p>
        <p>
          Registrieren Sie sich für das Beta Programm und lassen Sie uns
          wissen, ob Sie livebeam.me schon für ein Event nutzen möchten. Wir kommen sehr
          gerne auf Sie zurück und geben Ihnen einen Demo-Account für Ihr Event.
        </p>
      </div>
    </TextBlock>

    <TextBlock>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/HUzgxscpsWM"
          allowfullscreen
        ></iframe>
      </div>
    </TextBlock>
    <Form />
  </Layout>
)

export default SecondPage

import React from "react"

import Layout from "../layouts/de"
import Link from "gatsby-link"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import IntlLink from "../components/IntlLink"
import TextBlock from "../components/TextBlock"
import Form from "../components/Form"
import Slide from "react-reveal/Slide"
import Flip from "react-reveal/Flip"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import Bounce from "react-reveal/Bounce"
import Wave from "../assets/wave.svg"
import HeroImage from "../assets/undraw_breaking_barriers_vnf3.svg"
import TimeImage from "../assets/undraw_season_change_f99v.svg"
import WalletImage from "../assets/undraw_wallet_aym5.svg"
import RunningImage from "../assets/undraw_finish_line_katerina_limpitsouni_xy20.svg"
import CelebrateImage from "../assets/undraw_celebration_0jvk.svg"

const IndexPage = props => (
  <Layout location={props.location}>
    <div>
      <Jumbotron fluid bsPrefix="hero">
        <div className="hero__content">
          <Container>
            <Row>
              <Col md={{ span: 4, offset: 1 }} className="hero__content--left">
                <HeroImage width="100%" height="100%" className="heroimg" />
              </Col>
              <Col md="7" className="hero__content--right">
                <h1 class="display-3 mb-4">DURCHBRECHE DIE GRENZEN</h1>
                <h2 class="display-5">UM DIE ZUKUNFT ZU GESTALTEN .</h2>
                {/*  <a className="btn btn-primary btn-sm" href="#" role="button">
                  getting started
                </a>*/}
              </Col>
            </Row>
          </Container>
        </div>
      </Jumbotron>

      <TextBlock
        position="right"
        title="Seien sie kreativ. Akzeptieren Sie keine Einschränkungen."
        image={<TimeImage width="300" height="182" />}
      >
        <p>
          Es gibt fast immer Barrieren, wenn Sie probieren das Richtige zu tun.
          Wir leben in einer sich schnell ändernden Welt. Die Erwartungen von
          Ihnen und Ihren Kunden wechseln. Nicht jeder kann ein
          Digitalisationsprojekt auf einer weissen Leinwand starten. Und auch
          wenn, es gibt Zeit-, Geld- und Technologieeinschränkungen.
        </p>
        <p>
          Für uns ist Technologie ein tolles Fahrzeug, trotzdem holen wir uns
          immer wieder die neueren Modelle. Wir folgen nicht nur den Trends, wir
          helfen die neuen Trends zu setzen gehen mit gutem Beispiel voran.
        </p>
      </TextBlock>

      <TextBlock
        title="Seien sie clever. Verschwenden Sie nicht Ihre Ressourcen."
        image={<WalletImage width="300" height="211" />}
      >
        <p>Ressourcen sind begrenzt in Geld und Zeit.</p>
        <p>
          Darum ist es wichtig in die Dinge zu investieren, die maximale
          Auswirkung auf den Erfolg Ihres Unternehmens haben.
        </p>
        <p>
          Sie wollen einen Partner der Ihnen hilft eine unvoreingenommene Sicht
          auf Ihr Unternehmen zu kriegen, einen Partner, der unterstützt und
          beratet um zum richtigen Zeitpunkt in das Richtige zu Investieren.
        </p>
      </TextBlock>

      <TextBlock
        position="right"
        title="Seien Sie schnell. Verlieren Sie nicht den Fokus."
        image={<RunningImage width="300" height="182" />}
      >
        <p>
          Ihr Unternehmen ist komplex und Sie stehen vor Ihren eigenen,
          speziellen Herausforderungen.
        </p>
        <p>
          Man kann sich nie allen Herausforderungen zur gleichen Zeit stellen,
          aber wir ermutigen Sie dazu, nicht stehen zu bleiben, sondern dass sie
          sich aktive Ihren Herausforderungen stellen mit uns als Rückendeckung.
          Wir erstellen Innovative Lösungen mit Ihnen, in kleinen Schritten zum
          Ziel ohne dabei Ihre Vision aus den Augen zu verlieren. Sie wollen
          einen Partner dem Sie vertrauen. Sie wollen einen Partner der in Ihrem
          Interesse handelt. Wir sind gerne Ihr Partner.
        </p>
      </TextBlock>

      <TextBlock
        title="Zeigen Sie Mut. Verfolgen Sie Ihre Ziele."
        image={<CelebrateImage width="300" height="211" />}
      >
        <p>
          Veränderungen und Neuerungen können beängstigend sein. Wir sind Ihr
          Partner, mit uns können Sie Ideen aufgleisen und Brainstormen. 
          Zusammen finden den richtigen Weg, Sie voran zu bringen.
        </p>
        <p>
          Sie verdienen es einen ehrlichen Partner zu haben, der mit
          Ihnen in die Zukunft schaut, Ihre Wünsche wahrnimmt; ohne dabei die
          Gegenwart aufs Spiel zu setzten.
        </p>
        <p>Starten Sie heute. Kontaktieren Sie uns jetzt.</p>
      </TextBlock>

      <Form />
      {/*   
      <Slide bottom cascade ssrFadeout ssrReveal>
      <Container className="text-centers section-header besoft">
        <h1 className="display-5">Be creative. Don't accept any constrains.</h1>
      </Container>
      </Slide>
      
      <Container className="mb-5 besoft">
        <Row>
          <Col md={{ span: 8 }} lg={{ span: 10 }}>          
          <p><strong>Be creative. Don't accept any constrains.</strong></p>
          <Fade left>
          <p>Do the best for your customers and your business.</p>
          <p>There are a lot of constrains out there when you try to do the right thing. We live in a fast chaning world. Your own and your cusotmers expectations are changing fast. 
            Not everybody can start on a greenfield. And if so, there are time, budget and technology constrains.
          </p>
          <p>We put you and your customer experience first. For us technology is a vehicle, still we live and breath the latest tehcnology. Not only do we follow, we innovate and lead.</p>
          </Fade>
          <a className="sol-btn" href="#12">Learn more</a>
          </Col>
          <Col>
          <img src={require("../assets/solutas-brief-weiss.svg")}/>
          </Col>
        </Row>
        
      </Container>      
      
      <Container className="text-centers section-header besoft">
        <h1 className="display-5">Break out!</h1>
      </Container>
      <Container className="mb-5 besoft">
        <Row>
          <Col md={{ span: 8 }} lg={{ span: 10 }}  data-aos='zoom-out-up'>
          <Fade left>
        <p>We have been around, when the Term Content Management System was not even invented. </p>
        
<p>We built websites in Perl. We even built them in C  and of course PHP. We also did CGI. And yes, Java as well. 
  We built webapps with ajax when it was just XMLHttpRequest and webapp wasn't even a word yet. Doesn’t ring a bell? 
  
  Doesn’t have to. 
  
  We built tiny small websites. We built huge news portals for TV and Radio stations. We consultated newspapers. We helped hospitals to organize their content. We were part of succesful aquiositions. We developed core components for hudge international content management systems, used by thousends of developers and marketers. We helped the worlds largest system integrators to be succesful. We helped the world most trusted agencies.</p>
  

<p>But now,  we all came finally together. We are here.</p>
</Fade>
          </Col>
          <Col>
          <img src={require("../assets/solutas-brief-weiss.svg")}/>
          </Col>
        </Row>
        
      </Container>
      <Slide bottom cascade ssrFadeout ssrReveal>
<Jumbotron fluid className="happyppl">

<Fade left>
<h1>Bridge the gap</h1>
</Fade>
</Jumbotron>
</Slide>

      <Container className="besoft">
        <ul>
      <Fade left>
      <li> We bridge the gap between</li>
      <li> IT, System Integrators</li>
      <li> and Marketers, Agencies</li>
<li> We are not a system integrator.</li>
<li> We are not an Agency.</li>
<li><strong>We are SOLUTAS.</strong> Because simplicity Matters!</li>
</Fade>
</ul>
        <IntlLink to="/page-2/"> zurseiten 234234</IntlLink>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </Container>*/}
    </div>
  </Layout>
)

export default IndexPage

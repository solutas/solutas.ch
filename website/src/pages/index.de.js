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
                <h1 class="display-3 mb-4">push the boundaries</h1>
                <h2 class="display-5">To shape your future.</h2>
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
        title="Seien Sie kreativ. Akzeptieren Sie keine Einschränkungen."
        image={<TimeImage width="300" height="182" />}
      >
        <p>
          Es gibt fast immer Barrieren, wenn Sie probieren das Richtige zu tun.
          Wir leben in einer sich schnell ändernden Welt. Die Erwartungen von
          Ihnen und Ihren Kunden wechseln. Nicht jeder kann sein Projekt auf
          einer grünen Wiese starten. Und selbst wenn, es gibt Zeit-, Geld- und
          technische Einschränkungen.
        </p>
        <p>
          Für uns ist Technologie ein Mittel zum Zweck, dennoch leben und atmen
          wir die neusten Technologien. Wir folgen nicht nur Trends, wir sind
          auch in der Lage zu innovieren und zu führen.
        </p>
      </TextBlock>

      <TextBlock
        title="Seien Sie clever. Verschwenden Sie nicht Ihre Ressourcen."
        image={<WalletImage width="300" height="211" />}
      >
        <p>
          Ressourcen sind begrenzt, unter anderem im Bezug auf Zeit und Geld.
        </p>
        <p>
          Darum ist es wichtig in die Dinge zu investieren, die eine maximale
          Auswirkung auf den Erfolg Ihres Unternehmens haben.
        </p>
        <p>
          Sie wollen einen Partner der Ihnen hilft eine externe Sicht auf Ihr
          Unternehmen zu bekommen, einen Partner, der Sie unterstützt und
          beratet, damit Sie zum richtigen Zeitpunkt in das Richtige
          investieren.
        </p>
      </TextBlock>

      <TextBlock
        position="right"
        title="Seien Sie schnell. Verlieren Sie nicht den Fokus."
        image={<RunningImage width="300" height="182" />}
      >
        <p>
          Ihr Unternehmen ist komplex und Sie stehen vor Ihren eigenen
          individuellen Herausforderungen.
        </p>
        <p>
          Sie können niemals jede Herausforderung, der Sie gegenüberstehen,
          gleichzeitig lösen und verbessern. Wir wissen das, wir ermutigen Sie
          und helfen Ihnen, nicht still zu stehen. Wir arbeiten mit Ihnen in
          kleinen Iterationen zusammen und verlieren Ihre langfristige Vision
          nie aus den Augen. Sie möchten einen vertrauenswürdigen Partner. Sie
          möchten einen Partner der in Ihrem besten Interesse handelt.
        </p>
      </TextBlock>

      <TextBlock
        title="Zeigen Sie Mut. Verfolgen Sie Ihre Ziele."
        image={<CelebrateImage width="300" height="211" />}
      >
        <p>
          Veränderungen und Verbesserungen können beängstigend sein. Sie müssen
          jetzt Ihr Geschäft am laufen halten und über die Zukunft nachdenken.
        </p>
        <p>
          Wir sind Ihr Sparringspartner. Sie können mit uns ein Brainstorming
          durchführen und uns Ihre Ideen mitteilen. Gemeinsam werden wir einen
          guten Weg finden, um Sie voranzubringen. Sie haben das Recht, einen
          ehrlichen Partner zu haben, der Ihnen hilft, Ihre Zukunft zu
          gestalten, ohne Ihre Gegenwart zu riskieren.
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

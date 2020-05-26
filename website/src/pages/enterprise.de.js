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
              <h1 class="display-3 mb-4">Your New Agency.</h1>
              <h2 class="display-5">For your Magnolia Projects.</h2>
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
      title="Take your CMS Project to the next level."
      image={<SuperHero width="300" height="182" />}
    >
      <p>
        One of our Founder alone has more then 20 Years expierence within the
        Enterprise Content Management field.
      </p>
      <p>
        He contributed to Open Source Projects such as Apache Sling (e.g.{" "}
        <a
          href="https://github.com/adobe/htl-spec/blob/master/SPECIFICATION.md"
          target="_blank"
        >
          the HTL library and specification
        </a>
        ) and influenced well known commercial Systems like Adobe AEM. Knowing
        all the pitfalls, our goal at SOLUTAS is to unfold the full potential of
        your existing Content Management System or to lift up your new Project.
      </p>
    </TextBlock>

    <TextBlock
      position="left"
      title="Full Power of Enterprise but lightway Development"
      image={<LiveDevelopment width="300" height="182" />}
    >
      <p>
        For us as at SOLUTAS, Magnolia CMS is bringing back the fun when
        implementing Enterprise Web Projects.
      </p>
      <p>
        Magnolia CMS is a strong stable system build in Java on top of JCR. But
        with it's unique way of Light Development, paired with the option to
        take advantage of the ready to use Magnolia Cloud, it will accelerate
        any Project in unbelievable dimensions.
      </p>
      <p>
        Right from the beginning, we can focus on your actual Goal, knowing
        there are no limits because of the strong background of Magnolia CMS.
      </p>
    </TextBlock>

    <TextBlock
      position="right"
      title="Jam. JAM. JAMStack."
      image={<Developer width="300" height="182" />}
    >
      <p>
        At its core, Jamstack is a modern web development architecture. JAM
        refers to client-side JavaScript, reusable APIs and prebuilt Markup.
        Jamstack allows you to improve site performance by rendering out a set
        of static pages at build time and deploying them to a content delivery
        network (CDN).
      </p>
      <p>
        Unlike many established Agencies in this Sector, we started our journey
        with the strong belief that in order to be successful you need to fully
        boost the Frontend implementation, especially with Java baked CMS
        Systems.
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
        portfolio to handle legacy systems. <strong>SOLUTAS</strong> is a Cloud Native Company.
      </p>      
    </TextBlock>
    <TextBlock
      position="left"
      title="We got your Project"
      image={<ScrumBoard width="300" height="182" />}
    >
      <p>
        We are not going to tell you any buzzwords about Agile and TDD
        Development. We are sure you have heart about it enough.
      </p>
      <p>
        At the core, we do our implementation using our Agile Methodology. But
        weather you are using Prince, Hermes or any other Methodology, we are
        able to embedd our Engineering effort within your existing Project
        Management framework. SOLUTAS has also experience in working in regulated environments.
      </p>
    </TextBlock>
    <TextBlock
      title="Successful with 4D "
      position="right"
      image={<CelebrateImage width="300" height="211" />}
    >
      <div>
        <p>
          Usually we are going to phases like Discovery, Define, Develop,
          Deliver.
        </p>
        <p>
          We are using a methodology called Story Mapping to fully plan out your
          desired featureset and to comeup with a reasonable Roadmap. You know
          exactly what will be delivered and what is planed. This makes it
          easier for you to communicate the progress and future planing to your
          internal Stakeholders.
        </p>
      </div>
    </TextBlock>
    <TextBlock>
      <p>
        Enough talking, let's get in touch with us. We are happy to give you a
        Demo and showcase our unique approach.
      </p>
    </TextBlock>
    <Form />
  </Layout>
)

export default SecondPage

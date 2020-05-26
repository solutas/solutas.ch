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
      title="About Us."
      image={
        <div>
          {/*<Founder width="300" height="187" />*/}
          <img src={Team} height="250" style={{ borderRadius: "10px" }} />
        </div>
      }
    >
      <p>
        Our two Founders do have two totally different and unique Backgrounds.
        Janine, a licensed Nurse and Şenol, a Computer Scientist. While both
        have had working in different domains, they both realized that
        technology, especially in Software Engineering needs to be crafted
        around actual Human beings.​
      </p>
      <p>
        Processes and Solutions need to be easy to understand and usable to be
        successfully adapted.​
      </p>
    </TextBlock>
    <TextBlock>
      <p>
        Merging over 10 Years experience in LifeScience, Tele Medicine,
        practicing Nursing with more than 20 Years experience in Software
        Engineering in Digital Marketing, Media and Television resulted in
        SOLUTAS, because simplicity matters.​
      </p>
    </TextBlock>
    <TextBlock
      title="Our Current Setup."
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
            <strong>René</strong> Managing Partner, Sales
          </li>
          <li>
            <strong>Clelia</strong> Product &amp; Community Manager, Trainings &amp; Livebeam.me
          </li>
          <li>
            <strong>Lucas</strong> Intern, Frontend and Cloud Engineering
          </li>
        </ul>
        .... and a big network of hightly skilled friends.
      </div>
    </TextBlock>

    <Form />
  </Layout>
)

export default SecondPage

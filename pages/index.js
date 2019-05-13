import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import { NavLink, Section } from "../components/TopNavLink";
import EventService from "../services/ScrollEventService";

import "../scss/vanilla/index.scss";

import Blur from "../components/Blur";

import Logo from "../assets/solutas-icon.png";
import Logo2 from "../assets/solutas-brief-weiss.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
/*
export default () => {
  return (
    <div className="wrapper">
      <nav className="main-nav">
        <div className="logo">
          <a href="/">
            <img src={Logo} />
          </a>
        </div>

        <ul className="main-nav-items">
          <li className="animated jackInTheBox">
            <a href="">About Us.</a>
          </li>
          <li className="animated zoomIn">
            <a href="">Services.</a>
          </li>
          <li className="animated bounceInRight">
            <a href="">Contact Us.</a>
          </li>
        </ul>
      </nav>
      <header className="main-header">
        <img src="/static/solutas-brief-2.svg" className="animated fadeInUp" />
      </header>
      <main className="content">
        <section>
          <Slide bottom opposite cascade>
            <h1>Our Expertice. Your Benefit.</h1>
          </Slide>
          <Slide bottom cascade>
          <article>
            <h1>About Us.</h1>
            <p>
              We are a Software Consultancy and Engineering Company located in
              Basel, Switzerland.
            </p>
            <p>
              Our two Founders do have two totally different and unique
              Backgrounds. A licensed Nurse and a Computer Scientist. While both
              have had working in different domains, they both realized that
              technology, espacially in Software Engineering needs to be crafted
              around actual Human needs.
            </p>
            <p>
              Merging over 10 Years experience in LifeScience, Tele Medicin,
              practicing Nurcing with more then 20 Years experience in Software
              Engineering in Digital Marketing, Media and Television resulted in
              SOLUTAS, because simplicty matters.
            </p>
            <p>
              We believe that starting any Software Project focusing on the
              Human beeing going to actually using the Application will
              ultimatvily lead to best results.
            </p>

            <h1>At SOLUTAS we...</h1>

            <ul className="heartlist">
              <Fade left>
                <li>do love to solve very complex problems</li>
                <li>do love technology</li>
                <li>
                  do love to transfer your complex challenges into beautiful
                  small and simple solutions
                </li>
                <li>do love to design the solutions for you</li>
                <li>do love to craft the software for you</li>
                <li>do love to help you to focus on your actual work</li>
              </Fade>
            </ul>
          </article>
          </Slide>
          <article>
            <h1>Engineering to make you happy.</h1>
            <p>
              There is a correlation between over complicated, complex software
              code, architecture and UI design and slow user adaption, usibility
              and higher project costs.
            </p>
            <p>
              Our definition of done is reached when happy users are using our
              Software. Once we see how we could improve your daily life.
            </p>
            <h1>In our Team...</h1>
            <ul className="smilelist">
              <Fade left>
                <li>
                  We believe that everybody diserves to have a custom software
                  crafted to their individual needs.
                </li>
                <li>
                  We believe that this is possible regardless of the size of
                  your organization.
                </li>
                <li>We believe that there is a solution for everything</li>
                <li>
                  We beleive that budget shouldn't stop you getting the
                  Application you need
                </li>
              </Fade>
            </ul>
          </article>
        </section>
        <section>
          <Slide bottom opposite cascade>
            <h1>Our Services. Your Solutions.</h1>
          </Slide>
          <article>
            <h1>Consulting</h1>
            <ul className="smilelist">
              <Fade left>
                <li>Digital Transformation</li>
                <li>Software Architecture</li>
                <li>Agile Coaching</li>
                <li>Escalation Management</li>
                <li>Technical Project and Delivery Management</li>
                <li>Change Management</li>
              </Fade>
            </ul>
          </article>
          <article>
            <h1>Software Engineering.</h1>
            <ul className="smilelist">
              <Fade left>
                <li>Custom Mobile and Desktop App Development</li>
                <li>API Gateway Development</li>
                <li>Big Data, Machinie Learning Solutions</li>
                <li>Custom IoT and embedded Devices</li>
                <li>
                  Enterprise level Web Content Management Solutions (Adobe AEM,
                  Magnolia,...)
                </li>
              </Fade>
            </ul>
          </article>
          <p>If it's not listed, ask us and we find a solution.</p>
        </section>
      </main>
      <footer className="main-footer">this is the footer</footer>
    </div>
  );
};
*/

export default class Vanilla extends React.Component {
  scrolled = false;
  state = {
    scrolled: false
  };
  constructor() {
    super();
  }
  componentDidMount() {
    scrollSpy.update();
    window.addEventListener("scroll", this.handleScrollEvent);
  }

  handleScrollEvent = () => {
    if (window.pageYOffset >= 50) {
      if (!this.scrolled) {
        this.scrolled = true;
        this.setState({
          scrolled: true
        });
      }
    } else {
      if (this.scrolled) {
        this.scrolled = false;
        this.setState({
          scrolled: false
        });
      }
    }
  };

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
    window.removeEventListener(this.handleScrollEvent);
  }
  render() {
    return (
      <div className="wrapper" id="top">
        <nav className={this.state.scrolled ? "main-nav scrolled" : "main-nav"}>
          <Link className="logo" to="top" smooth={true} duration={500}>
            <img src={Logo} />
          </Link>

          <ul className="main-nav-items">
            <NavLink
              className="animated jackInTheBox"
              activeClass="active"
              to="about-us"
              offset={-50}
              spy={true}
              smooth={true}
              duration={500}
            >
              About Us.
            </NavLink>
            <NavLink
              className="animated zoomIn"
              activeClass="active"
              to="services"
              spy={true}
              offset={-25}
              smooth={true}
              duration={500}
            >
              Services.
            </NavLink>
            <NavLink
              className="animated bounceInRight"
              activeClass="active"
              to="contact-us"
              spy={true}
              offset={-25}
              smooth={true}
              duration={500}
            >
              Contact Us.
            </NavLink>
          </ul>
        </nav>
        <header className="main-header">
          <img
            src="/static/solutas-brief-2.svg"
            className="animated fadeInUp"
          />
        </header>
        <main className="content">
          <Section
            id="about-us"
            title="Our Expertice. Your Benefit."
            color="#dd851b"
          >
            <section className="container">
              <Slide bottom cascade ssrFadeout ssrReveal>
                <article>
                  <h1>Engineering to make you happy.</h1>

                  <p>
                    There is a correlation between over complicated, complex
                    software code, architecture and UI design and slow user
                    adaption, usibility and higher project costs.
                  </p>
                  <p>
                    Our definition of done is reached when happy users are using
                    our Software. Once we see how we could improve your daily
                    life.
                  </p>
                </article>
              </Slide>
              <article>
                <h1>At SOLUTAS we...</h1>

                <ul className="heartlist">
                  <Fade left>
                    <li>do love to solve very complex problems</li>
                    <li>do love technology</li>
                    <li>
                      do love to transfer your complex challenges into beautiful
                      small and simple solutions
                    </li>
                    <li>do love to design the solutions for you</li>
                    <li>do love to craft the software for you</li>
                    <li>do love to help you to focus on your actual work</li>
                  </Fade>
                </ul>
              </article>
            </section>
          </Section>
          <Section
            id="services"
            title="Our Services. Your Solution."
            color="#4b6cb7"
          >
            <section className="container">
              <article>
                <h1>Consulting</h1>
                <ul className="smilelist">
                  <Fade left>
                    <li>Digital Transformation</li>
                    <li>Software Architecture</li>
                    <li>Agile Coaching</li>
                    <li>Escalation Management</li>
                    <li>Technical Project and Delivery Management</li>
                    <li>Change Management</li>
                  </Fade>
                </ul>
              </article>
              <article>
                <h1>Software Engineering.</h1>
                <ul className="smilelist">
                  <Fade left>
                    <li>Custom Mobile and Desktop App Development</li>
                    <li>API Gateway Development</li>
                    <li>Big Data, Machinie Learning Solutions</li>
                    <li>Custom IoT and embedded Devices</li>
                    <li>
                      Enterprise level Web Content Management Solutions (Adobe
                      AEM, Magnolia,...)
                    </li>
                  </Fade>
                </ul>
              </article>
              {/*<h2 className="full-row">
                If it's not listed, ask us and we find a solution.
              </h2> */}
            </section>
          </Section>
          <Section id="contact-us" title="Contact Us.">
            <section className="container">
              <article>
                <h1>About Us.</h1>

                <p>
                  We are a Software Consultancy and Engineering Company located
                  in Basel, Switzerland.
                </p>
                <p>
                  Our two Founders do have two totally different and unique
                  Backgrounds. A licensed Nurse and a Computer Scientist. While
                  both have had working in different domains, they both realized
                  that technology, espacially in Software Engineering needs to
                  be crafted around actual Human needs.
                </p>
                <p>
                  Merging over 10 Years experience in LifeScience, Tele Medicin,
                  practicing Nurcing with more then 20 Years experience in
                  Software Engineering in Digital Marketing, Media and
                  Television resulted in SOLUTAS, because simplicty matters.
                </p>
              </article>

              <article>
                <h1>In our Team...</h1>
                <ul className="smilelist">
                  <Fade left>
                    <li>
                      We believe that everybody diserves to have a custom
                      software crafted to their individual needs.
                    </li>
                    <li>
                      We believe that this is possible regardless of the size of
                      your organization.
                    </li>
                    <li>We believe that there is a solution for everything</li>
                    <li>
                      We beleive that budget shouldn't stop you getting the
                      Application you need
                    </li>
                  </Fade>
                </ul>
              </article>
            </section>
          </Section>
        </main>
        <footer className="main-footer">
          <section className="container">
            <img src="/static/solutas-brief-2.svg" />
            <address>
              <strong>SOLUTAS GmbH</strong>
              <br />
              Paradieshofstrasse 117
              <br />
              4054 Basel, Switzerland
            </address>
            <address>
              <abbr title="Phone">Phone</abbr> <Blur t/><br />
              <abbr title="E-Mail">E-Mail</abbr> <Blur a />
            </address>
            <address>
              <abbr title="CH VAT No">CH VAT No</abbr> CH-234.973.545 MWST
              <br />
              <abbr title="USt-IdNr">USt-IdNr</abbr> CH-234.973.545
            </address>
          </section>
          <h2 className="copyright">
            Copyright &copy; 2019 SOLUTAS GmbH, Switzerland. All rights
            reserved.
          </h2>
        </footer>
      </div>
    );
  }
}

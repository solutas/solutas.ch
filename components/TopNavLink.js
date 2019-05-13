import React from "react";
import Scroll from "react-scroll";
import Slide from "react-reveal/Slide";
let ScrollLink = Scroll.ScrollLink;
let ScrollElement = Scroll.ScrollElement;

let Link = props => (
  <li className="animated jackInTheBox" {...props}>
    <a href="">{props.children}</a>
  </li>
);

Link = ScrollLink(Link);
 
let SectionElement = props => (
  <section className={props.className} id={props.id}>
    <Slide bottom opposite cascade ssrFadeout ssrReveal>
      <h1 className="section-title">{props.title}</h1>
    </Slide>
    {props.children}
  </section>
);

SectionElement = ScrollElement(SectionElement);

export const Section = SectionElement;
export const NavLink = Link;

export default Link;

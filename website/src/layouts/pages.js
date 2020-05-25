import React from "react"
import Link from "gatsby-link"
import Layout from "./de"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StaticQuery, graphql } from "gatsby"
const SecondPage = ({ data, pageContext: { business, page }, ...props }) => {
  
  console.log(data)
  return(
  <Layout location={props.location}>
    <h1>{page.content.meta.title}</h1>
    <h3>{business.name}</h3>
    <h2>{page.content.meta.subtitle}</h2>
  </Layout>
)}

export default SecondPage
/*
export const query = graphql`
  query($id: String) {
    pages(id: { eq: $id }) {
      id
      languages {
        de {
          meta {
            title
            subtitle
            teaser
          }
          parsys {
            id
            type

          }
        }
      }
    }
  }
`*/

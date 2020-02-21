import React from "react"
import Link from "gatsby-link"
import Layout from "../../layouts/en"

const SecondPage = props => (
  <Layout location={props.location}>
    <div class="container">
      <h1>profile en versiasdfasdfon</h1>
      <p>backt o home pages</p>
      <Link to="/">zurück zur Home</Link>
    </div>
  </Layout>
)

export default SecondPage

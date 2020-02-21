import React from "react"
import Link from "gatsby-link"
import Layout from "../../layouts/de"

const SecondPage = props => (
  <Layout location={props.location}>
    <div class="container">
      <h1>Profile settings</h1>
      <p>gehe zurück zur seite2</p>
      <Link to="/de">zurück zur Home</Link>
    </div>
  </Layout>
)

export default SecondPage

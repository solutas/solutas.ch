import React from "react"
import Link from "gatsby-link"
import Layout from "../../layouts/en"

const SecondPage = props => (
  <Layout location={props.location}>
    <div class="container">
      <h1>Profile index</h1>
      <p>gehe asdlkfashjdf zur seite2</p>
      <Link to="/profile/settings">settings</Link>
    </div>
  </Layout>
)

export default SecondPage

import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/en"

const SecondPage = props => (
  <Layout location={props.location}>
    <div class="container">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
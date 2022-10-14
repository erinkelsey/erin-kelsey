import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"

import "./_base.scss"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Home page</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

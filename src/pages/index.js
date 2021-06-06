import "../styles/index.css"

import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import Dogs from "../components/Dogs"

export default function Home({ data }) {
  return (
    <Layout>
      <div class="main-content">
        <h1>What's up!</h1>
      </div>
      <p>
        This is a place for me to share my dev experience whether I am learning
        a new framework, found a bug (and hopefully a solution), or I just want
        to talk about a project I am working on.
      </p>
      <Dogs data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    cooperPic: file(base: { eq: "cooper.jpeg" }) {
      publicURL
    }
    mayblePic: file(base: { eq: "mayble.jpeg" }) {
      publicURL
    }
  }
`

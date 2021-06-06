import "../styles/index.css"

import { graphql } from "gatsby"
import React from "react"

import Layout from '../components/Layout'

export default function Home({ data }) {
    return (
      <Layout>
        <h1>Test</h1>
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

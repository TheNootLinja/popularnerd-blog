import { graphql } from "gatsby"
import React from "react"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata;
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
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
  }
`

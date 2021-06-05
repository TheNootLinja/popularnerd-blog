import { graphql } from "gatsby"
import React from "react"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata;
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>

        <img src={data.cooperPic.publicURL} alt="Cooper the pomeranian" />
        <img src={data.mayblePic.publicURL} alt="Mayble the pug" />
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
    cooperPic: file(base: { eq: "cooper.jpeg" }) {
      publicURL
    }
    mayblePic: file(base: { eq: "mayble.jpeg" }) {
      publicURL
    }
  }
`

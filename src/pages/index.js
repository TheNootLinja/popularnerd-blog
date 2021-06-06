import "../styles/index.css"

import { graphql } from "gatsby"
import React from "react"

import Header from '../components/Header'

export default function Home({ data }) {
    return (
      <div>
        <Header/>
        <div className='flex'>
          <div className='dog-card'>
            <h2>Cooper</h2>
            <img src={data.cooperPic.publicURL} alt="" />
          </div>
          <div className='dog-card'>
            <h2>Mayble</h2>
            <img src={data.mayblePic.publicURL} alt="" />
          </div>
        </div>
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

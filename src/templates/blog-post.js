import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout'

export default function BlogPost({ data }) {
    const post = data.markdownRemark;

  return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <small>{post.frontmatter.date}</small>
                <div dangerouslySetInnerHTML={{__html: post.html }}/>
            </div>
        </Layout>
  )
}

export const pageQuery = graphql`
    query BlogQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`;

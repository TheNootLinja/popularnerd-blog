import { graphql, Link } from "gatsby"
import React from "react"

import '../styles/Blog.styles.css'

import Layout from '../components/Layout'

export default function blog({ data }) {
  const { posts } = data.blog
  return (
    <Layout>
        <div className='blog'>
            <h1>Blog Posts</h1>

            {posts.map(post => (
                <article className='blog-preview' key={post.id}>
                <Link to={"/blog" + post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
                </Link>
                <small>
                    {post.frontmatter.author}, {post.frontmatter.date}
                </small>
                <p>{post.excerpt}</p>
                </article>
            ))}
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
          fields {
              slug
          }
        frontmatter {
          date
          title
          author
        }
        excerpt
        id
      }
    }
  }
`

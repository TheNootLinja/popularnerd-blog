import { graphql, Link } from "gatsby"
import React from "react"

export default function blog({ data }) {
  const { posts } = data.blog
  return (
    <div>
      <h1>Blog Posts</h1>

      {posts.map(post => (
        <article key={post.id}>
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

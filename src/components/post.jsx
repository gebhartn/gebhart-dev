import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from './layout'
import SEO from './seo'

const shortcodes = { Link }
const Post = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.excerpt}
        pathname={mdx.slug}
        canonicalUrl={mdx.frontmatter.canonicalUrl}
      />
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}
export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        canonicalUrl
      }
    }
  }
`

export default Post

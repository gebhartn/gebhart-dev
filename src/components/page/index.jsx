import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../layout'
import Seo from '../seo'

const shortcodes = { Link }
const Page = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Seo title={mdx.frontmatter.title} description={mdx.excerpt} />
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
      }
    }
  }
`

export default Page

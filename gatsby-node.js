const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }

  const all = result.data.allMdx.edges
  const posts = all.filter(post => post.node.frontmatter.template === 'post')
  const pages = all.filter(post => post.node.frontmatter.template === 'page')

  posts.forEach(({ node }) => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: path.resolve(`./src/components/post/index.jsx`),
      context: { id: node.id },
    })
  })

  pages.forEach(({ node }) => {
    const checkPath = node.fields.slug === '/home/' ? '/' : node.fields.slug

    createPage({
      path: checkPath,
      component: path.resolve(`./src/components/page/index.jsx`),
      context: { id: node.id },
    })
  })
}

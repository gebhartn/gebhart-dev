module.exports = {
  siteMetadata: {
    siteTitle: 'Nicholas Gebhart',
    siteTitleAlt: 'Nicholas Gebhart - Software Engineer',
    siteHeadline: 'Nicholas Gebhart is a Software Engineer',
    siteUrl: 'https://gebhart.dev',
    siteDescription:
      'Nicholas Gebhart is a professional Software Engineer specializing in modern application development and technologies',
    siteLanguage: 'en',
    siteImage: '/banner.png', // TODO: find out what this is for offline/manifest
    author: 'Nicholas Gebhart',
    // eslint-disable-next-line global-require
    siteData: require('./data/site-config'),
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nicholas Gebhart is a Software Engineer',
        short_name: 'N. Gebhart',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: './static/favicon-32x32.png',
        icon_options: {
          purpose: 'any maskable',
        },
        icons: [
          {
            src: './static/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: './static/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: './static/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './static/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: { frontmatter: { template: { eq: "post"} } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Nicholas Gebhart's RSS Feed",
          },
        ],
      },
    },
  ],
}

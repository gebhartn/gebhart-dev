import { graphql, useStaticQuery } from 'gatsby'

const useFooterData = () => {
  const data = useStaticQuery(graphql`
    query FooterData {
      site {
        siteMetadata {
          siteData {
            footer {
              logos {
                internal
                href
                title
                alt
                target
                rel
                src
              }
              text {
                internal
                name
                to
              }
            }
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.siteData
}

export default useFooterData

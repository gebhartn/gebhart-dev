import { graphql, useStaticQuery } from 'gatsby'

const useNavigationData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteData {
            navigation {
              name
              to
            }
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.siteData
}

export default useNavigationData

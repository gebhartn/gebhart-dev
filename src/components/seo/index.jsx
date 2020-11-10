import * as React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import { useSiteMetadata } from '../../hooks'

const Seo = ({ title = '', description = '', pathname = '', image = '', canonicalUrl = '', children = null }) => {
  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ''}`,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet title={title} defaultTitle={defaultTitle} titleTemplate={`%s | ${siteTitle}`}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />
      <meta property="twitter:image:alt" content={seo.description} />
      <meta property="twitter:creator" content={author} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css" />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/static/favicon-32x32.png')} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/static/favicon-16x16.png')} />
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/static/apple-touch-icon.png')} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {children}
    </Helmet>
  )
}

export default Seo

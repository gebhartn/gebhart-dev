import * as React from 'react'
import SEO from '../seo'
import Global from './styles.jsx'

const Layout = ({ children }) => (
  <>
    <SEO />
    <Global />
    {children}
  </>
)

export default Layout

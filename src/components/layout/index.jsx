import * as React from 'react'
import SEO from '../seo'
import Navigation from '../navigation'
import Footer from '../footer'

const Layout = ({ children }) => (
  <>
    <SEO />
    <div>
      <div>
        <Navigation />
        <main id="main">{children}</main>
      </div>
      <Footer />
    </div>
  </>
)

export default Layout

import * as React from 'react'

const Logo = ({ alt, href, rel, src, target, title }) => (
  <a href={href} title={title}>
    <img
      src={src}
      alt={alt}
      target={target}
      rel={rel}
      style={{
        maxWidth: '25px',
        minWidth: '25px',
        maxHeight: '25px',
        minHeight: '25px',
      }}
    />
  </a>
)

export default Logo

import * as React from 'react'
import { Link } from 'gatsby'

const Content = ({ internal, name, to }) =>
  internal ? (
    <Link to={to}>{name}</Link>
  ) : (
    <a href={to} title={name} rel="noopener noreferrer">
      {name}
    </a>
  )

export default Content

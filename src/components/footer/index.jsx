import * as React from 'react'
import { useFooterData } from '../../hooks'
import Logo from './logo'
import Content from './content'

const Footer = () => {
  const { footer } = useFooterData()
  const cx = {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  return (
    <footer style={cx}>
      <div>{footer.logos.map(Logo)}</div>
      <div>{footer.text.map(Content)}</div>
    </footer>
  )
}

export default Footer

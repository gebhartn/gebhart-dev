import * as React from 'react'
import { Link } from 'gatsby'
import { useNavigationData } from '../../hooks'
// import { useHandleScroll } from '../../hooks'

const Navigation = () => {
  // const SCROLL_Y_OFFSET = 20

  const { navigation } = useNavigationData()
  // const scrolled = useHandleScroll(SCROLL_Y_OFFSET)

  return (
    <nav>
      <div>
        {navigation.map(({ name, to }) => (
          <Link to={to} title={name} key={name}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation

import * as React from 'react'

const useHandleScroll = limit => {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      window.scrollY > limit ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [limit])

  return scrolled
}

export default useHandleScroll

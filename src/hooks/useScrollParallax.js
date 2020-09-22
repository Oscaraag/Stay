import { useState, useEffect } from 'react'

export const useScrollParallax = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    if (window.pageYOffset > 1400) {
      setOffsetY(window.pageYOffset)
    } else {
      setOffsetY(0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { offsetY }
}

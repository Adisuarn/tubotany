import { useEffect, useState } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } =
    typeof window !== 'undefined' ? window : { innerWidth: 0, innerHeight: 0 }
  return {
    width,
    height,
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

import { useEffect, useRef } from 'react'

/** Return whether loaded */
export const useLoaded = (): boolean => {
  const isLoaded = useRef(false)

  useEffect(() => {
    isLoaded.current = true
  }, [])

  return isLoaded.current
}

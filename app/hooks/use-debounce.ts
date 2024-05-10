"use client"

import { useEffect, useState } from "react"

export const useDebounce = <T>(
  value: T,
  callback?: () => void,
  delay = 500
) => {
  const [debounceValue, setDebounceValue] = useState<T>(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value)
      callback && callback()
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debounceValue
}

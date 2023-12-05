"use client"
import { useLayoutEffect, useState } from "react"

/**
 *
 * @param isHydrated
 * isHydrated 의 상태에 따라 hydration check
 */

export const useHydrationCheck = (
  // this arguement could be any state you want to check hydration
  isHydrated?: boolean,
  isLoading?: boolean
) => {
  const [dehydrate, setDehydrate] = useState(false)

  useLayoutEffect(() => {
    setDehydrate(true)
  }, [])

  if (
    !dehydrate ||
    // you can add another state to check hydrate ||
    isLoading
  ) {
    return {
      isLoading: true,
      component: <>Some component to be shown up WITH hydration like loading</>,
    }
  }

  return {
    isLoading: false,
    component: <>Some component to be shown up WITHOUT hydration</>,
  }
}

import { useState, useCallback } from 'react'

// Define the type for the async function that will be passed to the hook.
type AsyncFunction<T extends any[]> = (...args: T) => Promise<any>

// Define the type for the return value of the hook.
type AsyncHookReturn<T extends any[]> = [
  { data: any | null; loading: boolean; error: string | null },
  (...args: T) => Promise<void>,
]

export function useAsync<T extends any[]>(
  asyncFunc: AsyncFunction<T>,
): AsyncHookReturn<T> {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<any | null>(null)

  // Wrap the provided function with loading/error/data handling
  const wrappedFunc = useCallback(
    async (...args: T) => {
      setLoading(true)
      setError(null)
      setData(null)
      try {
        const result = await asyncFunc(...args)
        setData(result)
      } catch (e: any) {
        setError(e.message || 'An error occurred')
      } finally {
        setLoading(false)
      }
    },
    [asyncFunc],
  )

  return [{ data, loading, error }, wrappedFunc]
}

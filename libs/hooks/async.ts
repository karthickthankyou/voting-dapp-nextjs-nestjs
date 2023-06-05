import { useState, useCallback, useEffect } from 'react'
import { catchError, debounceTime, EMPTY, Subject, tap } from 'rxjs'

// Define the type for the async function that will be passed to the hook.
type AsyncFunction<T extends any[]> = (...args: T) => Promise<any>

// Define the type for the return value of the hook.
type AsyncHookReturn<T extends any[]> = [
  { data: any | null; loading: boolean; error: string | null },
  (...args: T) => Promise<void>,
]

export function useAsync<T extends any[]>(
  asyncFunc: AsyncFunction<T>,
  onSuccess?: (result: any) => void,
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
        if (onSuccess) {
          onSuccess(result)
        }
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

const useDebounce = (delay: number = 1000) => {
  const [debouncedSet$] = useState(() => new Subject<() => void>())
  useEffect(() => {
    const subscription = debouncedSet$
      .pipe(
        debounceTime(delay),
        tap((func) => func()),
        catchError(() => EMPTY),
      )
      .subscribe()
    return () => subscription.unsubscribe()
  }, [delay, debouncedSet$])

  return debouncedSet$
}

const useDebouncedValue = <T>(value: T, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const debouncedSet$ = useDebounce(delay)

  useEffect(() => {
    debouncedSet$.next(() => setDebouncedValue(value))
  }, [debouncedSet$, value])

  return debouncedValue
}

export { useDebounce, useDebouncedValue }

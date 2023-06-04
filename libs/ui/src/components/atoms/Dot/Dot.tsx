import { ReactNode } from 'react'

export interface IDotProps {
  children?: ReactNode
}

const PulsingDot = ({ children }: IDotProps) => {
  if (children)
    return (
      <div className="absolute top-0 px-2 bg-yellow-500 rounded-full left-full animate-pulse">
        {children}
      </div>
    )
  return (
    <div className="absolute top-0 bg-yellow-500 rounded-full left-full animate-pulse">
      <div className="w-2 h-2" />
    </div>
  )
}

export { PulsingDot }

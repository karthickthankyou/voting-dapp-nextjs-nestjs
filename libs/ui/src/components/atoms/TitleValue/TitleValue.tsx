import { ReactNode } from 'react'

export const TitleValue = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <div>
    <strong className="font-semibold">{title}</strong>{' '}
    <div className="text-sm">{children}</div>
  </div>
)

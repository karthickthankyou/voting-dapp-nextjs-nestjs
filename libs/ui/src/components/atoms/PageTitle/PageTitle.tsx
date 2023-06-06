import { ReactNode } from 'react'

export interface IPageTitleProps {
  children: ReactNode
}

export const PageTitle = ({ children }: IPageTitleProps) => {
  return <h1 className="pt-2 mb-4 text-lg font-bold">{children}</h1>
}

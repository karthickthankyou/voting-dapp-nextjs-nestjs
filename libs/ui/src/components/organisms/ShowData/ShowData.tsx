import { ReactNode } from 'react'
import { LoaderPanel } from '../../atoms/Loader'
import { IconBox } from '@tabler/icons-react'
import { AlertSection } from '../AlertSection'
import { Pagination } from '../../molecules/Pagination'

export interface IShowDataProps {
  loading: boolean
  error?: string
  pagination: {
    skip?: number
    take?: number
    resultCount?: number
    totalCount?: number
    setSkip: (skip: number) => void
    setTake: (take: number) => void
  }

  children?: ReactNode
  className?: string
  hidePagination?: boolean
}
export const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-60 bg-gray-50">
      <IconBox className="w-10 h-10" />
      <div className="text-sm">No results</div>
    </div>
  )
}

export const ShowData = ({
  loading,
  error,
  pagination: {
    resultCount = 0,
    setSkip,
    setTake,
    skip = 0,
    take = 12,
    totalCount = 0,
  },
  hidePagination = false,
  children,

  className = 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}: IShowDataProps) => {
  return (
    <div>
      {error && (
        <AlertSection>
          Oops. Something went wrong.
          <span className="text-xs">Psst. {error}</span>
        </AlertSection>
      )}
      {loading && <LoaderPanel />}
      {!loading && !error && resultCount === 0 && <NoResults />}
      {!loading && resultCount > 0 && (
        <div>
          <div className={className}>{children}</div>
          {!hidePagination ? (
            <div className="flex justify-center">
              <Pagination
                count={totalCount || 0}
                page={(skip || 0) / (take || 12)}
                rowsPerPage={take || 0}
                rowsPerPageOptions={[2, 4, 12, 24, 36, 48]}
                onPageChange={(v, c) => setSkip(c * (take || 12))}
                onRowsPerPageChange={(v) => {
                  setTake(+v.target.value)
                }}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

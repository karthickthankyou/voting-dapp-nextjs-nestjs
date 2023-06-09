import MuiPagination, { PaginationProps } from '@mui/material/Pagination'

export interface IPaginationProps {}

export const Pagination = ({
  count,
  page,
  onChange,
  ...props
}: PaginationProps) => (
  <MuiPagination
    count={count}
    page={page}
    onChange={onChange}
    classes={{
      root: 'mt-4 border-0',
    }}
    {...props}
  />
)

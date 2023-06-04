import { Loader } from '../Loader'

export type IPlainButtonProps = {
  loading?: boolean
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export const PlainButton = ({
  children,
  loading,
  ...props
}: IPlainButtonProps) => {
  return <button {...props}>{loading ? <Loader /> : children}</button>
}

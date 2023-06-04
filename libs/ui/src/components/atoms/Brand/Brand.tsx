import { BrandIcon } from '../BrandIcon'

export interface IBrandProps {
  shortForm?: boolean
  className?: string
  type?: 'admin' | 'manager' | 'valet'
}

export const Brand = ({
  shortForm = false,
  className,
  type = undefined,
}: IBrandProps) => {
  return (
    <div className={`grid place-items-center ${className}`}>
      <div className="text-xl ">
        {shortForm ? (
          <div className="flex gap-1">
            <BrandIcon /> A.
          </div>
        ) : (
          <div className="flex items-center gap-1 font-medium tracking-tighter font-playfair">
            <BrandIcon /> Autospace
            <span className="text-xs">{type}</span>
          </div>
        )}
      </div>
    </div>
  )
}

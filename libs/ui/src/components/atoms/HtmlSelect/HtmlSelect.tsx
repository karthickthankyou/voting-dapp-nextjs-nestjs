import { IconChevronDown } from '@tabler/icons-react'
import React, { InputHTMLAttributes } from 'react'

export const HtmlSelect = React.forwardRef<
  HTMLSelectElement,
  InputHTMLAttributes<HTMLSelectElement>
>(
  (
    { children, className, ...props }: InputHTMLAttributes<HTMLSelectElement>,
    ref,
  ) => (
    <div className="relative ">
      <select
        {...props}
        ref={ref}
        className={`block  pl-4 pr-12 py-2 placeholder-gray-500 appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${className}`}
      >
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <IconChevronDown />
      </div>
    </div>
  ),
)

HtmlSelect.displayName = 'HtmlSelect'

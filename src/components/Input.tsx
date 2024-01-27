'use client'
import { cn } from '@/lib/utils'
import * as React from 'react'
import { useState } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: any
  inputClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, inputClassName, ...props }, ref) => {
  const [Focus, setFocus] = useState(false)
  return (
    <>
      <div
        className={cn(
          'border-input flex h-9 w-full flex-1 items-center space-x-2 rounded-md border bg-[#e7e7e7] px-3 py-1 text-sm shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50',
          Focus === true ? 'border-[#837f7f]' : '',
          'transition-colors',
          className
        )}
      >
        <div>{props.prefix}</div>
        <input
          type={type}
          className={cn(
            'placeholder:text-muted-foreground min-w-[20px] flex-1 bg-[#e7e7e7] focus:outline-none',
            inputClassName
          )}
          ref={ref}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...props}
        ></input>
      </div>
    </>
  )
})
Input.displayName = 'Input'

export { Input }

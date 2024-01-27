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
          'border-input bg-light2 flex h-9 w-full flex-1 items-center space-x-2 rounded-[8px] border px-3 py-1 text-sm shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50',
          Focus === true ? 'border-primary bg-transparent' : '',
          'group transition-colors hover:border-primary hover:bg-transparent',
          className
        )}
      >
        <div>{props.prefix}</div>
        <input
          type={type}
          className={cn(
            'placeholder:text-light4 bg-light2 min-w-[20px] flex-1 caret-primary transition-colors focus:bg-transparent focus:outline-none group-hover:bg-transparent group-focus:bg-transparent',
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

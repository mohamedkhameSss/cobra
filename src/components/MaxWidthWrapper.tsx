import { cn } from '@/lib/utils'
import React, { Children, ReactNode } from 'react'

const MaxWidthWrapper = ({children,className}:{
    className?:string,
    children:ReactNode
}) => {
  return (
    <div className={cn('h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20' ,className)}>{children}</div>
  )
}

export default MaxWidthWrapper
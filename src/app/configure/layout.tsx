import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
        {children}
    </MaxWidthWrapper>
  )
}

export default layout
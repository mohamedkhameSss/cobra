'use client'
import { Progress } from '@/components/ui/progress'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react'
import React, { useState, useTransition } from 'react'
import Dropzone from 'react-dropzone'

const page = () => {
  const [isDrageOver, setIsDrageOver] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const {}= useUploadThing("imageUploader",{
    
  })
  const onDropAccepted=()=>{

  }
  const onDropRejected=()=>{
  }
  const isUploading =false
  const [isPending,startTransition]  =useTransition()
  return (
    <div className={
        cn('relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center',{
          'ring-blue-900/25 bg-blue-900/10':isDrageOver,
        })}>
            <div className='relative flex flex-1 flex-col items-center justify-center w-full'>
              <Dropzone onDropAccepted={onDropAccepted} onDropRejected={onDropRejected}
              accept={
                {
                  "image/png":[".png"],
                  "image/jpeg":[".jpeg"],
                  "image/jpg":[".jpg"],
                }
              }
              onDragEnter={()=>setIsDrageOver(true)}
              onDragLeave={()=>{false}}
              >
                {({getRootProps,getInputProps})=>(
                  <div className='
                  h-full w-full flex-1 flex flex-col items-center justify-center
                  '
                  {...getRootProps()}><input {...getInputProps()}/>
                  {isDrageOver ? (<MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2'/>)
                  :isUploading || isPending ?(<Loader2 className='animate-spin h-6 w-6 text-zinc-500 mb-2 '/>)
                  :(<Image className='h-6 w-6 text-zinc-500 mb-2'/>)}
                  <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
                    {isUploading ? (<div className='flex flex-col items-center'>
                      <p>Uploading</p>
                      <Progress value={uploadProgress} className='mt-2 w-40 h-2 bg-gray-300'/>
                    </div> )
                    :isPending ? (<div className='flex flex-col items-center'>
                      <p>Redirecting, Pleace wait...</p>
                    </div>):isDrageOver ?<p>
                    <span className='font-semibold'>Drop file</span> to upload
                    </p>:<p>
                    <span className='font-semibold'>Click to upload</span> or drag and drop
                    </p>
                    
                  }
                  </div>
                  {isPending ? null :(<p className='text-xs text-zinc-500'>PNG, JPG, JPEG</p>)}
                  </div>
                )}

              </Dropzone>
              </div></div>
  )
}

export default page
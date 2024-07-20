import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
interface constructMetadataType{
  title?: string;
  description?:string;
  image?:string;
  icons?:string;
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatPrice = (price: number)=>{
  const forrmater = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  })
  return forrmater.format(price)
}
export function constructMetadata({
  title='Cobra - custom high quality phone cases',
  description="Create custom hight quality phone cases i seconds",
  image='/thumbnail.png',
  icons='/favicon.ico',
}:constructMetadataType = {}):Metadata{
   return {
    title,
    description,
    openGraph:{
      title,
      description,
      images:[{url:image}]

    },
    twitter:{
      card:'summary_large_image',
      title,
      description,
      images:[image],
      creator:'Mohamed Khamess'
    },
    icons,
   }
}
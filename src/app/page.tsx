import Icons from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { CheckIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
           <div className="bg-slate-50">
            <section>
              <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3
              sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
              <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
                <div className="
                relative mx-auto text-center lg:text-left
                flex flex-col items-center lg:items-start
                ">
                  <div className="absolute w-28 -left-0 -top-20 hidden lg:block">
                    <img src="/public/snake-1.png" className="w-full" />
                  </div>
                  <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span> Phane Case</h1>
                  <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left 
                  text-balance md:text-wrap ">Capture your favorite memories with your own, {'  '}<span>one-of-one</span>phone case.
                  CaseCobra allows you to protesct your memories, not just your phone case</p>
                  <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                    <div className="space-y-2">
                      <li className="flex gap-1.5 items-center text-left">
                        <CheckIcon className="text-green-600"/>
                        High-quality, durable material
                      </li>
                      <li className="flex gap-1.5 items-center text-left">
                        <CheckIcon className="text-green-600"/>
                        5 years print garantee
                      </li>
                      <li className="flex gap-1.5 items-center text-left">
                        <CheckIcon className="text-green-600"/>
                        Modern iPhone models supported
                      </li>
                    </div>
                  </ul>
                  <div className="mt-12 flex flex-col sm:flex-row items-center
                  sm:items-start gap-5 mb-5 ">
                    <div className="flex -space-x-4">
                      <img src="/public/users/user-1.png" alt="user image" className="inline-block h-10 w-10 
                      rounded-full ring-2 ring-slate-100" />
                      <img src="/public/users/user-2.png" alt="user image" className="inline-block h-10 w-10 
                      rounded-full ring-2 ring-slate-100" />
                      <img src="/public/users/user-3.png" alt="user image" className="inline-block h-10 w-10 
                      rounded-full ring-2 ring-slate-100" />
                      <img src="/public/users/user-4.jpg" alt="user image" className="inline-block h-10 w-10 
                      rounded-full ring-2 ring-slate-100" />
                      <img src="/public/users/user-5.jpg" alt="user image" className="object-cover inline-block h-10 w-10 
                      rounded-full ring-2 ring-slate-100" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center 
                  sm:items-start">
                    <div className="flex gap-0.5">
                      <StarFilledIcon className="h-4 w-4 text-green-600 fill-green-600"/>
                      <StarFilledIcon className="h-4 w-4 text-green-600 fill-green-600"/>
                      <StarFilledIcon className="h-4 w-4 text-green-600 fill-green-600"/>
                      <StarFilledIcon className="h-4 w-4 text-green-600 fill-green-600"/>
                      <StarFilledIcon className="h-4 w-4 text-green-600 fill-green-600"/>
                    </div>
                    <p><span className="font-semibold">1.250</span> happy customer</p>
                  </div>
                </div>
              </div>
                <div className="col-span-full lg:col-span-1 w-full flex 
                justify-center px-8 sm:px-16 lg:mx-0 md:px-0 mt-32 lg:mt-20 h-fit">
                <div className="relative md:max-w-xl ">
                  <img src="/public/your-image.png" className="absolute w-40
                  lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block
                  " alt="" />
                  <img src="/public/line.png" className="absolute w-20 -left-6 -bottom-6 select-none" alt="" />
                  <Phone className="w-64" imgSrc="/public/testimonials/1.jpg"/>
                </div>
                </div>
              </MaxWidthWrapper>
            </section>
            {/* value proposition section */}
            <section className="bg-slate-100 py-24">
              <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
                <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
                      <h2 className="order-1 mt-2 tracking-tight text-center text-balance
                      !leading-tight font-bold text-5xl md:text-6xl text-gray-900">What our <span className="relative px-2"> customer <Icons.underline className='
                      hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500
                      '/></span> say</h2>
                </div>
              </MaxWidthWrapper>
            </section>
           </div>
  );
}

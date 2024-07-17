import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}
const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/public/phone-template-dark-edges.png"
            : "/public/phone-template-white-edges.png"
        }
        className='pionter-events-none z-50 select-none'
        alt='phone image'
      />
      <div className='absolute -z-10 inset-0'>
        <img
          src={imgSrc}
          className='object-cover min-w-full min-h-full'
          alt=' overlaying phone image'
        />
      </div>
    </div>
  );
};

export default Phone;

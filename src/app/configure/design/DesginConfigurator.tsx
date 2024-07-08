"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React, { useState } from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "@/components/HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label, RadioGroup } from "@headlessui/react";
import { COLORS } from "@/validators/option-validator";

interface DesginConfiguratorProps {
  configId: string;
  imageUrl: string;
  imageDimensions: { width: number; height: number };
}
const DesginConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesginConfiguratorProps) => {
  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number];
  }>({
    color: COLORS[0],
  });
  return (
    <div className='relative mt-20 grid grid-cols-3 mb-20 pb-20'>
      <div
        className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        '
      >
        <div className='relative w-60 bg-opacity-50   pointer-events-none '>
          <AspectRatio
            className='pointer pointer-events-none relative  z-50 aspect-[896/1831] w-full'
            ratio={896 / 1831}
          >
            <NextImage
              alt='phone image'
              src='/public/phone-template.png'
              className='pointer-events-none z-50 select-none'
              fill
            />
          </AspectRatio>
          <div
            className='absolute z-40 inset-0
             left-[3px] top-px right-[3px] 
          bottom-px rounded-[30px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]'
          />
          <div
            className={cn(
              "absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]",
              `bg-${options.color.tw}`
            )}
          />
        </div>
        <Rnd
          default={{
            x: 150,
            y: 205,
            height: imageDimensions.height / 4,
            width: imageDimensions.width / 4,
          }}
          className='absolute z-20 border-[3px] border-primary'
          lockAspectRatio
          resizeHandleComponent={{
            bottomLeft: <HandleComponent />,
            bottomRight: <HandleComponent />,
            topLeft: <HandleComponent />,
            topRight: <HandleComponent />,
          }}
        >
          <div className='relative w-full h-full'>
            <NextImage
              alt='your image'
              fill
              className='pointer-events-none'
              src={imageUrl}
            />
          </div>
        </Rnd>
      </div>
      <div className='h-[37.5rem] flex flex-col bg-white'>
        <ScrollArea className='relative flex-1 overflow-auto'>
          <div
            aria-hidden='true'
            className='absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white 
          pointer-events-none '
          />

          <div className='px-8 pb-12 pt-8'>
            <h2 className='tracking-tight font-bold text-3xl'>
              Customize your case
            </h2>
            <div className='w-full h-px bg-zinc-200 my-6' />
            <div
              className='relative mt-4 h-full flex
            flex-col justify-between'
            >
              <RadioGroup
                value={options.color}
                onChange={(val) => {
                  setOptions((prev) => ({
                    ...prev,
                    color: val,
                  }));
                }}
              >
                <Label>Color:{options.color.label}</Label>
                <div className='mt-3 flex items-center space-x-3'>
                  {COLORS.map((color) => (
                    <RadioGroup.Option
                      key={color.label}
                      value={color}
                      className={({ active, checked }) =>
                        cn(
                          "relative -m0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                          {
                            [`border-${color.tw}`]: active || checked,
                          }
                        )
                      }
                    >
                      <span
                        className={cn(
                          `bg-${color.tw}`,
                          "h-8 w-8 rounded-full border border-black border-opacity-10"
                        )}
                      ></span>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DesginConfigurator;

"use client";

import { cn } from "@/lib/utils";
import { CaseColor } from "@prisma/client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useEffect, useRef, useState } from "react";

const PhonePreview = ({
  croppedImageUrl,
  color,
}: {
  croppedImageUrl: string;
  color: CaseColor;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [renderedDimenions, setRenderedDimenions] = useState({
    height: 0,
    width: 0,
  });
  let caseBackgroundColor = "bg-zinc-950";
  if (color === "blue") caseBackgroundColor = "bg-blue-950";
  if (color === "rose") caseBackgroundColor = "bg-blue-950";
  const handleResize = () => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setRenderedDimenions({ width, height });
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref.current]);

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className='relative'>
      <div
        className='absolute z-20 scale-[1.0352]'
        style={{
          left:
            renderedDimenions.width / 2 -
            renderedDimenions.width / (1216 / 121),
          top: renderedDimenions.height / 6.22,
        }}
      >
        <img
          width={renderedDimenions.width / (3000 / 637)}
          className={cn(
            "phone-skew z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
            caseBackgroundColor
          )}
          src={croppedImageUrl}
        />
      </div>
      <div className='relative h-full w-full z-40'>
        <img
          src='/clearphone.png'
          alt='phone'
          className='pointer-events-none h-full antialiased rounded-md'
        />
      </div>
    </AspectRatio>
  );
};

export default PhonePreview;

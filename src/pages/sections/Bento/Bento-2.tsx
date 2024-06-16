"use client";

import { BentoBox } from "./Bento-1";

const Bento2 = () => {
  return (
    <>
      <BentoBox className="h-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:h-80">
        <p></p>
      </BentoBox>

      <BentoBox className="h-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:col-span-2 md:h-80">
        <p></p>
      </BentoBox>

      <BentoBox className="h-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:h-80">
        <p></p>
      </BentoBox>

      <BentoBox className="h-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:col-span-2 md:h-80">
        <p></p>
      </BentoBox>

      <BentoBox className="h-48 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:col-span-2 md:h-80">
        <p></p>
      </BentoBox>
    </>
  );
};

export default Bento2;

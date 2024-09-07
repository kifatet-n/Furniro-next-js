import Image from "next/image";

import React from "react";

function Hero() {
  return (
    <div className="h-[316px] relative flex items-center justify-center">
      <Image src="/image/cart-page/hero.png" fill alt="test image" />

      <div className=" flex flex-col gap-5 text-black text-lg z-10">
        <Image src="/image/logo.svg" width={77} height={77} alt="" className="pl-5"/>
        <p className="font-medium text-[48px]">Cart</p>
        <div className="flex">
        <p>Home</p>
        <p>Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

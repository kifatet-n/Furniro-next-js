import Image from "next/image";

import React from "react";

function Hero() {
  return (
    <div className="h-[316px] relative flex items-center justify-center">
      <Image src="/image/cart-page/hero.png" fill alt="test image" />

      <div className="text-black text-lg z-10">
        <Image src="/image/logo.svg" width={30} height={30} alt=""/>
        <p>Cart</p>
        <div className="flex">
        <p>Home</p>
        <p>Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

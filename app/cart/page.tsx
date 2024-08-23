import Basket from "@/components/screens/cart/basket/Basket";
import Hero from "@/components/screens/cart/hero-section/Hero";
import Info from "@/components/shared/info/Info";
import React from "react";

function page() {
  return (
    <div>
    
      <Hero />
      <Basket/>
      <Info />
    </div>
  );
}

export default page;

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

function BasketLeft() {
  const [product, setProduct] = useState({
    id: 1,
    src: "/image/cart-page/hero.png",
    name: "Asgaard sofa",
    price: "Rs:250,000.00",
    quantity: 1,
    subtotal: "Rs:250,000.00",
  });

  return (
    <div> 
      <div className="bg-lightOrange4 h-[55px] w-[817px] flex items-center justify-center gap-28 font-bold ">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <div className="flex py-16 justify-between ">
       <p><Image src="/" width={50} height={50} alt="" /></p>
        <p className="">{product.id}</p>
        <p>{product.name}</p>
        <p>{product.quantity}</p>
        <p>{product.subtotal}</p>
        <Button onClick={()=> setProduct("")}>delete</Button>
      </div>
    </div>
  );
}

export default BasketLeft;

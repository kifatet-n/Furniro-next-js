"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";

interface IProducts {
  id: number;
  src: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

function BasketLeft() {
  const [products, setProduct] = useState<IProducts[]>([
    {
      id: 1,
      src: "/image/cart-page/asgaardsofa.svg",
      name: "Asgaard sofa",
      price: 250,
      quantity: 1,
      subtotal: 0,
    },
    // {
    //   id: 2,
    //   src: "/image/cart-page/hero.png",
    //   name: "Asgaard sofa",
    //   price: 600,
    //   quantity: 1,
    //    subtotal: 0,
    // },
  ]);
  const handleDelete = (id: number) => {
    setProduct(products.filter((product) => product.id !== id));
  };
  const changeQuantity = (id: number, quantity: number) => {
    setProduct(
      products.map((product) =>
        product.id === id ? { ...product, quantity: quantity } : product
      )
    );
  };

  return (
    <div className="w-full md:w-2/3 ">
      <div className="bg-lightOrange4  flex  font-bold  gap-x-24 px-[146px] py-[16px]">
        <p className="font-">Product</p>
        <p>Price</p>
        <div className="flex gap-x-10">
        <p className="">Quantity</p>
        <p className="">Subtotal</p>
        </div>
        
        
      </div>
      <div className="py-10">
        {products.map((product) => (
          <div key={product.id} className="flex py-10">
            <div className="flex  items-center">
              <div className="w-[90px] h-[100px] relative">
                <Image className="bg-lightOrange4 rounded-md"
                  src={product.src}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            
              <div className="pl-12 text-gray2">
                <p>{product.name}</p>
              </div>
              <div className="pl-16 text-gray2">
                <p>Rs:{product.price}</p>
              </div>
            
            <div className="pl-24 w-36">
              <Input
                type="number"
                value={product.quantity}
                onChange={(e) =>
                  changeQuantity(product.id, parseInt(e.target.value))
                }
              />
            </div>
            <div className="pl-12">
              <p>Rs: {product.quantity * product.price}</p>
            </div>
            <div className="pl-14">
            <Button onClick={() => handleDelete(product.id)} className="bg-red">delete</Button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasketLeft;

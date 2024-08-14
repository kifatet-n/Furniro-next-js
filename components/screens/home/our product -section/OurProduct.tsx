import CardList from "@/components/shared/card/CardList";
import { Button } from "@/components/ui/button";
import React from "react";
const OurProductData = [
  {
    id:1,
    src:"/card-images/Syltherine.svg",
    alt:"product",
    title:"Syltherine",
    category:"Stylish cafe chair",
    price:"Rp 2.500.000",
    tags:{
      isNew:true,
      isDiscount:true,
      discount:35


    }
    

  },
  {
    id:2,
    src:"/card-images/Syltherine.svg",
    alt:"product1",
    title:"Syltherine1",
    category:"Stylish cafe chair1",
    price:"Rp 2.500.00000",
    tags:{
      isNew:true,
      isDiscount:false,
      Discount:0
    }

  }
]

function OurProduct() {
  return (
    <>
    <div className="px-[100px] py-5">
      <h2 className="py-10 font-bold text-[30px] text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {OurProductData.map((product)=> (
                  <CardList cardData={product} key={product.id}/>

        )
        )}
        
      </div>
    
    </div>
    <div className="py-10 text-orange " >
    <Button variant='outline' className="border-orange ">Show More</Button>
    </div>
    </>
  );
}

export default OurProduct;

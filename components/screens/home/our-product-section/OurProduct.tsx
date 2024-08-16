import CardList from "@/components/shared/card/CardList";
import { Button } from "@/components/ui/button";
import React from "react";
const OurProductData = [
  {
    id: 1,
    src: "image/card-images/Syltherine.svg",
    alt: "product1",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price1: "Rp 2.500.000",
    price2:"Rp 3.500.000",

    tags: {
      isNew: false,
      isDiscount: true,
      discount: 30,
    },
  },
  {
    id: 2,
    src: "image/card-images/Leviosa.svg",
    alt: "product2",
    title: "Leviosa",
    category: "Stylish cafe chair1",
    price1: "Rp 2.500.000",
    tags: {
      isNew: false,
      isDiscount: false,
      discount: 0,
    },
  },
  {
    id: 3,
    src: "image/card-images/Lolita.svg",
    alt: "product3",
    title: "Lolito",
    category: "Luxury big sofa ",
    price1: "Rp 7.000.000",
    price2:"Rp 14.000.000",
    tags: {
      isNew: false,
      isDiscount: true,
      discount: 50,
    }
  },
  {
    id: 4,
    src: "image/card-images/Respira.svg",
    alt: "product4",
    title: "Respira",
    category: "Outdoor bar table and stool ",
    price1: "Rp 500.000",
    tags: {
      isNew: true,
      isDiscount: false,
      discount: 0,
    }
  },
  {
    id: 5,
    src: "image/card-images/Grifo.svg",
    alt: "product5",
    title: "Grifo",
    category: "Night lamp",
    price1: "Rp 1.500.000",
    tags: {
      isNew: false,
      isDiscount: false,
      discount: 0,
    }
  },
  {
    id: 6,
    src: "image/card-images/Muggo.svg",
    alt: "product6",
    title: "Muggo",
    category: "Small mug",
    price1: "Rp 150.000",
    tags: {
      isNew: true,
      isDiscount: false,
      discount: 0,
    }
  },
  {
    id: 7,
    src: "image/card-images/pingky.svg",
    alt: "product7",
    title: "Pinky",
    category: "Cute bed set",
    price1: "Rp 7.000.000",
    price2:"Rp 14.000.000",
    tags: {
      isNew: false,
      isDiscount: true,
      discount: 50,
    }
  },
  {
    id: 8,
    src: "image/card-images/Potty.svg",
    alt: "product8",
    title: "Potty",
    category: "Minimalist flower pot",
    price1: "Rp 500.000",
    tags: {
      isNew: true,
      isDiscount: false,
      discount: 0,
    }
  }

];

function OurProduct() {

  console.log('product')
  return (
    <>
      <div className="px-[100px] ">
        <h2 className="py-10 font-bold text-[30px] text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OurProductData.map((product) => (
            <CardList cardData={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="py-10  text-orange flex items-center justify-center ">
        <Button variant="outline" className="border-orange  ">
          Show More
        </Button>
      </div>
    </>
  );
}

export default OurProduct;

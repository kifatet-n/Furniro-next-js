import CardList from "@/components/shared/card/CardList";
import React from "react";

function OurProduct() {
  return (
    <div className="px-[100px]">
      <h2 className="mb-8 font-bold text-[40px] text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </div>
    </div>
  );
}

export default OurProduct;

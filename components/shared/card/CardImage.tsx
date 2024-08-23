import Image from "next/image";
import React from "react";
import Cardtag from "./Cardtag";


function CardImage({ data }) {
  return (
    <div className="relative">
      <Cardtag tags={data.tags} />

      <div className="h-[300px] relative">
        <Image src={data.src} alt={data.alt} fill/>
      </div>
      
    </div>
  );
}

export default CardImage;

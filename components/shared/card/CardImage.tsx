import Image from "next/image";
import React from "react";
import Cardtag from "./Cardtag";

function CardImage(cardData) {

  return (
    <div className="relative">
      <Cardtag tags={cardData.tags}/>

      <div className="h-[301px] relative">
        <Image src={cardData.src} alt={cardData.alt} fill />
      </div>
    </div>
  );
}

export default CardImage;

import Image from "next/image";
import React from "react";

function CardImage() {
  return (
    <div className="relative">
      <div className="bg-red-500 text-white w-11 h-11 rounded-full flex items-center justify-center absolute top-6 right-6 z-10">
        -50%
      </div>
      <div className="h-[301px] relative">
        <Image src="image/card-images/Syltherine.svg" alt="" fill />
      </div>
    </div>
  );
}

export default CardImage;

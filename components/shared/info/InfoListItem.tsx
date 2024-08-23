import Image from "next/image";
import React from "react";

function InfoListItem({data}) {
  return (
    <div className="flex gap-1">
      <Image src={data.src} alt="" width={60} height={60} />
      <div className="flex flex-col justify-between">
        <p className="font-semibold text-[25px]">{data.title1}</p>
        <p className="font-medium text-gray2 text-[20px]">{data.title2}</p>
      </div>
    </div>
  );
}

export default InfoListItem;

import Image from "next/image";
import React from "react";

function TheRangeListItem({item}) {

  return (
    <div className=" ">
      <Image src={item.src} alt="" width={350} height={250} />
      <h3 className="text-center">{item.title}</h3>
    </div>
  );
}

export default TheRangeListItem;

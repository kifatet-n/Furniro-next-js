import Image from "next/image";
import React from "react";

function TheRangeListItem(item) {
  return (
    <div className=" ">
      <Image src={item.src} alt="" width={200} height={250} />
      <h3 className="py-3 pl-14">{item.title}</h3>
    </div>
  );
}

export default TheRangeListItem;

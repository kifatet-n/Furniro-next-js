import React from "react";
import InfoListItem from "./InfoListItem";
const InfoData = [
  {
    src: "/image/info-image/high-quality.svg",
    title1: "High Quality",
    title2: "crafted from top materials",
  },
  {
    src: "/image/info-image/warranty.svg",
    title1: "Warranty Protection",
    title2: "Over 2 years",
  },
  {
    src:"/image/info-image/free-shipping.svg",
    title1:"Free Shipping",
    title2:"Order over 150 $"
  },
  {
    src:"/image/info-image/support.svg",
    title1:"24 / 7 Support",
    title2:"Dedicated support"
  }
];

function InfoList() {
  return (
    <div className="px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {InfoData.map((item,index)=>(
        <InfoListItem data={item} key={index}/>
      ))}
      
    </div>
  );
}

export default InfoList;

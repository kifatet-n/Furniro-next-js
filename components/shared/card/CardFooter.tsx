import React from "react";

function CardFooter({ data }) {
  return (
    <div className="p-5 bg-gray ">
      <h4 className="font-semibold py-1">{data.title}</h4>
      <p className="py-1 text-gray2 font-medium">{data.category}</p>
      <div className="flex justify-between">
        <p className="py-1 font-semibold">{data.price1}</p>
        <p className="">{data.price2}</p>
      </div>
    </div>
  );
}

export default CardFooter;

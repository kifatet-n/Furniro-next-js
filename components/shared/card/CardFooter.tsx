import React from "react";

function CardFooter(cardData) {
  
  return (
    <div className="bg-red-600">
      <h4>{cardData.title}</h4>
      <p>{cardData.category}</p>
      <p>{cardData.price}</p>
    </div>
  );
}
 
export default CardFooter;


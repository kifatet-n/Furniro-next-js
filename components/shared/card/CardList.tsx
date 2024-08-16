import React from "react";
import CardListItem from "./CardListItem";

function CardList({cardData}) {
  return ( 
    <div>
      <CardListItem data={cardData} />
    </div>
  );
}

export default CardList;

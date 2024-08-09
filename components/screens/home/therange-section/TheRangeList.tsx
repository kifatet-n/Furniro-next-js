import React from "react";
import TheRangeListItem from "./TheRangeListItem";
const TheRangeData = [
  { src: "./diningimage.svg", title: "Dining" },
  { src: "./livingimage.svg", title: "Living" },
  { src: "/bedroomimage.svg", title: "Bedroom" },
];

function TheRangeList() {
  return (
    <div>
      {TheRangeData.map((data, index) => (
        <TheRangeListItem item={data} key={index} />
      ))}
    </div>
  );
}

export default TheRangeList;

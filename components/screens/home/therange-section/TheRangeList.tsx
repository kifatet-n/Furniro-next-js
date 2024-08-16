import React from "react";
import TheRangeListItem from "./TheRangeListItem";
const TheRangeData = [
  { src: "./image/diningimage.svg", title: "Dining" },
  { src: "./image/livingimage.svg", title: "Living" },
  { src: "./image/bedroomimage.svg", title: "Bedroom" },
];

function TheRangeList() {
  return TheRangeData.map((item, index) => <TheRangeListItem item={item} key={index}  />);
}

export default TheRangeList;

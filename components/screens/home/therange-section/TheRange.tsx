import React from "react";
import TheRangeList from "./TheRangeList";

function TheRange() {
  return (
    <div className="px-[100px]">
      <div className="flex flex-col items-center py-10">
        <h2 className="font-bold text-[20px]">Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <TheRangeList />
      </div>
      </div>
    
  );
}

export default TheRange;

import { Button } from "@/components/ui/button";
import React from "react";

function Rooms() {
  return (
    <div className="bg-yellow-50 w-[1440px] h-[670px]">
      <section className="px-[100px] py-[300px]">
        <h4 className="font-bold text-[40px]">50+ Beautiful rooms <br /> inspiration</h4>
        <p className="py-5">
          Our designer already made a lot of beautiful <br /> prototipe of rooms that
          inspire you
        </p>
        <Button className="bg-orange-500">Explore more</Button>
      </section>
    </div>
  );
}

export default Rooms;

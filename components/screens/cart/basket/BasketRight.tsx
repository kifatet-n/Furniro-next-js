import { Button } from "@/components/ui/button";
import React from "react";

function BasketRight() {
  return (
    <div className="w-full bg-lightOrange4  md:w-1/3">
      <p className="px-[96px] py-[15px] text-[32px] text-black font-bold">
        Cart Totals
      </p>
      <div className="flex px-[75px] py-10 gap-x-[62px]">
        <p className="text-[16px] font-bold text-black">Subtotal</p>
        <p className="text-[16px] text-gray2">Rs.250,000.00</p>
      </div>
      <div className="flex px-[75px] gap-x-[62px]">
        <p className="text-[16px] font-bold text-black ">Total</p>
        <p className="text-[16px] text-orange">Rs.250,000.00</p>
      </div>
      <div className="px-[85px] py-[80px]">
        <Button
          variant={"outline"}
          className="rounded-[10px] border-[1px] border-black bg-lightOrange3 text-black text-[20px] px-10"
        >
          Check Out
        </Button>
      </div>
    </div>
  );
}

export default BasketRight;

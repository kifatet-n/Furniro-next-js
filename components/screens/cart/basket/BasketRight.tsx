import { Button } from "@/components/ui/button";
import React from "react";

function BasketRight() {
  return (
    <div className=" w-full md:w-1/3 bg-lightOrange4 flex flex-col gap-[31px] ">
      <p className="text-[32px] text-black font-bold py-[15px] flex justify-center ">
        Cart Totals
      </p>
      <div className="flex justify-center gap-[62px]">
        <p className="text-[16px] font-bold text-black">Subtotal</p>
        <p className="text-[16px] text-gray2">Rs. 250,000.00</p>
      </div>
      <div className="flex justify-center gap-[62px]">
        <p className="text-[16px] font-bold text-black ">Total</p>
        <p className="text-[16px] text-orange">Rs. 250,000.00</p>
      </div>
      <div className="flex justify-center p-[50px] md:p-[10px] ">
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

import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative">
      <div className=" max-lg:hidden  px-5 py-10 absolute z-10 top-32 right-16 bg-red-200 h-[443px] w-[643px]">
        <p>New Arial</p>
        <h2 className="font-bold text-[56px] ">Discover Our New Collection</h2>
        <p className="py-10">Lorem ipsum dolor sit amet mkmklmlk bjbjbkjb bbbkjbkj consectetur adipisicing elit. Aliquid, quidem!</p>
        <Button className="bg-orange-400">BUY NOW</Button>

      </div>
      <div className="relative">
        <Image src="/hero.svg" alt="" width={1440} height={300} />
      </div>
    </div>
  );
}

export default Hero;

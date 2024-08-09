import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="">
        <Image src="/hero.svg" alt="" width={1440} height={300} />
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import Menu from "./Menu";
import Help from "./Help";
import NewsLetter from "./NewsLetter";
import Link from "next/link";

function Footer() {
  return (
    <footer>
    <div className="flex h-[300px] px-[100px] py-[30px] justify-between flex-col  md:flex-row">
      <div className="flex flex-col gap-y-8">
        <Link href = "/" className="font-bold text-[24px]">Funiro.</Link>
        <p className="text-light">
          400 University Drive Suite 200 Coral <br /> Gables, <br />
          FL 33134 USA
        </p>
      </div>
      <Menu />
      <Help />
      <NewsLetter />
      
    </div>
    <div className=" max-md:hidden">
    <hr />
    <p className=" px-[100px] py-5">2024 furino. All rights reverved</p>
    </div>
    </footer>
  );
}

export default Footer;

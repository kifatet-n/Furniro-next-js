import React from "react";
import Menu from "./Menu";
import Help from "./Help";
import NewsLetter from "./NewsLetter";

function Footer() {
  return (
    <>
    <div className="flex h-[270px] px-10 justify-between max-md:flex-col">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-black">Furniro.</h2>
        <p className="text-slate-500">
          400 University Drive Suite 200 Coral <br /> Gables, <br />
          FL 33134 USA
        </p>
      </div>
      <Menu />
      <Help />
      <NewsLetter />
      
    </div>
    <div className="max-md:hidden">
    <hr />
    <p className=" px-10">2024 furino. All rights reverved</p>
    </div>
    </>
  );
}

export default Footer;

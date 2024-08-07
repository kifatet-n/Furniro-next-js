import Link from "next/link";
import React from "react";
const menuData = [
  { title: "Home", url: "/home" },
  { title: "Shop", url: "/shop" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

function Menu() {
  return (
    <div className="flex flex-col gap-y-8">
    <p className="text-slate-500">Links</p>
    <ul className="flex flex-col gap-y-7">
      {menuData.map((item, index) => (
        <li key={index}>
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default Menu;

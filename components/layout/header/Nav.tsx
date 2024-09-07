import Link from 'next/link'
import React from 'react'
const menuData = [
    {title: "Home", 
     url: "/" 
    },
    {title: "Shop",
     url: "/shop"
    },
    {title: "About",
     url: "/about"
    },
    {title: "Contact",
     url: "/contact"
    }
]
function Nav() {
  return (
    <ul className='hidden lg:flex gap-x-[75px]'>
        {menuData.map((item,index)=>(
            <li key ={index} className='text-[16px] '>
                <Link href={item.url}>{item.title}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Nav
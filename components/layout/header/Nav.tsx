import Link from 'next/link'
import React from 'react'
const menuData = [
    {title: "Home", 
     url: "/home" 
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
    <ul className='flex gap-x-14 max-sm:hidden'>
        {menuData.map((item,index)=>(
            <li key ={index}>
                <Link href={item.url}>{item.title}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Nav
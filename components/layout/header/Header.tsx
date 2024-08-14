import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import Image from 'next/image'
import Action from './Action'

function Header() {
  return (
    <div className=' h-[100px] flex items-center  justify-between gap-x-3 lg:justify-between bg-white px-[100px]'>
        <div className='flex'>
        <Link href ="/">
        <Image
        src= "/image/logo.svg"
        width={30}
        height={30}
        alt=""
        />
        </Link>
        <Link href ="/" className='font-bold'>Furniro</Link>
        </div>
        
        <Nav/>
        <Action/>
    </div>
  )
}

export default Header
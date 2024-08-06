import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import Image from 'next/image'
import Action from './Action'

function Header() {
  return (
    <div className='flex h-[100px] items-center justify-between bg-white px-10'>
        <div className='flex'>
        <Link href ="/">
        <Image
        src= "/image/logo.svg"
        width={30}
        height={30}
        alt=""
        />
        </Link>
        <h1 className=''>Furniro</h1>
        </div>
        
        <Nav/>
        <Action/>
    </div>
  )
}

export default Header
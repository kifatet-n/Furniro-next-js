import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Action() {
  return (
    <div className='flex gap-x-1 lg:gap-x-5'>
        <Link href="/">
        <Image className='flex'
        src="/image/account.svg"
        width={20}
        height={20}
        alt=""
        />
        </Link>
        <Link href="/">
        <Image className='hidden lg:flex'
        src="/image/search.svg"
        width={20}
        height={20}
        alt=""
        />
        </Link>
        <Link href="/">
        <Image className='hidden lg:flex'
        src="/image/fav.svg"
        width={20}
        height={20}
        alt=""
        />
        </Link>
        <Link href="/cart">
        <Image
        src="/image/basket.svg"
        width={20}
        height={20}
        alt=""
        />
        </Link>
        <Link href="/">
        <Image className='flex lg:hidden'
        src="image/header-images/Hamburger.svg" 
        width={20}
        height={20}
        alt=""
        />
        </Link>



    </div>
  )
}

export default Action
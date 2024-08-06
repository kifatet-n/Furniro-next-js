import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Action() {
  return (
    <div className='flex gap-x-10 max-sm:gap-x-2'>
        <Link href="/">
        <Image
        src="/image/account.svg"
        width={20}
        height={20}
        alt=""
        />
        </Link>
        <Link href="/">
        <Image className='max-sm:hidden'
        src="/image/search.svg"
        width={20}
        height={20}
        alt=""
        />
        </Link>
        <Link href="/">
        <Image className='max-sm:hidden'
        src="/image/fav.svg"
        width={20}
        height={20}
        alt=""
        />
        </Link>
        <Link href="/">
        <Image
        src="/image/basket.svg"
        width={20}
        height={20}
        alt=""
        />
        </Link>
        <Link href="/">
        <Image className='flex md:hidden'
        src="/image/hamburger.svg"
        width={20}
        height={20}
        alt=""
        />
        </Link>



    </div>
  )
}

export default Action
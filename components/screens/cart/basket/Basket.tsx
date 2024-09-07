import React from 'react'
import BasketLeft from './BasketLeft'
import BasketRight from './BasketRight'

function Basket() {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-y-[30px] px-[100px] py-[70px] gap-x-[30px]'>
        <BasketLeft/>
        <BasketRight/>
    </div>
  )
}

export default Basket
import React from 'react'
import BasketLeft from './BasketLeft'
import BasketRight from './BasketRight'

function Basket() {
  return (
    <div className=' flex flex-col-reverse px-5 md:flex-row md:px-[100px] gap-y-[30px] py-[70px] gap-x-[30px]'>
        <BasketLeft/>
        <BasketRight/>
    </div>
  )
}

export default Basket
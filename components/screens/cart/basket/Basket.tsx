import React from 'react'
import BasketLeft from './BasketLeft'
import BasketRight from './BasketRight'

function Basket() {
  return (
    <div className='px-[100px] py-10 h-[300px] flex justify-between'>
        <BasketLeft/>
        <BasketRight/>
    </div>
  )
}

export default Basket
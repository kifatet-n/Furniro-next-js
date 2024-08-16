import React from 'react'
import CardImage from './CardImage'
import CardFooter from './CardFooter'

function CardListItem({data}) {
  return (
    <div className="">
        <CardImage data={data} />
        <CardFooter data={data}/>
    </div>
  )
} 

export default CardListItem
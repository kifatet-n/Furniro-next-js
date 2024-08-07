import Link from 'next/link'
import React from 'react'
const helpData =[
    {title:"Payment Options",url:"/"},
    {title:"Returns", url:"/"},
    {title:"Privacy Policies",url:"/"}
]

function Help() {
  return (
    <div className='flex flex-col gap-y-8'>
    <p className='text-slate-500'>Help</p>
    <ul className='flex flex-col gap-y-7'>
    {helpData.map((item,index)=>(
        <li key={index}><Link href={item.url}></Link>{item.title}</li>
    ))}

    </ul>
    </div>
  )
}

export default Help
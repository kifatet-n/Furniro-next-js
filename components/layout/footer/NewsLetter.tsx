import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function NewsLetter() {
  return (

    <div className='flex flex-col gap-y-8'>
        <p className='text-slate-500'>NewsLetter</p>
        <div className='flex w-full max-w-sm items-center space-x-2'>
        <Input type='email' placeholder='Enter Your Email Address'/>
        <Button variant='link'>SUBSCRIBE</Button>
        </div>
        
    </div>

    
  )
}

export default NewsLetter
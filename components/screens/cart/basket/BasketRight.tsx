"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useState } from 'react'
function BasketRight() {
  const [name, setName] = useState("kifayet")
  const [age, setAge] = useState(29)
  const [programming, setProgramming] = useState(["c#", "c++", "Go"])
  const [addres, setAdress] = useState({name:"Nizami street", no:45})
  const changeNameFunc = () => {
    setName("fatime");
  };
  const changeAgeFunc =()=> {
    setAge(5);
  };
  const changeProgrammingFunc=()=>{
    setProgramming([...programming,"pyhton"])
  }

  return (
    <div>
        <h2>{addres.name} {addres.no}</h2>
        <Button onClick ={()=> setAdress({name:"28 may", no:34})}>change</Button>
    </div>
  )
}

export default BasketRight

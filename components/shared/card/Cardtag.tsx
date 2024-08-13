import React from 'react'

function Cardtag({tags}) {
    
  return (
    <div>
        <div className="flex items-center p-4 gap-2 absolute top-6 right-6 z-10">
      <div className="bg-red-500 text-white w-11 h-11 rounded-full flex items-center justify-center">
        -50%
      </div>
      <div className="bg-green-500 text-white w-11 h-11 rounded-full flex items-center justify-center">NEW</div>
      
      </div>
    </div>
  )
}

export default Cardtag
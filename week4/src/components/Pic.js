import React from 'react'

function Pic({src1,src2}) {
  return (
    <div className='grid grid-cols-2 gap-5 py-3'>
    <div>
    <img src={src1} alt="" className='w-[100%] h-[40vh]'/>
    </div>

    <div>
    <img src={src2} alt="" className='w-[100%] h-[40vh]'/>
    
    </div>
    </div>
  )
}

export default Pic
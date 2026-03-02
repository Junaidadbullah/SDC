"use client";

import React, { useState } from "react";


function page() {
  const [value, setvalue] = useState(0)

  function add(){
    if (value<10)
      return setvalue(value+1)
    
  }
function Subtract(){
  if (value>0)
    return setvalue(value-1)
}
  return (
    <div className="bg-[#d8fce8] min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold ">Counter Program</h1>
      <h1 className="text-4xl font-bold">{value}</h1>
      <div className="flex gap-4">
        {/* <button onClick={add} className="text-white px-6 bg-blue-600 rounded-[6px]">ADD</button>
        <button  onClick={Subtract} className="text-white px-6 bg-blue-600 rounded-[6px] ">
          Subtract
        </button> */}
        <button onClick={()=>{ if (value<10)  setvalue(value+1)}} className="text-white px-6 bg-blue-600 rounded-[6px]">ADD</button>
        <button  onClick={()=>{ if (value>0)  setvalue(value-1)}} className="text-white px-6 bg-blue-600 rounded-[6px] ">
          Subtract
        </button>
      </div>
    </div>
  );
}

export default page;

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
function Section1({id, pic, topic, date, add }) {
  return (
    <div className="bg-white w-[80%] m-auto flex rounded-2xl overflow-hidden mb-[3vh]">
      <div>
        <img src={pic} alt="" className="w-[400px] h-[180px] " />
      </div>
      <div className="flex flex-col mt-8 ml-6 flex-grow">
        <h1 className="text-2xl font-bold">{topic}</h1>
        <h2 className="font-bold">{date}</h2>
        <h3 className="text-gray-400">{add}</h3>
      </div>
      <div className="flex items-end ">
     

       <Link 
          href={"/task3/"+ [id]}
          target="_blank"
        >
          <Button className='bg-amber-300 m-2'>
            Event {"=>"}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Section1;

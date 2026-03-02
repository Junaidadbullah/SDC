
import Section1 from "@/components/Section1";
import { MyData } from "@/Data";
import React from "react";

async function page() {
  // const MyData =[ 
  //   {
  //     pic: "/a1.jpg",
  //     topic: "Programming for everyone",
  //     date: "May 21,2021",
  //     add: "Somestreet 25, 12345 San Somewhereo",
  //   },
  //   {
  //     pic: "/a2.jpg",
  //     topic: "Networkin for Introvert",
  //     date: "June 21,2021",
  //     add: "Lahore 25, 12345 New york",
  //   },
  //   {
  //     pic: "/a3.jpg",
  //     topic: "Networking for Extrovert",
  //     date: "August 21,2021",
  //     add: "Street 25, 12345 Brock City",
  //   }
  //   ]
  
  // const res = await fetch("https://dummyjson.com/recipes")
  // const response =await res.json();

  return (
    <div className="bg-[#d8d9dd] min-h-screen pt-[5vh]">
  {MyData.map((data,index)=> {return(

    <Section1 key={index} id={data.id} pic={data.pic}  topic={data.topic} date={data.date} add={data.add}/>
  )})}

  
      
    
    
  
    </div>
  );
}

export default page;

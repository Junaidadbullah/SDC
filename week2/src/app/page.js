// import { Span } from "next/dist/trace";

// function page() {
//   return (
//     <div className="bg-red-700 h-screen">
//       <div className="w-[80%] m-auto h-[20vh]">
//         <img src="/images/img.jpg" className="w-full h-full "></img>
//       </div>
//       <div className="w-[80%] m-auto h-[5%] bg-black text-white box-border flex items-center">
//         <a href="" className="pl-[2%] ">
//           Home
//         </a>
//         <a href="" className="pl-[5%]">
//           {" "}
//           About us
//         </a>
//         <a href="" className="pl-[5%]">
//           Product
//         </a>
//         <a href="" className="pl-[5%]">
//           Contact us
//         </a>
//       </div>
//       <div className="w-[80%] h-[65%] flex m-auto">
//         <div className="w-[30%] bg-green-700">Left</div>
//         <div className="bg-[#ffa235] w-full">Right</div>
//       </div>
//       <div className="bg-purple-800 w-[80%] m-auto h-[10%]">Footer Section</div>
//     </div>
//   );
// }

// export default page;

import React from "react";

function page() {
  return (
    <div className="bg-red-900 min-h-screen ">
      <img src="/images/img.jpg" alt="" className="w-[80%] h-[20vh] m-auto" />

      <div className="w-[80%] m-auto">
        <div className="bg-black text-white h-[5vh] flex items-center">
          <a href="" className=" m-[20px]">
            Home
          </a>
          <a href="" className=" m-[20px]">
            About
          </a>
          <a href="" className=" m-[20px]">
            Contact us
          </a>
          <a href="" className=" m-[20px]">
            Product
          </a>
        </div>

        <div className=" flex h-[65vh] text-amber-50 ">
          <div className="bg-green-800 w-[30%]">left</div>
          <div className="bg-yellow-300 w-[70%]">right</div>
        </div>
        <div className="bg-[#191ff6]  h-[10vh]">foot section</div>
      </div>
    </div>
  );
}

export default page;

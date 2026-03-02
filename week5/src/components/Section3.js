import React from "react";

function Section3({pic,topic,date,add}) {

  return (
    <div>
      {/* 1. Teal Header Section */}
      <div className="bg-[#00adb5] h-[180px] flex p-[30px] justify-center">
        <h1 className="text-white text-4xl font-bold">
          {topic}
        </h1>
      </div>

      {/* 2. Floating Card Section */}
      <div className="w-[55%] mx-auto mt-[-80px]">
        <div className="bg-[#2d3748] rounded-xl  flex items-center p-4 gap-12">
          {/* Circle Image */}
          <div className="w-55 h-55 rounded-full border-2 border-white overflow-hidden flex-shrink-0">
            <img
              src={pic}
              alt="Programming"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info Side */}
          <div className="flex flex-col gap-8 text-[#00adb5]">
            {/* Date Row */}
            <div className="flex flex-col justify-center">
              <h1 className=" text-white">Date:</h1>
              <p className="text-[13px] ml-1">{date}</p>
            </div>

            {/* Address Row */}
            <div className="flex flex-col justify-center">
              <h1 className=" text-white">Location:</h1>
              <p className="text-[13px] ml-1">
                {add}
              </p>
            </div>
          </div>
        </div>

        </div>
        {/* 3. Description Section */}
        <div className="mt-8 text-center  mx-auto w-[70%]">
          <p className="text-black ">
            Everyone can learn to code! Yes, everyone! In this live event, we
            are going to go through all the key basics and get you started with
            programming as well.
          </p>
      </div>
    </div>
  );
}

export default Section3;

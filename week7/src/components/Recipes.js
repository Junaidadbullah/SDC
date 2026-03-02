import React from "react";

function Recipes({ pic, topic }) {
  return (
    <div>
    
      <div className="border border-gray-200 h-[35vh] rounded-lg p-8 flex flex-col items-center bg-white shadow-sm">
        <img
          src={pic}
          className="w-[100px] h-[100px] rounded-full object-cover mb-6 shadow-md"
        />

        <h2 className="font-bold text-lg text-black text-center">{topic}</h2>
      </div>
    </div>
  );
}

export default Recipes;

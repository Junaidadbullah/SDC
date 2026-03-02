import React from "react";

function RecipesDetails({ pic, title, ingredients, instructions }) {
  return (
    <div>
      <div className="w-full overflow-hidden rounded-md">
        <img src={pic} className="w-full h-[300px] object-fill" />
      </div>
      <div className="flex justify-between items-center pl-3 pt-3 ">
        {/* Recipe Name */}
        <h1 className="text-xl font-bold text-black">{title}</h1>

        <button className="bg-[#5cb85c] hover:bg-green-600 text-white text-sm font-semibold py-2 px-5 rounded">
          Go Back
        </button>
      </div>

      <div className="pl-3">
        <h1 className="text-[12px] text-gray-400">Ingredients</h1>
        <ul>
          {ingredients.map((i, index) => (
            <li
              key={index}
              className="list-disc ml-6 text-[11px] text-gray-400"
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3">
        <h1 className="text-[12px] text-gray-400">Instruction</h1>
        <ul>
          {instructions.map((i, index) => (
            <li
              key={index}
              className="list-disc ml-6 text-[11px] text-gray-400"
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipesDetails;

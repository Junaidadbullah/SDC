import RecipesDetails from "@/components/RecipesDetails";
import React from "react";

async function page({ params }) {
  const x = await params;
  const res = await fetch("https://dummyjson.com/recipes/" + x.id);
  const recipe = await res.json();
 
  return (
    <div className="min-h-screen p-2 ">
      <RecipesDetails
        pic={recipe.image}
        title={recipe.name}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
      />
    </div>
  );
}

export default page;

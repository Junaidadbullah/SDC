import Recipes from '@/components/Recipes'
import Link from 'next/link';
import React from 'react'

async function page() {
  const res= await fetch('https://dummyjson.com/recipes');
  const response= await res.json();
  const recipes= response.recipes;

  return (
    <div className='min-h-screen'>
    <div className="grid grid-cols-3 gap-4 m-4 ">
    {recipes.map((i) =>(
    
      <Link 
      key={i.id}
      href={"recipesdetails/"+i.id}
      target='_blank'>

      <Recipes pic={i.image} topic={i.name}/>
      </Link>  
    
    ))}
    </div>
    </div>
  )
}

export default page
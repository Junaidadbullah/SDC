import Recipes from '@/components/Recipes'
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
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
  <Sheet>
  {/* Yeh div button ko screen ke neeche fix karega */}
  <div className="fixed bottom-6 left-12">
    <SheetTrigger >
      {/* Icon ya Text */}
      <Button>
        click me
      </Button>
    </SheetTrigger>
  </div>

  <SheetContent>
    {/* Aapka Sheet ka content */}
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>
    <div className="py-4">
      <a href="">link</a>
      <a href="">link</a>
    </div>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default page
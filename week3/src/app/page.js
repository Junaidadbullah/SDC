import { FaFacebookSquare, FaYoutube, FaLinkedin,FaPencilRuler,FaBriefcaseMedical } from "react-icons/fa"
import { FaGears } from "react-icons/fa6"
function page() {
  return (
    <div className="bg-[#050522] min-h-screen">
    <div className="  flex justify-between pl-[40px] pr-[40px]
    items-center  text-white h-[12%]" >
    <h1 className="text-[12px]  pt-[15px]">NEXTJS</h1>
    <button className="bg-blue-600 px-[40px] rounded-[100px]">
      CV
    </button>
    </div>
{ /* 2nd section */ }

   <div className="flex items-center flex-col text-white">
   <h className='text-[#b6ceca] font-bold text-4xl'>
    JOHN WICK
   </h>

   <h1 className="text-2xl">
    Actor and Artist
   </h1>
   <p className="text-center w-[30%] mt-[10px]">
    John Wick is a 2014 American neo-noir action thriller film directed by Chad
Stahelski in his directorial debut from a screenplay by Derek Kolstad.
   </p>
   </div>

   {/* icons section */}
   <div className="flex  m-auto justify-between w-[30%] mt-[20px]">
    <FaFacebookSquare className="bg-black text-white" />
    <FaYoutube className="bg-black text-white"/>
    <FaLinkedin className="bg-black text-white"/>
   </div>
   <img src="\images\download.jpg" className="rounded-full w-[150px] h-[150px] m-auto mt-[20px]"></img>
    
    <div className="text-white pl-[40px]">
      <h3 className="text-2xl">
        Services I Offer
      </h3>
      <p className="mt-[15px]">
        Legendary assassin John Wtck (Keanu Reeves) retired his violent career aner murying the love of his li&. Her death leaves John in deep mourning. When sadistic mobster losef Tarasov Allen
and his thugs steal J&'s prized cu and kill the that wu a last gift from his wifr , tmleashes the remc less killing machirr withil and seeks vargeance. Meuawhile. losefs 6ther OKichae1 Nyqvist 
J&J's former colleagtr puts a huge txnmty Join's head.
      </p>
    </div>
  <div className=" mt-[15px] flex justify-between pl-[40px] pr-[40px]  pb-[10vh]">
    
    <div className="bg-white w-[32%] rounded-[10px] flex flex-col items-center py-[30px]">
    
      <FaPencilRuler className="text-4xl"/>
      <h3 className="mt-[10px]">

        Dummy text
      </h3>

      <p className="px-[20px] py-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil aliquid molestiae velit non dolores adipisci? Animi doloribus corrupti inventore aperiam natus officia recusandae vitae, nobis odio, expedita eos optio?
      </p>

      <h3 className="mt-[10px]">
        Dummy text
      </h3>

    </div>
    <div className="bg-white w-[32%] rounded-[10px] flex flex-col items-center py-[30px]">
      <FaBriefcaseMedical className="text-4xl" />
      <h3 className="mt-[10px]">
        Dummy text
      </h3>
       <p className="px-[20px] py-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil aliquid molestiae velit non dolores adipisci? Animi doloribus corrupti inventore aperiam natus officia recusandae vitae, nobis odio, expedita eos optio?
      </p>

      <h3 className="mt-[10px]">
        Dummy text
      </h3>

    </div>
    <div className="bg-white w-[32%] rounded-[10px] flex flex-col items-center py-[30px]">

      <FaGears className="text-4xl" />

      <h3 className="mt-[10px]">
        Dummy text
      </h3>

       <p className="px-[20px] py-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil aliquid molestiae velit non dolores adipisci? Animi doloribus corrupti inventore aperiam natus officia recusandae vitae, nobis odio, expedita eos optio?
      </p>

      <h3 className="mt-[10px]">
        Dummy text
      </h3>

    </div>

  </div>
    </div>
  )
}

export default page
import Mycard from "@/components/Mycard";
import Pic from "@/components/Pic";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import { FaPencilRuler, FaBriefcaseMedical } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

function page() {
  return (
    <div className="bg-[#050522] min-h-screen">
    <div className="mx-[8vh]">

      <Section1 />
      <Section2 />
      <Section3 />
      <div className=" gap-10 grid grid-cols-3 mt-5">
        <Mycard icons={<FaPencilRuler />} />
        <Mycard icons={<FaBriefcaseMedical />} />
        <Mycard icons={<FaGears />} />
      </div>
<div>

      <Pic src1={"/download.jpg"} src2={"/download1.jpg"}/>
      <Pic src1={"/download2.jpg"} src2={"/download3.jpg"}/>
      <Pic src1={"/download4.jpg"} src2={"/download5.jpg"}/>
</div>


    </div>
    </div>
  );
}

export default page;

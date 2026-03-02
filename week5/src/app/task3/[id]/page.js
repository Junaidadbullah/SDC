import Section3 from "@/components/Section3";
import { MyData } from "@/Data";

async function page({ params }) {
  const param = await params;
  const item = MyData.find((i) => i.id == param.id);
  console.log(item)
  return (
    <div className="bg-[#e5e7eb] min-h-screen"> 
        <Section3
          pic={item.pic}
          topic={item.topic}
          date={item.date}
          add={item.add}
        /> 
    </div>
  );
}

export default page;

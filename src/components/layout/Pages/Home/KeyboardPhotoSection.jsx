import SectionTemplate from "../../../common/commonTemplates/SectionTemplate";
import {
 BsArchive,
 BsBasket,
 BsBroadcast,
 BsCameraReels,
} from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export default function KeyboardPhotoSection() {
 const listArray = [
  {
   icon: <BsArchive size={"48px"} color="#FFC451" />,
   firstLine: "Est labore ad",
   secondLine:
    "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
  },
  {
   icon: <BsBasket size={"48px"} color="#FFC451" />,
   firstLine: "Harum esse qui",
   secondLine:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
  {
   icon: <BsBroadcast size={"48px"} color="#FFC451" />,
   firstLine: "Aut occaecati",
   secondLine:
    "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
  },
  {
   icon: <BsCameraReels size={"48px"} color="#FFC451" />,
   firstLine: "Beatae veritatis",
   secondLine:
    "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
  },
 ];

 return (
  <SectionTemplate
   imgSrc={
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/features-bg.jpg"
   }
   imgAlt={"Keyboard photo"}
   imgStyle={
    "h-[400px] w-[390.4px] md:w-[720px] lg:w-[660px] object-cover overflow-clip z-[1] box-content  "
   }
   imgOrder={1}>
   {listArray.map((member, index) => (
    <div
     key={index}
     className={twMerge("flex pl-[16px]", index !== 0 && "mt-[28px]")}>
     <div className="shrink-0 mr-[20px]">{member.icon}</div>
     <div>
      <h4 className="text-[20px] font-bold mb-[5px] text-start text-[#151515]     ">
       {member.firstLine}
      </h4>
      <p className="text-[15px] font-normal text-start text-[#444444]">
       {member.secondLine}
      </p>
     </div>
    </div>
   ))}
  </SectionTemplate>
 );
}

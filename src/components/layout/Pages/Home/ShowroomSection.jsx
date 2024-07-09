import BoxTemp from "../../../common/commonTemplates/BoxTemp";
import CageBoxTemp from "../../../common/commonTemplates/CageBoxTemp";
import SectionTemplate from "../../../common/commonTemplates/SectionTemplate";
import { BsEmojiSmile } from "react-icons/bs";
import { BsJournalRichtext } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
// import SideMarginTemp from "./common/commonTemplates/SideMarginTemp";

export default function ShowroomSection() {
 const listArray = [
  {
   icon: <BsEmojiSmile color="#FFC451" size="44px" />,
   number: 232,
   strongLine: "Happy Clients",
   simpleLine: " consequuntur quae",
  },
  {
   icon: <BsJournalRichtext color="#FFC451" size="44px" />,
   number: 521,
   strongLine: "Projects",
   simpleLine: " adipisci atque cum quia aut",
  },
  {
   icon: <BsHeadset color="#FFC451" size="44px" />,
   number: 1453,
   strongLine: "Hours Of Support",
   simpleLine: " aut commodi quaerat",
  },
  {
   icon: <BsPeople color="#FFC451" size="44px" />,
   number: 32,
   strongLine: "Hard Workers",
   simpleLine: " rerum asperiores dolor",
  },
 ];

 return (
  <>
   <SectionTemplate
    imgSrc={
     "https://bootstrapmade.com/demo/templates/Gp/assets/img/stats-img.jpg"
    }
    imgAlt={"Showroom Photo"}
    imgStyle={"h-[366.4px] md:h-[696px] lg:h-[526px] overflow-clip "}
    imgOrder={1}>
    <BoxTemp>
     <h3 className="text-[24.7136px] md:text-[28.112px] lg:text-[32px] font-bold mb-[16px] text-start text-[#151515]">
      Voluptatem dignissimos provident quasi
     </h3>
     <p className="text-[16px] font-normal mb-[16px] text-start text-[#444444]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
      in reprehenderit
     </p>
     <CageBoxTemp customStyle={" grid grid-cols-1 lg:grid-cols-2 "}>
      {listArray.map((member, index) => (
       <>
        <BoxTemp
         customStyle={"w-[390.4px] md:w-[720px] lg:w-[330px] max-w-none"}
         key={index}>
         <div className="p-[10px] flex  ">
          <span className="mr-[15px] shrink-0 ">{member.icon}</span>
          <div className="-mt-[10px]  ">
           <span className="text-[#151515] font-bold text-[40px]   ">
            {member.number}
           </span>
           <p className="-mt-[10px] pt-[15px] text-[#44444499]">
            <strong className="text-[14px] font-bold ">
             {member.strongLine}
            </strong>
            <span className="text-[14px] font-normal">{member.simpleLine}</span>
           </p>
          </div>
         </div>
        </BoxTemp>
       </>
      ))}
     </CageBoxTemp>
    </BoxTemp>
   </SectionTemplate>
  </>
 );
}

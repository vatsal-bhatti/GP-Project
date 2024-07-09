import { BsCheck2All } from "react-icons/bs";
import SectionTemplate from "../../../common/commonTemplates/SectionTemplate";
export default function OfficePhotoSection() {
 const listArray = [
  { text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { text: "Duis aute irure dolor in reprehenderit in voluptate velit." },
  {
   text:
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
  },
 ];

 return (
  <>
   <SectionTemplate
    imgSrc={"https://bootstrapmade.com/demo/templates/Gp/assets/img/about.jpg"}
    imgStyle={" h-[274.8px] md:h-[522px] lg:h-[477px]"}
    imgAlt={"office photo"}
    imgOrder={2}>
    <h3 className="text-[28px] font-bold mb-[8px] text-start text-[#151515] ">
     Voluptatem dignissimos provident
    </h3>
    <p className="  ">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className="mb-[16px]  ">
     {listArray.map((member, index) => (
      <div key={index} className="flex pt-[10px]">
       <span className="mr-[8px] text-left">
        <BsCheck2All color="#FFC451" size={"20px"} />
       </span>
       <span className="text-[16px] font-normal  text-left text-[#444444]">
        {member.text}
       </span>
      </div>
     ))}
    </div>
    <p className="text-[16px] font-normal text-start text-[#444444]">
     Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
     dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
     nulla pariatur. Excepteur sint occaecat cupidatat non proident
    </p>
   </SectionTemplate>
  </>
 );
}

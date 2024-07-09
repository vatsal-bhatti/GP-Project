import { BsBinoculars } from "react-icons/bs";
import { BsBullseye } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BsGem } from "react-icons/bs";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";

import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";

import CageBoxTemp from "../../../common/commonTemplates/CageBoxTemp";
import BoxTemp from "../../../common/commonTemplates/BoxTemp";

const IconBox = ({ icon, text }) => {
 return (
  <>
   <BoxTemp customStyle={" w-[390.4px] md:w-[239.988px] lg:w-[219.988px]"}>
    <div className="  border-[1px] border-[#FFFFFF4D] hover:border-[#FFC451] transition-colors ease-in-out duration-[0.3s]  text-[20px] font-bold text-[#FFFFFFCC] py-[30px] px-[20px] h-[156.4px]  flex flex-col items-center justify-center">
     {icon}
     <h3 className=" mt-[10px] text-center">{text}</h3>
    </div>
   </BoxTemp>
  </>
 );
};

export default function HeroSection() {
 const iconArray = [
  { icon: <BsBinoculars color="#FFC451" size={"32px"} />, text: "Lorem Ipsum" },
  { icon: <BsBullseye color="#FFC451" size={"32px"} />, text: "Dolor Sitema" },
  {
   icon: <BsFullscreenExit color="#FFC451" size={"32px"} />,
   text: "Sedare Perspiciatis",
  },
  { icon: <BsCardList color="#FFC451" size={"32px"} />, text: "Magni Dolores" },
  { icon: <BsGem color="#FFC451" size={"32px"} />, text: "Nemos Enimade" },
 ];

 return (
  <>
   <TopPaddingSection
    customStyle={
     "w-full min-h-[100vh] relative -mt-[84px] pt-0  pb-[80px] flex justify-center items-center bg-cover bg-center bg-hero-image "
    }>
    <SideMarginTemp customStyle={"relative z-[3]"}>
     <CageBoxTemp
      customStyle={
       "opacity-100 justify-center items-center max-w-full mt-[100px]"
      }>
      <BoxTemp customStyle={"flex flex-col ml-[40px] md:-mx-[12px]  "}>
       <h2 className=" text-white   text-[32px] lg:text-[56px]   font-bold  text-center box-border  leading-[38.4px] lg:leading-[67.2px] ">
        Powerful Digital Solutions With GP
        <span className="text-[#FFC451]  text-[56px] font-bold text-center ">
         .
        </span>
       </h2>
       <p className="text-[#FFFFFFB3] text-[18px] lg:text-[24px] font-normal mt-[20px]  md:mt-[10px] text-center">
        We are team of talented digital marketers
       </p>
      </BoxTemp>
     </CageBoxTemp>

     <CageBoxTemp
      customStyle={
       "justify-center items-center  mt-[48px] opacity-100 md:w-[720px] lg:w-[1320px] "
      }>
      {iconArray.map((member, index) => (
       <>
        <IconBox key={index} icon={member.icon} text={member.text} />
       </>
      ))}
     </CageBoxTemp>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );
}

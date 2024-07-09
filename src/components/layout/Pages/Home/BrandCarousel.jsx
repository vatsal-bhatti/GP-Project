// import React from "react";
import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";
import DivCarousel from "../../../common/DivCarousel";

export default function BrandCarousel() {
 const logoArray = [
  {
   logo:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-1.png",
  },
  {
   logo:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-2.png",
  },
  {
   logo:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-3.png",
  },
  {
   logo:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-4.png",
  },
  {
   logo:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-5.png",
  },
  {
   logo:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-6.png",
  },
  {
   logo:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-7.png",
  },
 ];
 function getNumberOfLogosToShow() {
  if (window.innerWidth >= 1440) {
   return 6;
  } else if (window.innerWidth >= 768) {
   return 4;
  } else {
   return 2;
  }
 }
 return (
  <>
   <TopPaddingSection>
    <SideMarginTemp customStyle={""}>
     <div className="overflow-hidden z-[1]">
      <div className="items-center box-content w-full overflow-hidden">
       <DivCarousel dotNotActive="bg-[#44444433]">
        {logoArray.map((member, index) => (
         <div key={index} className="flex  ">
          {/** Adjust number of logos based on screen width */}
          {[...Array(getNumberOfLogosToShow())].map((_, i) => (
           <div
            key={i}
            className="shrink-0 mr-[40px] md:mr-[80px] lg:mr-[120px]">
            <img
             src={
              logoArray[(index + i + logoArray.length) % logoArray.length].logo
             }
             alt={`logo-${(index + i + logoArray.length) % logoArray.length}`}
             className="w-[163px] md:w-[114px] lg:w-[116px] grayscale hover:grayscale-0 opacity-[0.5] hover:opacity-100 transition-all ease-linear duration-[0.3s]"
            />
           </div>
          ))}
         </div>
        ))}
       </DivCarousel>
      </div>
     </div>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );

 // Function to determine number of logos to show based on screen width
}

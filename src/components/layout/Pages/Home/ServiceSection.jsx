import BoxTemp from "../../../common/commonTemplates/BoxTemp";
import CageBoxTemp from "../../../common/commonTemplates/CageBoxTemp";
import Headings from "../../../common/commonTemplates/Headings";
import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";

import { BsActivity } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";
import { BsEasel } from "react-icons/bs";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";

export default function ServiceSection() {
 const listArray = [
  {
   icon: <BsActivity color="#312F2F" size={"28px"} />,
   title: "Nesciunt Mete",
   desc: `Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.`,
   href: "https://bootstrapmade.com/demo/templates/Gp/service-details.html",
  },
  {
   icon: <BsBroadcast color="#312F2F" size={"28px"} />,
   title: "Eosle Commodi",
   desc: `Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.`,
   href: "https://bootstrapmade.com/demo/templates/Gp/service-details.html",
  },
  {
   icon: <BsEasel color="#312F2F" size={"28px"} />,
   title: "Ledo Markt",
   desc: `Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.`,
   href: "https://bootstrapmade.com/demo/templates/Gp/service-details.html",
  },
  {
   icon: <BsBoundingBoxCircles color="#312F2F" size={"28px"} />,
   title: "Asperiores Commodit",
   desc: `Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.`,
   href: "https://bootstrapmade.com/demo/templates/Gp/service-details.html",
  },
  {
   icon: <BsCalendar4Week color="#312F2F" size={"28px"} />,
   title: "Velit Doloremque",
   desc: `Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.`,
   href: "https://bootstrapmade.com/demo/templates/Gp/service-details.html",
  },
  {
   icon: <BsChatSquareText color="#312F2F" size={"28px"} />,
   title: "Dolori Architecto",
   desc: `Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.`,
   href: "https://bootstrapmade.com/demo/templates/Gp/service-details.html",
  },
 ];

 return (
  <>
   <TopPaddingSection>
    <Headings sectionName="services" headingLine="check your services" />

    <SideMarginTemp customStyle={""}>
     <CageBoxTemp customStyle={"w-[390.4] md:w-[720px] lg:w-[1320px]"}>
      {listArray.map((member, index) => (
       <>
        <BoxTemp
         key={index}
         customStyle={" w-[390.4px]  md:w-[360px] lg:w-[439.987px]"}>
         <div className="border-[0.8px] border-[#44444426] h-[359px] pt-[80px] px-[20px]  ">
          <div className="bg-[#FFC451] flex items-center justify-center rounded-[4px] h-[64px] w-[64px] mb-[20px] ml-[130.4px] mr-[90.412px] md:ml-[119.4px] md:mr-[90.412px] lg:ml-[155.188px] lg:mr-[115.2px]   ">
           {member.icon}
          </div>
          <a href={member.href}>
           <h3 className="text -[#151515] text-[22px] font-bold mb-[15px] mt-[10px] text-center ">
            {member.title}
           </h3>
          </a>
          <p className="text-[#444444] font-normal text-[14px] text-center">
           {member.desc}
          </p>
         </div>
        </BoxTemp>
       </>
      ))}
     </CageBoxTemp>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );
}

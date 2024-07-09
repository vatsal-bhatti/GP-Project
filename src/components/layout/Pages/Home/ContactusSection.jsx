import { twMerge } from "tailwind-merge";
import BoxTemp from "../../../common/commonTemplates/BoxTemp";
import CageBoxTemp from "../../../common/commonTemplates/CageBoxTemp";
import Headings from "../../../common/commonTemplates/Headings";
import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";
import { BsGeoAlt } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

export default function ContactusSection() {
 const mapLink =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus";

 const iconListArray = [
  {
   icon: <BsGeoAlt size={"20px"} color="#312F2F" />,
   firstLine: "Address",
   secondLine: "A108 Adam Street, New York, NY 535022",
  },
  {
   icon: <BsTelephone size={"20px"} color="#312F2F" />,
   firstLine: "Call Us",
   secondLine: "+1 5589 55488 55",
  },
  {
   icon: <BsEnvelope size={"20px"} color="#312F2F" />,
   firstLine: "Email Us",
   secondLine: "info@example.com",
  },
 ];

 return (
  <>
   <TopPaddingSection>
    <Headings sectionName="contact" headingLine="contact us" />
    <SideMarginTemp>
     <div className="mb-[24px] ">
      <iframe
       //    width={"100%"}
       //    height={"270px"}
       className="w-[366.4px] md:w-[696px] lg:w-[1296px] h-[270px] border-0 border-[#444444] overflow-clip "
       src={mapLink}></iframe>
     </div>

     <CageBoxTemp>
      <BoxTemp customStyle={"w-[390.4px] md:w-[720px] lg:w-[439.987px]"}>
       {iconListArray.map((member, index) => (
        <>
         <div
          key={index}
          className={twMerge(
           " flex ",
           `${index !== 0 ? "mt-[15px]" : "mt-0"}`
          )}>
          <div className="bg-[#FFC451] rounded-[4px] flex shrink-0 h-[44px] w-[44px] justify-center items-center mr-[15px]">
           {member.icon}
          </div>
          <div className="-mt-[3px]">
           <h3 className="text-[18px] font-bold mb-[5px] text-start text-[#151515]">
            {member.firstLine}
           </h3>
           <p className="text-[14px] font-normal mb-[16px] text-start text-[#444444]">
            {member.secondLine}
           </p>
          </div>
         </div>
        </>
       ))}
      </BoxTemp>
      <BoxTemp>
       <form>
        <CageBoxTemp customStyle={" w-[390.4px] md:w-[720px] lg:w-[879.987px]"}>
         <BoxTemp customStyle={"w-[390.4px] md:w-[360px] lg:w-[439.987px]   "}>
          <input
           className="bg-[#FFFFFF80] border-[0.8px] border-[#44444433] min-h-[35px] py-[10px] px-[15px] w-[366.4px] md:w-[336px] lg:w-[415.987px] h-[42.6px] cursor-text text-wrap"
           type="text"
           placeholder="Your Name"
           name="name"
           required
          />
         </BoxTemp>
         <BoxTemp customStyle={"w-[390.4px] md:w-[360px] lg:w-[439.987px]   "}>
          <input
           className="bg-[#FFFFFF80] border-[0.8px] border-[#44444433] min-h-[35px] py-[10px] px-[15px] w-[366.4px] md:w-[336px] lg:w-[415.987px] h-[42.6px] cursor-text text-wrap"
           type="email"
           placeholder="Your Email"
           name="email"
           required
          />
         </BoxTemp>
         <BoxTemp customStyle={" w-[390.4px] md:w-[720px] lg:w-[879.987px]"}>
          <input
           className="bg-[#FFFFFF80] border-[0.8px] border-[#44444433] min-h-[35px] py-[10px] px-[15px] w-[366.4px] md:w-[696px] lg:w-[855.987px] h-[42.6px] cursor-text text-wrap"
           type="text"
           placeholder="Subject"
           name="subject"
           required
          />
         </BoxTemp>
         <BoxTemp customStyle={"w-[879.987px]"}>
          <textarea
           className="bg-[#FFFFFF80] border-[0.8px] border-[#44444433] min-h-[35px] py-[10px] px-[15px] w-[366.4px] md:w-[696px] lg:w-[855.987px] h-[147.6px] cursor-text text-wrap "
           placeholder="Message"
           name="message"
           required
          />
         </BoxTemp>
         <BoxTemp customStyle={"w-[879.987px] flex justify-center "}>
          <button
           className=" bg-[#ffd071] hover:bg-gray-300  text-center rounded-[4px] border-[#312F2F] h-[44px] w-[166.73px] transition-all ease-linear duration-[0.4s] py-[10px] px-[30px] "
           type="submit">
           Send Message
          </button>
         </BoxTemp>
        </CageBoxTemp>
       </form>
      </BoxTemp>
     </CageBoxTemp>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );
}

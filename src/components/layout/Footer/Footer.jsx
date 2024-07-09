import TopPaddingSection from "../../common/commonTemplates/TopPaddingSection";
import SideMarginTemp from "../../common/commonTemplates/SideMarginTemp";
import CageBoxTemp from "../../common/commonTemplates/CageBoxTemp";
import BoxTemp from "../../common/commonTemplates/BoxTemp";
import SocialMediaSection from "../../common/SocialMediaSection";
import { BsChevronRight } from "react-icons/bs";
function Footer() {
 const footerListArray = [
  {
   heading: "Useful Links",
   listItems: [
    "Home",
    "About us",
    "Services",
    "Terms of service",
    "Privacy policy",
   ],
  },
  {
   heading: "Our Services",
   listItems: [
    "Web Design",
    "Web Development",
    "Product Management",
    "Marketing",
    "Graphic Design",
   ],
  },
 ];

 return (
  <>
   <footer className="bg-yellow-400 border-2 border-black ">
    <TopPaddingSection customStyle={"bg-[#1A1A1A]"}>
     <SideMarginTemp>
      <CageBoxTemp customStyle={""}>
       <BoxTemp customStyle={"w-[390.4px] md:w-[360px] lg:w-[439.987px]"}>
        <a className="text-[26px] tracking-[1px] font-bold text-white flex items-center mb-[10px]">
         GP
        </a>
        <div className="border-[#E5E7EB] border-0 box-border">
         <p className="text-white text-[14px] font-normal mb-[5px] text-start">
          A108 Adam Street
         </p>
         <p className="text-white text-[14px] font-normal mb-[5px] text-start">
          New York, NY 535022
         </p>
         <p className="mt-[16px]  mb-[5px]  ">
          <strong className="text-[14px] font-bold text-white">Phone:</strong>
          <span className="text-[14px] font-normal text-white">
           +1 5589 55488 55
          </span>
         </p>
         <p className="mb-[5px]">
          <strong className="text-[14px] font-bold text-white ">Email:</strong>
          <span className="text-[14px] font-normal text-white">
           info@example.com
          </span>
         </p>
        </div>
        <SocialMediaSection
         customDiv={
          //   ""
          " opacity-100 box-border mt-[22px] -ml-[px]   "
         }
         customAnch={
          "bg-[#FFFFFF26] hover:bg-[#FFC451]  mr-[10px] ml-0 transition-all ease-in-out duration-[0.3s] "
         }
         iconSize="16px"
         iconColor="#FFFFFFB3"
        />
       </BoxTemp>

       {footerListArray.map((list, index) => (
        <>
         <BoxTemp
          key={index}
          customStyle={
           "mb-[30px]  w-[390.4px] md:w-[180px]  lg:w-[219.988px] "
          }>
          <h4 className="text-[16px] font-bold mb-[8px] pb-[12px] text-start text-white     ">
           {list.heading}
          </h4>
          <ul>
           {list.listItems.map((item, index) => (
            <>
             <li key={index} className="  pb-[10px] flex items-center ">
              <div className="mr-[4px]">
               <BsChevronRight color="#FFC451" size="12px" />
              </div>
              <a className="text-[#FFFFFFB3]  text-[14px] font-normal text-left ">
               {item}
              </a>
             </li>
            </>
           ))}
          </ul>
         </BoxTemp>
        </>
       ))}

       <BoxTemp customStyle={"] w-[390.4px] md:w-[720px] lg:w-[439.987px] "}>
        <h4 className="text-[16px] font-bold mb-[8px] pb-[12px] text-start text-white ">
         Our Newsletter
        </h4>
        <p className="text-white text-[14px] font-normal mb-[16px] text-start">
         Subscribe to our newsletter and receive the latest news about our
         products and services!
        </p>
        <form>
         <BoxTemp
          customStyle={
           "w-[390.4px] md:w-[696px] lg:w-[415.987px] flex mt-[30px] px-[8px] py-[6px] border-[0.8px] border-[#FFFFFF33] rounded-[4px] bg-[#242424] "
          }>
          <input
           className="p-[4px] w-[295.712px] md:w-[575.725px] lg:w-[295.712px] bg-[#242424] "
           type="email"
           name="email"
          />
          <input
           className="p-[4px] w-[110.675px] md:w-[110.675px] lg:w-[110.675px] bg-[#FFC451] border-[#312F2F] text-[16px] px-[20px] -my-[7px] -mr-[8px] rounded-[4px] "
           type="submit"
           name="submit"
           value="Subscribe"
          />
         </BoxTemp>
        </form>
       </BoxTemp>
      </CageBoxTemp>
     </SideMarginTemp>
    </TopPaddingSection>
    <TopPaddingSection customStyle={"bg-black h-[105.5px]  py-[30px]"}>
     <SideMarginTemp>
      <p className="text-white text-[14px] font-normal text-center">
       © <span className="text-[14px] font-normal text-white">Copyright</span>
       <strong className="text-[14px] font-bold text-white px-[4px]">GP</strong>
       <span className="text-[14px] font-normal text-white">
        All Rights Reserved
       </span>
      </p>

      <div className="text-[13px] text-white mt-[5px] text-center">
       Designed by
       <a
        className="text-[#FFC451]  text-[13px] font-normal text-center ml-[2px] "
        href="https://bootstrapmade.com/">
        Vatsal Bhatti
       </a>
      </div>
     </SideMarginTemp>
    </TopPaddingSection>
   </footer>
  </>
 );
}

export default Footer;

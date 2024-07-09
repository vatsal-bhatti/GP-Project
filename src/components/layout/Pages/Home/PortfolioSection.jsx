import { twMerge } from "tailwind-merge";
import Headings from "../../../common/commonTemplates/Headings";
import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";
import { useState } from "react";
import CageBoxTemp from "../../../common/commonTemplates/CageBoxTemp";
import BoxTemp from "../../../common/commonTemplates/BoxTemp";
import { BsZoomIn } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
// import { Suspense } from "react";
// import Loader from "../../../common/Loader";
// import LazyImage from "../../../common/LazyImage";
export default function PortfolioSection() {
 const [isActive, setIsActive] = useState("All");

 const menuItemsArray = [
  { item: "All" },
  { item: "App" },
  { item: "Card" },
  { item: "Web" },
 ];
 const imageArray = [
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
   style: "h-[421.7px]  ",
   boxWidth: "w-[439.987]",
   label: "App",
   number: 1,
   productName: "App 1",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
   style: "h-[618.588px]  top-[445.7px]",
   boxWidth: "w-[439.987]",
   label: "Web",
   number: 6,
   productName: "Branding 2",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
   style: "  top-0  ",
   boxWidth: "w-[439.987]",
   label: "Card",
   number: 2,
   productName: "Product 1",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
   style: "h-[621.825px]  top-[302.913px]",
   boxWidth: "w-[439.987]",
   label: "Card",
   number: 5,
   productName: "Product 2",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
   style: "h-[276.337px]  top-[948.738px] ",
   boxWidth: "w-[439.987]",
   label: "Web",
   number: 9,
   productName: "Branding 3",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
   style: "h-[233.988px]  top-0  ",
   boxWidth: "w-[439.987]",
   label: "Web",
   number: 3,
   productName: "Branding 1",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
   style: "h-[275.062px]  top-[257.988px]",
   boxWidth: "w-[439.987] ",
   label: "App",
   number: 4,
   productName: "App 2",
  },

  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
   style: "h-[270.025px]  top-[557.05px]",
   boxWidth: "w-[439.987]",
   label: "App",
   number: 7,
   productName: "App 3",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
   style: "h-[277.15px]  top-[439.987px] ",
   boxWidth: "w-[439.987]",
   label: "Card",
   number: 8,
   productName: "Product 3",
  },
 ];

 const [array, setArry] = useState(imageArray);

 return (
  <>
   <TopPaddingSection>
    <Headings sectionName="portfolio" headingLine="check our portfolio" />
    <SideMarginTemp>
     <div>
      <ul className="mb-[20px] text-center flex justify-center">
       {menuItemsArray.map((menuItem, index) => (
        <>
         <li
          key={index}
          onClick={() => {
           setIsActive(menuItem.item);
           if (menuItem.item === "All") {
            setArry(imageArray);
           } else {
            const newImageArray = imageArray
             .filter((member) => member.label === menuItem.item)
             .sort((a, b) => a.number - b.number);

            console.log(newImageArray);
            setArry(newImageArray);
           }
          }}
          className={twMerge(
           " text-[15px] text-[#444444] font-[500] mb-[5px] mr-[5px] pt-[8px] pb-[10px] px-[20px] text-center rounded-[4px] cursor-pointer hover:bg-[#FFC451] transition-all ease-in-out duration-[0.3s] ",
           `${menuItem.item === isActive ? "bg-[#FFC451]" : ""}`
          )}>
          {menuItem.item}
         </li>
        </>
       ))}
      </ul>
      <CageBoxTemp
       customStyle={` ${
        isActive !== "All" ? "h-[642.588px]" : ""
       }   mt-0 box-border `}>
       <div className="columns-1 md:columns-2 lg:columns-3 gap-x-0  ">
        {array.map((member, index) => (
         <>
          {/* <Suspense key={index} fallback={<Loader />}> */}
          <BoxTemp
           customStyle={`w-[390.4px] md:w-[360px] lg:w-[439.987px] overflow-hidden   ${
            member.number === 1 ? "mt-0" : ""
           } `}>
           <img
            key={index}
            className={twMerge(
             " max-w-full overflow-clip inline",
             member.style
            )}
            src={member.image}
            alt="Portfolio"
           />
           <div className="bg-[#FFFFFFE6] w-[415.987px]  opacity-0 hover:opacity-100 z-[3] right-[12px]  left-[0px] p-[15px] -mt-[60px] relative transition-all ease-in-out duration-[0.5s] cursor-pointer  ">
            <h4 className="text-[#151515] text-[18px] font-[600px] pr-[50px] text-start">
             {member.productName}
            </h4>
            <p className="text-[#444444B3] text-[14px] font-normal pr-[50px] text-start">
             Lorem ipsum, dolor sit
            </p>
            <a className="absolute right-[50px] top-[26.3px] ">
             <BsZoomIn size={"24px"} color="#444444B3" />
            </a>
            <a className="absolute right-[14px] top-[26.3px]">
             <BsLink45Deg size={"28px"} color="#444444B3" />
            </a>
           </div>
           {/* <LazyImage src={member.image} imgStyle={member.style} /> */}
          </BoxTemp>
          {/* </Suspense> */}
         </>
        ))}
       </div>
      </CageBoxTemp>
     </div>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );
}

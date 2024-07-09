import { twMerge } from "tailwind-merge";
import BoxTemp from "../../../common/commonTemplates/BoxTemp";
import CageBoxTemp from "../../../common/commonTemplates/CageBoxTemp";
import NavBreadcrumb from "../../../common/commonTemplates/NavBreadcrumb";
import PageDetails from "../../../common/commonTemplates/PageDetails";
import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsFiletypePdf } from "react-icons/bs";
import { BsFileEarmarkWord } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

export default function ServiceDetailsPage() {
 const servicesListArray = [
  "Web Design",
  "Web Design",
  "Product Management",
  "Graphic Design",
  "Marketing",
 ];

 const downloadCatalogListArray = [
  {
   icon: <BsFiletypePdf size={"24px"} color="#FFC451" />,
   listName: "Catalog PDF",
  },
  {
   icon: <BsFileEarmarkWord size={"24px"} color="#FFC451" />,
   listName: "Catalog PDF",
  },
 ];

 return (
  <>
   <PageDetails
    pageName="Service Details"
    pageDesc=" Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
         odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
         debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
         dolorem."
   />
   <NavBreadcrumb pageName={"Service Details"} />

   <TopPaddingSection>
    <SideMarginTemp>
     <CageBoxTemp>
      <BoxTemp customStyle={"mt-[48px] w-[439.987px]"}>
       {/* services list */}
       <div className="shadow-md shadow-[#4444441F] p-[20px]">
        <h4 className="text-[20px] font-bold mb-[15px] pb-[15px] text-start border-b-[1.6px] border-[#44444414] text-[#151515]     ">
         Services List
        </h4>
        <div className="">
         {servicesListArray.map((item, index) => (
          <>
           <a
            key={index}
            className={twMerge(
             "bg-[#4444440A] flex  py-[12px] px-[15px] mt-[15px]",
             `${index === 0 ? "bg-[#FFC451] mt-0" : ""}`
            )}
            href="#">
            <div className="mr-[8px]">
             <BsArrowRightCircle
              size={"16px"}
              color={index === 0 ? "#312F2F" : "#FFC451"}
             />
            </div>
            <span
             className={twMerge(
              "text-[16px] text-[#312F2F] font-normal text-start -mt-[3px]",
              `${index !== 0 ? "text-[#444444CC]" : ""}`
             )}>
             {item}
            </span>
           </a>
          </>
         ))}
        </div>
       </div>

       {/* download catalog  */}
       <div className="shadow-md shadow-[#4444441F] p-[20px] mt-[30px]">
        <h4 className="text-[20px] font-bold mb-[15px] pb-[15px] text-start border-b-[1.6px] border-[#44444414] text-[#151515]     ">
         Download Catalog
        </h4>
        <div className="">
         {downloadCatalogListArray.map((item, index) => (
          <>
           <a
            key={index}
            className={twMerge(
             " flex  pt-[10px] border-t-[0.8px] border-[#4444441A]",
             `${index === 0 ? "pb-[10px] pt-0 border-t-0 " : ""}`
            )}
            href="#">
            <div className="mr-[8px]">{item.icon}</div>
            <span className="text-[16px] text-[#312F2F] font-normal text-start -mt-[3px]">
             {item.listName}
            </span>
           </a>
          </>
         ))}
        </div>
       </div>

       <div className="shadow-md shadow-[#4444441F] py-[30px] px-[15px] mt-[30px] flex flex-col bg-[#FFC451] items-center  justify-center ">
        <div className="mr-[8px]">
         <BsHeadset size="48px" color="#312F2F" />
        </div>
        <h4 className="text-[24px] font-bold mb-[8px]  text-start text-[#312F2F]     ">
         Have a Question?
        </h4>
        <p className="text-[#312F2F] text-[15px] font-normal mt-[8px] text-start flex   ">
         <div className="mr-[8px]">
          <BsTelephone color="#312F2F" size={"15px"} />
         </div>
         <span className="-mt-[3px]">+1 5589 55488 55</span>
        </p>
        <p className="text-[#312F2F] text-[15px] font-normal mt-[8px] text-start flex  ">
         <div className="mr-[8px]">
          <BsEnvelope color="#312F2F" size={"15px"} />
         </div>
         <span className="-mt-[3px]">contact@example.com</span>
        </p>
       </div>
      </BoxTemp>

      <BoxTemp customStyle={"w-[879.987px] mt-[48px] pl-[48px] pr-[12px] "}>
       <img
        src="https://bootstrapmade.com/demo/templates/Gp/assets/img/services.jpg"
        alt="office image"
        className="h-[518.888px] mb-[20px] overflow-clip max-w-full "
       />
       <h3 className="text-[26px] font-bold mb-[8px]  text-start text-[#151515]">
        Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas
        dolorem ut voluptas
       </h3>
       <p className="text-[#444444] text-[15px] font-normal mb-[16px] text-start flex  ">
        Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate
        non consequatur et doloremque consequuntur. Accusantium labore
        reprehenderit error temporibus saepe perferendis fuga doloribus vero.
        Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
       </p>
       <ul className="mb-[16px]">
        <li className="flex py-[5px] items-center ">
         <div className="mr-[8px]">
          <BsCheckCircle size={"20px"} color="#FFC451" />
         </div>
         <span className="text-[15px] text-[#444444] font-normal text-left -mt-[3px]">
          Aut eum totam accusantium voluptatem.
         </span>
        </li>
        <li className="flex py-[5px] items-center ">
         <div className="mr-[8px]">
          <BsCheckCircle size={"20px"} color="#FFC451" />
         </div>
         <span className="text-[15px] text-[#444444] font-normal text-left -mt-[3px]">
          Assumenda et porro nisi nihil nesciunt voluptatibus.
         </span>
        </li>
        <li className="flex py-[5px] items-center ">
         <div className="mr-[8px] ">
          <BsCheckCircle size={"20px"} color="#FFC451" />
         </div>
         <span className="text-[15px] text-[#444444] font-normal text-left -mt-[3px]">
          Ullamco laboris nisi ut aliquip ex ea
         </span>
        </li>
       </ul>
       <p className="text-[#444444] text-[15px] font-normal mb-[16px] text-start flex  ">
        Est reprehenderit voluptatem necessitatibus asperiores neque sed ea
        illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur
        itaque nesciunt fuga.
       </p>
       <p className="text-[#444444] text-[15px] font-normal mb-[16px] text-start flex   ">
        Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut
        consequuntur recusandae mollitia doloremque est architecto cupiditate
        ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet
        velit sint quia sapiente cumque. Et ipsa perferendis ut nihil.
        Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et
        totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero.
        Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum
        quia impedit dolore alias explicabo ea.
       </p>
      </BoxTemp>
     </CageBoxTemp>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );
}

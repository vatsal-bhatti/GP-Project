import BoxTemp from "./BoxTemp";
import CageBoxTemp from "./CageBoxTemp";
import SideMarginTemp from "./SideMarginTemp";
import TopPaddingSection from "./TopPaddingSection";

export default function PageDetails({ pageName, pageDesc }) {
 return (
  <>
   <div>
    <TopPaddingSection>
     <SideMarginTemp>
      <CageBoxTemp customStyle={"mt-0 justify-center"}>
       <BoxTemp customStyle={"mt-0 w-[879.987px]"}>
        <h1 className=" text-[38px] text-[#151515] font-bold mb-[8px] text-center ">
         {pageName}
        </h1>
        <p className="text-[16px] text-[#444444] font-normal mb-[8px] text-center">
         {pageDesc}
        </p>
       </BoxTemp>
      </CageBoxTemp>
     </SideMarginTemp>
    </TopPaddingSection>
   </div>
  </>
 );
}

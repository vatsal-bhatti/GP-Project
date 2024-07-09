import SideMarginTemp from "./SideMarginTemp";
import TopPaddingSection from "./TopPaddingSection";

export default function NavBreadcrumb({pageName}) {
 return (
  <>
   <TopPaddingSection customStyle={"py-[20px] bg-[#4444440D]"}>
    <SideMarginTemp>
     <ol className="flex flex-wrap text-start">
      <li className="mr-[10px]">
       <a
        className="text-[#FFC451] text-[16px] font-normal text-left "
        href="index.html">
        Home
       </a>
      </li>
      <li className="text-[#444444] text-[16px] font-normal text-left ">
       <span className="text-[#4444444D] text-[16px] font-normal text-left pr-[10px]">
        /
       </span>
      {pageName}
      </li>
     </ol>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );
}

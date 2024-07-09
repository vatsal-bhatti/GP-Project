import { twMerge } from "tailwind-merge";
// import SideMargin from "./commonTemplates/sideMargin";
import TopPaddingSection from "./TopPaddingSection";
import SideMarginTemp from "./SideMarginTemp";
import BoxTemp from "./BoxTemp";
import CageBoxTemp from "./CageBoxTemp";

export default function SectionTemplate({
 children,
 imgSrc,
 imgStyle,
 imgAlt,
 imgOrder,
}) {
 let orderImg, orderDesc;

 if (imgOrder === 1) {
  orderImg = "order-1";
  orderDesc = "order-2";
 } else {
  orderImg = "order-2";
  orderDesc = "order-1";
 }

 return (
  <>
   <TopPaddingSection>
    <SideMarginTemp
     customStyle={
      "   w-[390.4px] md:w-[720px] lg:w-full "
     }>
     <CageBoxTemp customStyle={"md:justify-center lg:justify-start"}>
      <BoxTemp
       customStyle={`${orderImg} w-[390.4px] md:w-[720px] lg:w-[660px]`}>
       <img className={twMerge("", imgStyle)} src={imgSrc} alt={imgAlt} />
      </BoxTemp>
      <BoxTemp customStyle={orderDesc}>{children}</BoxTemp>
     </CageBoxTemp>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );
}

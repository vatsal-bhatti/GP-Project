import SideMarginTemp from "./SideMarginTemp";

export default function Headings({
 sectionName = "Services",
 headingLine = "Check Your Services",
}) {
 return (
  <>
   <SideMarginTemp customStyle={"pb-[60px]   "}>
    <h2 className="text-[14px] text-[#44444480] font-medium tracking-[1.5px] uppercase flex ">
     {sectionName}
     <hr className=" border-t-[1px] border-[#FFC451]  mt-[10px] mx-[10px] w-[120px]   " />
    </h2>
    <p className="text-[#151515] text-[36px] font-bold text-start uppercase  ">
     {headingLine}
    </p>
   </SideMarginTemp>
  </>
 );
}

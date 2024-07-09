import { twMerge } from "tailwind-merge";

export default function SideMarginTemp({ children, customStyle }) {
 return (
  <>
   <div
    className={twMerge(
     " mx-0 md:mx-[24px] lg:mx-[60px] px-[12px]  max-w-[1320px] w-full  ",
     customStyle
    )}>
    {children}
   </div>
  </>
 );
}
//
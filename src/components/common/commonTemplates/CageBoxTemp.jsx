import { twMerge } from "tailwind-merge";

export default function CageBoxTemp({ children, customStyle }) {
 return (
  <>
   <div
    className={twMerge("flex flex-wrap -mx-[12px] -mt-[24px]  ", customStyle)}>
    {children}
   </div>
  </>
 );
}
//

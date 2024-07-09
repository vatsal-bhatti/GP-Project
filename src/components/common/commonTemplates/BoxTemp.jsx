import { twMerge } from "tailwind-merge";

export default function BoxTemp({ children, customStyle }) {
 return (
  <>
   <div
    className={twMerge(
     "basis-auto grow-0 shrink-0 mt-[24px] px-[12px] max-w-full w-[660px]",
     customStyle
    )}>
    {children}
   </div>
  </>
 );
}
//

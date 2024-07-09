import { twMerge } from "tailwind-merge";

export default function TopPaddingSection({
 children,
 customStyle,
 customInlineStyle,
}) {
 return (
  <>
   <div
    className={twMerge(
     "bg-white py-[60px] scroll-mt-[80px] box-border overflow-clip",
     customStyle
    )}
    style={customInlineStyle}>
    {children}
   </div>
  </>
 );
}
//

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export default function SocialMediaSection({
 customDiv,
 customAnch,
 iconColor = "#444444CC",
 iconSize = "18px",
}) {
 const iconArray = [
  { icon: <BsTwitterX size={iconSize} color={iconColor} /> },
  { icon: <BsFacebook size={iconSize} color={iconColor} /> },
  { icon: <BsInstagram size={iconSize} color={iconColor} /> },
  { icon: <BsLinkedin size={iconSize} color={iconColor} /> },
 ];
 return (
  <>
   <div className={twMerge(" flex ", customDiv)}>
    {iconArray.map((socialMedia, index) => (
     <>
      <a
       key={index}
       className={twMerge(
        " flex items-center justify-center  rounded-[4px] mx-[3px] h-[36px] w-[36px] cursor-pointer ",
        customAnch
       )}>
       {socialMedia.icon}
      </a>
     </>
    ))}
   </div>
  </>
 );
}

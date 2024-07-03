import Navbar from "./layout/Navbar/Navbar";
import { BsBinoculars } from "react-icons/bs";
import { BsBullseye } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BsGem } from "react-icons/bs";

const IconBox = ({icon,text}) => {



return(<>

<div className="w-[219.988px] px-[12px]  ">
    <div className="  border-[1px] border-red-700  text-[20px] font-bold text-[#FFFFFFCC] py-[30px] px-[20px] h-[156.4px]  flex flex-col items-center justify-center">
   {icon}
    <h3 className=" mt-[10px] text-center">
    {text}
    </h3>

    </div>
</div>
</>)

}

export default function HeroSection (){

const iconArray = [
    
    {icon: <BsBinoculars color="#FFC451"  size={'32px'} />, text:"Lorem Ipsum" },
    {icon: <BsBullseye color="#FFC451"  size={'32px'} />, text:"Dolor Sitema" },
    {icon: <BsFullscreenExit color="#FFC451"  size={'32px'} />, text:"Sedare Perspiciatis" },
    {icon: <BsCardList color="#FFC451"  size={'32px'} />, text:"Magni Dolores" },
    {icon: <BsGem color="#FFC451"  size={'32px'} />, text:"Nemos Enimade" },








]



return (<>
{/* <Navbar/> */}

<div className="  min-w-[1200px]  w-full min-h-[100vh] relative -mt-[84px]  pb-[80px] flex justify-center items-center bg-cover bg-center "  style={{ backgroundImage: `url(https://bootstrapmade.com/demo/templates/Gp/assets/img/hero-bg.jpg)`  }} >
{/* <img className="opacity-[1]" src="https://bootstrapmade.com/demo/templates/Gp/assets/img/hero-bg.jpg" alt="herosection image "/> */}

<div className=" absolute z-[3]">


<div className="flex flex-wrap -mx-[12px] opacity-100 justify-center max-w-full">
<div className=" w-[660px] px-[12px] grow-0 shrink-0 basis-auto   ">
<h2 className="text-white  text-[56px] font-bold  text-center ">

Powerful Digital Solutions With GP <span className="text-[#FFC451]  text-[56px] font-bold text-center ">.</span>

</h2>

<p className="text-[#FFFFFFB3] text-[24px] font-normal mt-[10px] text-center">

Powerful Digital Solutions With GP <span>.</span>

</p>


</div>

</div>



<div>
We are team of talented digital marketers
</div>

{/* border-[#FFFFFF4D] */}


<div className="flex flex-wrap justify-center items-center -mx-[12px] mt-[48px] opacity-[1]">
{iconArray.map((member,index)=>(<>
    <IconBox key={index} icon={member.icon} text={member.text}    />
</>))}



</div>






</div>

</div>

</>)

}
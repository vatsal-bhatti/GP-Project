import BoxTemp from "../../../common/commonTemplates/BoxTemp";
import CageBoxTemp from "../../../common/commonTemplates/CageBoxTemp";
import Headings from "../../../common/commonTemplates/Headings";
import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";
import SocialMediaSection from "../../../common/SocialMediaSection";
export default function OurTeamSection() {
 const photosListArray = [
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-1.jpg",
   name: "Walter White",
   position: "Chief Executive Officer",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-2.jpg",
   name: "Sarah Jhonson",
   position: "Product Manager",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-3.jpg",
   name: "William Anderson",
   position: "CTO",
  },
  {
   image:
    "https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-4.jpg",
   name: "Amanda Jepson",
   position: "Accountant",
  },
 ];

 return (
  <>
   <TopPaddingSection>
    <Headings sectionName="tem" headingLine="ourteam" />
    <SideMarginTemp>
     <CageBoxTemp
      customStyle={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}>
      {photosListArray.map((teamMember, index) => (
       <>
        <BoxTemp
         key={index}
         customStyle={
          "flex justify-center  w-[390.4px] md:w-[360px] lg:w-[330px]"
         }>
         <div className=" overflow-hidden rounded-[5px] h-[402.1px] shadow-custom-shadow box-border w-[306px]">
          <div className=" relative">
           <img
            src={teamMember.image}
            alt={`${teamMember.name} photo `}
            className=" h-[306px] max-w-full overflow-clip "
           />
           {/* icons below */}
           <SocialMediaSection
            customDiv={
             "bottom-[15px] left-0 right-0 opacity-0 hover:opacity-100  absolute justify-center transition-all ease-in-out duration-[0.3s]"
            }
            customAnch={"bg-[#FFFFFFBF] hover:bg-[#FFC451]"}
            iconSize="18px"
            iconColor="#444444CC"
           />
          </div>

          <div className="py-[25px] px-[15px]">
           <h4 className="text-[#151515]  text-[18px] font-bold text-start mb-[5px]">
            {teamMember.name}
           </h4>
           <span className="text-[#44444499]  text-[13px] font-normal text-start">
            {teamMember.position}
           </span>
          </div>
         </div>
        </BoxTemp>
       </>
      ))}
     </CageBoxTemp>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );
}

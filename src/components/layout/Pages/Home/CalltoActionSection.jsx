// import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";
import BoxTemp from "../../../common/commonTemplates/BoxTemp";
import CageBoxTemp from "../../../common/commonTemplates/CageBoxTemp";
import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";
// import ScrollRevealImage from "../../../common/ScrollRevealImage";
export default function CalltoActionSection() {
 return (
  <>
   {/* h-[900px] absolute object-cover z-[1] overflow-hidden */}
   <TopPaddingSection
    customStyle={
     " bg-cta-image bg-fixed  top-0 left-0 bg-cover bg-center py-[80px]"
    }>
    <SideMarginTemp customStyle={""}>
     <CageBoxTemp customStyle={"justify-center "}>
      <BoxTemp customStyle={"mt-0 w-[390.4px] md:w-[720px] lg:w-[1100px]"}>
       <div className="text-center">
        <h3 className="text-[28px] font-bold mb-[8px] text-center text-white">
         Call To Action
        </h3>
        <p className="text-[16px] font-normal mb-[16px] text-center text-white">
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
         dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
         proident, sunt in culpa qui officia deserunt mollit anim id est
         laborum.
        </p>
        <button className="rounded-[5px] border-[1.6px] border-white text-[16px] font-[500] m-[10px] py-[12px] px-[40px] text-center text-white hover:text-black hover:bg-[#ffc451] hover:border-[2px] hover:border-[#ffc451] transition-all ease-linear duration-[0.5s] ">
         Call To Action
        </button>
       </div>
      </BoxTemp>
     </CageBoxTemp>
    </SideMarginTemp>
   </TopPaddingSection>

   {/* <TopPaddingSection></TopPaddingSection> */}

   {/* <div className="bg-cta-image bg-fixed top-0 left-0 bg-cover bg-center">
    <div className="container flex flex-col justify-center items-center text-white z-10 py-20">
     <div
      data-aos="zoom-in"
      data-aos-delay="200"
      className="w-full lg:w-5/6 flex flex-col justify-center items-center lg:px-3">
      <h3 className="text-3xl font-bold">Call To Action</h3>
      <p className="font-opensans mt-3 mb-4 text-center text-white">
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
       dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
       proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <Button className="font-medium tracking-wide py-3 px-10 mt-[10px] border-2 border-white bg-transparent hover:opacity-100 hover:border-accent hover:bg-accent ">
       Call To Action
      </Button>
     </div>
    </div>
   </div> */}
  </>
 );
}

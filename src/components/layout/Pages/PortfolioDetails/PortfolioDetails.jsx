import Carousel from "../../../common/Carousel";
import BoxTemp from "../../../common/commonTemplates/BoxTemp";
import CageBoxTemp from "../../../common/commonTemplates/CageBoxTemp";
import NavBreadcrumb from "../../../common/commonTemplates/NavBreadcrumb";
import PageDetails from "../../../common/commonTemplates/PageDetails";
import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";

export default function PortfolioDetails() {
 const carouselImages = [
  "https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/product-1.jpg",
  "https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/branding-1.jpg",
  "https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/app-1.jpg",
  "https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/books-1.jpg",
 ];
 return (
  <>
   <PageDetails
    pageName="Portfolio Details"
    pageDesc=" Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
   />
   <NavBreadcrumb pageName={"Portfolio Details"} />
   <TopPaddingSection>
    <SideMarginTemp>
     <CageBoxTemp>
      <BoxTemp customStyle={"w-[879.987px]"}>
       <Carousel imageArray={carouselImages} />
      </BoxTemp>
      <BoxTemp customStyle={"w-[439.987px]"}>
       {/* download catalog  */}
       <div className="shadow-md shadow-[#4444441F] p-[30px] mt-[30px]">
        <h4 className="text-[20px] font-bold mb-[15px] pb-[15px] text-start border-b-[1.6px] border-[#44444414] text-[#151515]     ">
         Project information
        </h4>
        <ul className="mb-[16px]">
         <li className="text-[15px] font-normal  text-[#444444]">
          <strong className="text-[15px] font-bold text-left text-[#444444]">
           Category
          </strong>
          : Web design
         </li>
         <li className="text-[15px] font-normal  text-[#444444] mt-[10px]">
          <strong className="text-[15px] font-bold text-left text-[#444444]">
           Client
          </strong>
          : ASU Company
         </li>
         <li className="text-[15px] font-normal  text-[#444444] mt-[10px]">
          <strong className="text-[15px] font-bold text-left text-[#444444]">
           Project date
          </strong>
          : 01 March, 2020
         </li>
         <li className="text-[15px] font-normal  text-[#444444] mt-[10px]">
          <strong className="text-[15px] font-bold text-left text-[#444444]">
           Project URL
          </strong>
          :
          <a className="text-[#FFC451]" href="#">
           www.example.com
          </a>
         </li>
        </ul>
       </div>

       <div className="pt-[30px]">
        <h2 className="text-[26px] font-bold mb-[20px]  text-start text-[#151515]">
         Exercitationem repudiandae officiis neque suscipit
        </h2>
        <p className="text-[#444444] text-[16px] font-normal mb-[16px] text-start  ">
         Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
         inventore commodi labore quia quia. Exercitationem repudiandae officiis
         neque suscipit non officia eaque itaque enim. Voluptatem officia
         accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi
         nulla at esse enim cum deserunt eius.
        </p>
       </div>
      </BoxTemp>
     </CageBoxTemp>
    </SideMarginTemp>
   </TopPaddingSection>
  </>
 );
}

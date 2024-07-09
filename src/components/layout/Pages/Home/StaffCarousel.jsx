import SideMarginTemp from "../../../common/commonTemplates/SideMarginTemp";
import TopPaddingSection from "../../../common/commonTemplates/TopPaddingSection";
import { BsStarFill } from "react-icons/bs";
import { BiSolidQuoteRight } from "react-icons/bi";
import { BiSolidQuoteLeft } from "react-icons/bi";
import DivCarousel from "../../../common/DivCarousel";

export default function StaffCarousel() {
 const testimonials = [
  {
   img: "https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-1.jpg",
   name: "Saul Goodman",
   role: "Ceo & Founder",
   text:
    "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
   img: "https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-2.jpg",
   name: "Sara Wilsson",
   role: "Designer",
   text:
    "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
   img: "https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-3.jpg",
   name: "Jena Karlis",
   role: "Store Owner",
   text:
    "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
   img: "https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-4.jpg",
   name: "Matt Brandon",
   role: "Freelancer",
   text:
    "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
   img: "https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials/testimonials-5.jpg",
   name: "John Larson",
   role: "Entrepreneur",
   text:
    "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
  },
  // Add more testimonials as needed
 ];

 return (
  <TopPaddingSection customStyle="bg-staff-bground-image bg-cover py-[80px] overflow-clip left-0 right-0 top-0 min-h-[486.3px]">
   <SideMarginTemp>
    <DivCarousel dotActive="bg-white" donNotActive="bg-[#FFFFFF80]">
     {testimonials.map((testimonial, index) => (
      <div
       key={index}
       className="shrink-0 w-[366.4px] md:w-[696px] lg:w-[1296px] h-full text-center">
       <div className="flex flex-col items-center">
        <img
         src={testimonial.img}
         className="rounded-full w-[100px] h-[100px] overflow-clip border-[5.6px] border-[#FFFFFF26] mb-4"
         alt={testimonial.name}
        />
        <h3 className="text-[20px] font-bold mb-[5px] mt-[10px] text-white">
         {testimonial.name}
        </h3>
        <h4 className="text-[14px] font-medium mb-[15px] text-[#FFFFFF99]">
         {testimonial.role}
        </h4>
        <div className="mb-[15px] flex justify-center">
         {Array.from({ length: 5 }).map((_, idx) => (
          <BsStarFill key={idx} size={"16px"} color="#FFC107" />
         ))}
        </div>
        <p className="mx-auto mb-[15px] max-w-[800px] flex items-center justify-center space-x-2">
         <BiSolidQuoteLeft size={"20px"} color="#FFFFFF99" />
         <span className="text-[16px] font-normal text-white">
          {testimonial.text}
         </span>
         <BiSolidQuoteRight size={"20px"} color="#FFFFFF99" />
        </p>
       </div>
      </div>
     ))}
    </DivCarousel>
   </SideMarginTemp>
  </TopPaddingSection>
 );
}

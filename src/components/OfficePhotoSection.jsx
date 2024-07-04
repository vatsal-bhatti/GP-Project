import { BsCheck2All } from "react-icons/bs";

export default function OfficePhotoSection() {
 const listArray = [
  { text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { text: "Duis aute irure dolor in reprehenderit in voluptate velit." },
  {
   text:
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
  },
 ];

 return (
  <>
   <div className="bg-white py-[60px] scroll-mt-[80px]">
    <div className="basis-auto grow-0 shrink-0 mt-[24px] px-[12px] max-w-full w-[660px]">
     <img
      className="h-[477px]"
      src="https://bootstrapmade.com/demo/templates/Gp/assets/img/about.jpg"
      alt="office photo"
     />
    </div>
    <div className="flex flex-col  ">
     <div>Voluptatem dignissimos provident</div>
     <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
     </div>
     <div>
      {listArray.map((member, index) => (
       <div key={index}>
        <span>
         <BsCheck2All color="#FFC451" />
        </span>
        <span>{member.text}</span>
       </div>
      ))}
     </div>
     <div>
      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident
     </div>
    </div>
   </div>
  </>
 );
}

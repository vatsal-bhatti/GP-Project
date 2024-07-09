import { useState, useEffect } from "react";

const DivCarousel = ({
 children,
 dotActive = "bg-[#FFC451]",
 dotNotActive = "bg-[#FFFFFF80]",
}) => {
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  }, 10000);
  return () => clearInterval(interval);
 }, [children.length]);

 return (
  <>
   <div className="relative w-full max-w-full overflow-hidden">
    <div
     className="flex transition-transform duration-[0.6s] ease-linear"
     style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
     {children.map((item, index) => (
      <div key={index} className="w-full flex-shrink-0">
       {item}
      </div>
     ))}
    </div>
   </div>
   <div className="bottom-0 left-0 w-[366.4px] md:w-[696px] lg:w-[1296px] flex justify-center space-x-2 p-2">
    {children.map((_, index) => (
     <span
      key={index}
      className={`block w-[10px] h-[10px] rounded-full transition-all duration-500 ${
       index === currentIndex ? dotActive : dotNotActive
      }`}
     />
    ))}
   </div>
  </>
 );
};

export default DivCarousel;

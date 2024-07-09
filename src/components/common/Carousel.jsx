import { useState, useEffect } from "react";

const localImages = [
 "https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/product-1.jpg",
 "https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/branding-1.jpg",
 "https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/app-1.jpg",
 "https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/books-1.jpg",
];

const Carousel = ({ imageArray = localImages }) => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isTransitioning, setIsTransitioning] = useState(false);
 const images = [...imageArray, imageArray[0]];

 useEffect(() => {
  const interval = setInterval(() => {
   setIsTransitioning(true);
   setCurrentIndex((prevIndex) => prevIndex + 1);
  }, 3000);
  return () => clearInterval(interval);
 }, []);

 useEffect(() => {
  if (currentIndex === images.length - 1) {
   const timeout = setTimeout(() => {
    setIsTransitioning(false);
    setCurrentIndex(0);
   }, 500);

   return () => clearTimeout(timeout);
  }
 }, [currentIndex, images.length]);

 return (
  <>
   <div className="relative w-[855.987px] max-w-full overflow-hidden">
    <div
     className={`flex transition-transform duration-500 ease-in-out ${
      !isTransitioning ? "transition-none" : ""
     }`}
     style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
     {images.map((image, index) => (
      <img
       key={index}
       src={image}
       alt={`Slide ${index}`}
       className="w-full flex-shrink-0"
      />
     ))}
    </div>
   </div>
   <div className="bottom-0 left-0 w-full flex justify-center space-x-2 p-2">
    {imageArray.map((_, index) => (
     <span
      key={index}
      className={`block w-[12px] h-[12px] rounded-full transition-all duration-500 ${
       index === currentIndex % imageArray.length
        ? "bg-[#FFC451]"
        : "bg-[#44444426]"
      }`}
     />
    ))}
   </div>
  </>
 );
};

export default Carousel;

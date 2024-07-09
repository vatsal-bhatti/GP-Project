// src/components/ScrollRevealImage.jsx
// import React from "react";
import { useInView } from "react-intersection-observer";

const ScrollRevealImage = ({ src, alt }) => {
 const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.1,
 });

 return (
  <div
   ref={ref}
   className={`transition-transform transform duration-1000 ease-out ${
    inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
   }`}>
   <img src={src} alt={alt} className="w-full h-auto" />
  </div>
 );
};

export default ScrollRevealImage;

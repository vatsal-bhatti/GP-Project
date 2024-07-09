// import React, { useState } from "react";
import ContactusSection from "./ContactusSection";
import HeroSection from "./HeroSection";
import KeyboardPhotoSection from "./KeyboardPhotoSection";
import OfficePhotoSection from "./OfficePhotoSection";
import OurTeamSection from "./OurTeamSection";
import ServiceSection from "./ServiceSection";
import ShowroomSection from "../../Pages/Home//ShowroomSection";
import CalltoActionSection from "./CalltoActionSection";
import PortfolioSection from "./PortfolioSection";
import StaffCarousel from "./StaffCarousel";
import BrandCarousel from "./BrandCarousel";
// import Headings from "./common/commonTemplates/Headings";

function HomePage() {
 return (
  <>
   <HeroSection />
   <OfficePhotoSection />
   <BrandCarousel />
   <KeyboardPhotoSection />
   <ServiceSection />
   <CalltoActionSection />
   <PortfolioSection />
   <ShowroomSection />
   <StaffCarousel />
   <OurTeamSection />
   <ContactusSection />
  </>
 );
}

export default HomePage;

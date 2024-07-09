import { useState, useEffect } from "react";
import Dropdown from "../../common/Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsX } from "react-icons/bs";
import TopPaddingSection from "../../common/commonTemplates/TopPaddingSection";
import SideMarginTemp from "../../common/commonTemplates/SideMarginTemp";
// import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
 const [menuState, setMenuState] = useState({
  isOpen: false,
  isVisible: false,
 });
 const [activeItem, setActiveItem] = useState("#home");

 const toggleMenu = () => {
  setMenuState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
 };

 const handleResize = () => {
  setMenuState((prev) => ({
   ...prev,
   isVisible: window.innerWidth <= 1024,
  }));
 };

 const handleItemClick = (href) => {
  setActiveItem(href);
  if (menuState.isOpen) {
   toggleMenu(); // Close the menu on item click for mobile
  }
 };

 useEffect(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 const dropdown1Items = [
  { href: "#Dropdown1", label: "Dropdown 1", deepDropDown: false },
  {
   label: "Deep Dropdown",
   deepDropDown: true,
   subItems: [
    { href: "#SubDropdown1", label: "Sub Dropdown 1", deepDropDown: false },
    { href: "#SubDropdown2", label: "Sub Dropdown 2", deepDropDown: false },
   ],
  },
  { href: "#Dropdown3", label: "Dropdown 3", deepDropDown: false },
  { href: "#Dropdown4", label: "Dropdown 4", deepDropDown: false },
 ];

//  const dropdown2Items = [
//   { href: "#submenu1", label: "Submenu 1", deepDropDown: false },
//   { href: "#submenu2", label: "Submenu 2", deepDropDown: false },
//  ];

 const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
 ];

 const renderMenuItems = (items) =>
  items.map((item) => (
   <li
    key={item.href}
    className={`hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px] transition-colors duration-[0.3s]  w-full ${
     activeItem === item.href
      ? " text-white bg-[#ffc451]    lg:bg-transparent  lg:text-[#ffc451]    "
      : ""
    }`}>
    <a href={item.href} onClick={() => handleItemClick(item.href)}>
     {item.label}
    </a>
   </li>
  ));

 return (
  <TopPaddingSection customStyle="bg-[#000000CC] flex text-[#FFFFFFE7] py-[10px] sticky z-[997] top-0 h-fit">
   <SideMarginTemp customStyle="relative flex justify-between items-center mx-auto lg:mx-[60px] px-[12px] lg:px-[12px] w-full lg:w-[1320px] relative">
    <div className="flex justify-between items-center text-xl font-bold mr-[158.175px]  lg:mr-0 ">
     <div className="text-[32px] leading-[38.4px] font-bold text-white">GP</div>
     <div className="text-[32px] leading-[32px] font-normal text-[#FFC451]">
      .
     </div>
    </div>

    {menuState.isVisible && (
     <div
      className={`fixed inset-0 bg-[#212529CC] z-[9997] transform overflow-hidden ${
       menuState.isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}>
      {menuState.isOpen && (
       <div className="flex justify-end items-center p-5 border-b">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
         <BsX size={"32px"} color="white" />
        </button>
       </div>
      )}

      <ul className="flex flex-col text-black bg-white items-start space-y-2 py-[10px] inset-x-[20px] top-[60px] bottom-[20px] absolute rounded-[6px] overflow-auto z-[9998]">
       {renderMenuItems(menuItems)}
       <Dropdown
        title="Dropdown"
        items={dropdown1Items}
        // dropDown2={dropdown2Items}
       />
      </ul>
     </div>
    )}

    <ul className="hidden lg:flex items-center space-x-6">
     {renderMenuItems(menuItems)}
     <Dropdown title="Dropdown" items={dropdown1Items} />
    </ul>

    <button className="order-2  lg:block bg-[#000000CC] border-[1.6px] border-[#FFC451] text-white px-[10px] lg:px-[20px] py-[6px] lg:py-[8px] md:ml-[350px] lg:ml-[30px]    mr-[15px] lg:mr-0 rounded-[4px] hover:bg-[#FFC451] transition-colors duration-[0.3s] hover:cursor-pointer text-[14px] font-normal w-[103.662px] lg:w-[133.663px]">
     Get Started
    </button>

    {menuState.isVisible && !menuState.isOpen && (
     <div className="flex-wrap mr-[10px] order-2 box-border">
      <button
       className="focus:outline-none hover:cursor-pointer"
       onClick={toggleMenu}>
       <RxHamburgerMenu size={"28px"} color="white" />
      </button>
     </div>
    )}
   </SideMarginTemp>
  </TopPaddingSection>
 );
};

export default Navbar;

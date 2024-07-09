import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

const Dropdown = ({ title, items }) => {
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
 };

 return (
  <li className="relative group">
   <button
    onClick={toggleDropdown}
    className="flex items-center justify-between lg:justify-start  py-[18px] px-4 text-[16px] font-normal text-black hover:bg-[#FFC451] hover:text-white
     w-[350.4px] md:w-[728px] lg:w-full lg:hover:text-[#FFC451] lg:py-[18px] lg:px-[15px] lg:font-normal lg:text-[16px] lg:text-white lg:hover:bg-transparent transition-colors duration-[0.3s]">
    {title}
    <span className="pl-1">
     <BsChevronDown size={"12px"} color="black" />
    </span>
   </button>
   <ul
    className={twMerge(
     `${
      isDropdownOpen ? "block" : "hidden"
     } lg:fixed lg:group-hover:block bg-white text-black mt-2 w-full lg:w-auto lg:bg-opacity-90 shadow-md py-3  `,
     `${
      items &&
      items.length > 1 &&
      items[1]?.item?.deepDropDown &&
      "z-[99] top-0 -left-[200px] sticky  mr-11   "
     }`
    )}>
    {items && items.length > 0 ? (
     items.map((item, index) => (
      <li key={index} className="relative group">
       {item.deepDropDown ? (
        <div className="">
         <Dropdown title={item.label} items={item.subItems} />
        </div>
       ) : (
        <a
         href={item.href}
         className={twMerge(
          "block px-4 py-2 hover:bg-gray-200 lg:hover:bg-[#FFC451] lg:text-black  ",
          `${item.deepDropDown && " z-[99] top-0 -left-[180px] "}`
         )}>
         {item.label}
        </a>
       )}
      </li>
     ))
    ) : (
     <li className="px-4 py-4 text-gray-500">No items</li>
    )}
   </ul>
  </li>
 );
};

export default Dropdown;

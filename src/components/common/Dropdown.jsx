import { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="relative group">
      <button
        onClick={toggleDropdown}
        className="block py-2 px-4 text-lg font-normal text-black hover:bg-[#FFC451] w-full lg:hover:text-[#FFC451] lg:py-[18px] lg:px-[15px] lg:font-normal lg:text-[16px] lg:text-white lg:hover:bg-transparent transition-colors duration-[0.3s]"
      >
        {title}
      </button>
      <ul
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } lg:absolute lg:hidden lg:group-hover:block bg-black lg:bg-white mt-2 w-full lg:w-auto`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-200 lg:hover:bg-gray-700"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;

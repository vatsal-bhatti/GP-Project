const Navbar = () => {
  return (
    <nav className="bg-[#000000CC] text-[#FFFFFFE7]  py-[10px]  box-border  ">
      <div className="container  flex justify-between items-center mx-[60px] px-[12px]  max-w-[1320px] w-[1320px]   relative ">
        <div className="text-xl font-bold">
          <span className="text-[32px] leading-[38.4px] font-bold text-white">
            GP
          </span>
          <span className="text-[32px] leading-[32px] font-normal text-[#FFC451]">
            .
          </span>
        </div>
        <ul className="flex  items-center">
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px]  transition-colors duration-[0.3s] ">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px]  transition-colors duration-[0.3s]">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px]  transition-colors duration-[0.3s]">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px]  transition-colors duration-[0.3s]">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px]  transition-colors duration-[0.3s]">
            <a href="#team">Team</a>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px]  transition-colors duration-[0.3s] relative group">
            <a href="#dropdown">Dropdown</a>
            <ul className="absolute hidden group-hover:block bg-black mt-2">
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#submenu1">Submenu 1</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#submenu2">Submenu 2</a>
              </li>
            </ul>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px]  transition-colors duration-[0.3s]">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button
          className="bg-[#000000CC]
] border-[1.6px] border-[#FFC451] 
] text-white px-[30px] py-[8px] ml-[30px] rounded-[4px] hover:bg-[#FFC451] transition-colors duration-[0.3s] hover:cursor-pointer text-[14px] font-normal "
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

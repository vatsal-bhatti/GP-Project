import { useState, useEffect } from "react";
import Dropdown from "../../common/Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        // lg breakpoint in Tailwind CSS
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleResize(); // Call initially to set the state based on initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dropdownItems = [
    { href: "#submenu1", label: "Submenu 1" },
    { href: "#submenu2", label: "Submenu 2" },
  ];

  return (
    <nav className="bg-[#000000CC] text-[#FFFFFFE7] py-[10px] box-border sticky z-[1000] top-0  h-fit ">
      <div className="container-fluid contai flex justify-between items-center mx-auto lg:mx-[60px] px-2 lg:px-[12px]  w-full lg:w-fit relative">
        <div className="flex justify-between items-center text-xl font-bold">
          <div className="text-[32px] leading-[38.4px] font-bold text-white">
            GP
          </div>
          <div className="text-[32px] leading-[32px] font-normal text-[#FFC451]">
            .
          </div>
        </div>

        {isVisible && (
          <div>
            {/* Mobile Menu */}
            <div
              className={`fixed inset-0 bg-[#212529CC] z-[9997] transform overflow-hidden order-3 box-border ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300`}
            >
              {isOpen ? (
                <div className="flex justify-end items-center p-5 border-b">
                  <button
                    className="text-white focus:outline-none text-right"
                    onClick={toggleMenu}
                  >
                    <IoIosClose />
                  </button>
                </div>
              ) : null}

              <ul className="flex flex-col bg-white items-start space-y-2 py-[10px] inset-x-[20px] top-[60px] bottom-[20px] absolute rounded-[6px] overflow-auto z-[9998]">
                <li className="w-full">
                  <a
                    href="#home"
                    className="block py-2 px-4 text-lg font-normal text-black hover:bg-[#FFC451] w-full"
                  >
                    Home
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#about"
                    className="block py-2 px-4 text-lg font-normal text-black hover:bg-[#FFC451] w-full"
                  >
                    About
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#services"
                    className="block py-2 px-4 text-lg font-normal text-black hover:bg-[#FFC451] w-full"
                  >
                    Services
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#portfolio"
                    className="block py-2 px-4 text-lg font-normal text-black hover:bg-[#FFC451] w-full"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#team"
                    className="block py-2 px-4 text-lg font-normal text-black hover:bg-[#FFC451] w-full"
                  >
                    Team
                  </a>
                </li>
                <Dropdown title="Dropdown" items={dropdownItems} />
                <li className="w-full">
                  <a
                    href="#contact"
                    className="block py-2 px-4 text-lg font-normal text-black hover:bg-[#FFC451] w-full"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
        <ul className="hidden lg:visible lg:flex items-center space-x-6">
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px] transition-colors duration-[0.3s]">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px] transition-colors duration-[0.3s]">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px] transition-colors duration-[0.3s]">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px] transition-colors duration-[0.3s]">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px] transition-colors duration-[0.3s]">
            <a href="#team">Team</a>
          </li>
          <Dropdown title="Dropdown" items={dropdownItems} />
          <li className="hover:text-[#FFC451] text-[16px] font-normal py-[18px] px-[15px] transition-colors duration-[0.3s]">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className=" order-2 lg:block bg-[#000000CC] border-[1.6px] border-[#FFC451] text-white px-[15px] lg:px-[30px] py-[6px] lg:py-[8px] lg:ml-[30px] mr-[20px] lg:mr-0 rounded-[4px] hover:bg-[#FFC451] transition-colors duration-[0.3s] hover:cursor-pointer text-[14px] font-normal  ">
          Get Started
        </button>

        {isVisible ? (
          isOpen ? null : (
            <>
              <div className="flex-wrap mr-[10px] order-2 box-border">
                <button
                  className="focus:outline-none hover:cursor-pointer"
                  onClick={toggleMenu}
                >
                  <RxHamburgerMenu size={"28px"} color="white" />
                </button>
              </div>
            </>
          )
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import loogo from "../../public/Images/logo.png";
import loo from "../../public/Images/loo.jpg"
import { Link } from "react-scroll";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <div className="relative   cursor-pointer">
      {/* bg-[#6A0DAD] */}
      {/* bg-[#FFA500] */}
      {/* Desktop Menu */}
      {/* <div className="absolute hidden lg:flex md:flex items-center justify-between inset-0 z-10">
        <Link to="home" smooth={true} duration={500}>
          <img
            className="cursor-pointer w-14 sm:w-20 md:w-24 lg:w-36 lg:mt-32 "
            src={loogo}
            alt="Logo"
          />
        </Link>

        
        <div className="absolute right-0 lg:right-32 md:right-6 lg:top-12 md:top-8 flex items-center lg:gap-16 md:gap-10 text-black font-semibold lg:text-2xl md:text-lg">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="aboutus" smooth={true} duration={500}>
            About Us
          </Link>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </div>
      </div> */}






<div className="absolute hidden  lg:flex md:flex items-center justify-between inset-0 z-10">
  <Link to="home" smooth={true} duration={500}>
    <img
      className="cursor-pointer w-14 sm:w-20 md:w-24 lg:w-36 lg:mt-32 "
      src={loo}
      alt="Logo"
    />
  </Link>

  <div className="absolute flex items-center  text-black right-0 lg:right-32 md:right-6 lg:top-12 md:top-8
    font-semibold lg:text-2xl md:text-lg gap-8">
    <Link to="home" smooth={true} duration={500}>
      Home
    </Link>
    <Link to="aboutus" smooth={true} duration={500}>
      About Us
    </Link>
    <Link to="services" smooth={true} duration={500}>
      Services
    </Link>
    <Link to="testimonials" smooth={true} duration={500}>
      Testimonials
    </Link>
    <Link to="contact" smooth={true} duration={500}>
      Contact Us
    </Link>
  </div>
</div>


      {/* Mobile Menu */}
      <div className="absolute top-0 right-0 z-[999] w-full">
        <nav className="relative">
          <div className="block lg:hidden md:hidden">
            <div className="absolute top-3 right-2.5 p-1 bg-transparent text-white border-2 rounded-full">
              <FiMenu
                onClick={() => setMenu(true)}
                className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl cursor-pointer"
              />
            </div>
          </div>
          <div className="block lg:hidden md:hidden absolute top-1 left-1">
            <a href="/">
              <img
                className="cursor-pointer w-14 sm:w-20"
                src={loo}
                alt="Logo"
              />
            </a>
          </div>

          {/* Side Menu */}
          {isSideMenuOpen && (
            <div className="fixed h-screen overflow-auto w-full z-[999] bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0">
              <section className="text-black bg-white max-h-screen overflow-y-auto flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
                <IoCloseOutline
                  onClick={() => setMenu(false)}
                  className="mt-1 mb-12 right-3 top-4 w-10 h-10 text-4xl text-white rounded-full cursor-pointer bg-[#001E55] absolute"
                />
                <a href="/">
                  <img
                    className="absolute top-2 left-2 rounded-full opacity-90 w-20 sm:w-20"
                    src={loogo}
                    alt="Logo"
                  />
                </a>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 font-light text-2xl"
                >
                  Home
                </Link>
                <Link
                  to="aboutus"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 font-light text-2xl"
                >
                  About Us
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 font-light text-2xl"
                >
                  Services
                </Link>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 font-light text-2xl"
                >
                  Testimonials
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 font-light text-2xl"
                >
                  Contact Us
                </Link>
              </section>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

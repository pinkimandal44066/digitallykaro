












// import { useState, useEffect } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import loogo from "../../public/Images/loo.jpg"
// // import loogo from "../../../public/Images/logo.png";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); 
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className={`w-full fixed top-0 left-0 transition-colors duration-300 ease-in-out ${isScrolled ? 
//       "bg-blue-600 shadow-lg" : "bg-transparent"} z-50`}>
//       {/* Desktop Menu */}
//       <div className="relative hidden lg:flex md:flex items-center justify-between  inset-0 z-10 ">
//         {/* <NavLink to="/" className="absolute left-0 lg:left-28 md:left-6 top-0.5">
//           <img
//             className="cursor-pointer w-14 sm:w-20 md:w-24 lg:w-36"
//             src={loogo}
//             alt="Logo"
//           />
//         </NavLink> */}
//         {/* <a href="/" className="absolute left-0 lg:left-28 md:left-6 top-5 ">
//   <img
//     className="cursor-pointer w-14 sm:w-20 md:w-24 lg:w-36"
//     src={loogo}
//     alt="Logo"
//   />
// </a> */}

// <a href="/" className="absolute left-0 lg:left-28 md:left-6 top-5">
//   <img
//     className="cursor-pointer w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 rounded-full"
//     src={loogo}
//     alt="Logo"
//   />
// </a>


//         <div className="absolute right-0 lg:right-32 md:right-6 lg:top-12 md:top-8 flex items-center lg:gap-16 md:gap-10 text-white font-semibold lg:text-2xl md:text-lg">
//           <a href="#home" className=" ">Home</a>
//           <a href="#about"  className=" ">About Us</a>
//           <a href="#services"  className="">Services </a>
//           <a href="#testimonials" className="">Testimonials </a>
//           <a href="#contact" className="">Contact Us</a>

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="absolute top-0 right-0 z-[999] w-full">
//         <nav className="relative">
//           {/* Hamburger Menu for small and mobile screens */}
//           <div className="block lg:hidden md:hidden">
//             <div className="absolute top-3 right-2.5 p-1 bg-transparent text-white border-2 rounded-full">
//               <FiMenu
//                 onClick={() => setMenu(true)}
//                 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl cursor-pointer"
//               />
//             </div>
//           </div>

//           {/* Logo for small and mobile screens */}
//           <div className="block lg:hidden md:hidden absolute top-1 left-1 ">
//             <a href="/">
//               <img
//                 className="cursor-pointer w-14 sm:w-20 rounded-full"
//                 src={loogo}
//                 alt="Logo"
//               />
//             </a>
//           </div>

//           {/* Side Menu */}
//           {isSideMenuOpen && (
//             <div className="fixed h-screen overflow-auto w-full z-[999] bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0">
//               <section className="text-black bg-white max-h-screen overflow-y-auto flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
//                 <IoCloseOutline
//                   onClick={() => setMenu(false)}
//                   className="mt-1 mb-12 right-3 top-4 w-10 h-10 text-4xl text-white rounded-full cursor-pointer bg-[#001E55] absolute"
//                 />

//                 <a href="/">
//                   <img
//                     className="absolute top-2 left-2 rounded-full opacity-90 w-20 sm:w-20 "
//                     src={loogo}
//                     alt="Logo"
//                   />
//                 </a>

//                 <a
//                   href="/"
//                   className="text-gray-700 font-light text-2xl"
//                 >
//                Home
//                 </a>

//                 <a
//                   href="/aboutus"
//                   className="text-gray-700 font-light text-2xl"
//                 >
//                  About Us
//                 </a>

//                 <a
//                   href="/Contactus"
//                   className="text-gray-700 font-light text-2xl"
//                 >
//          Services 
//                 </a>

//                 <a
//                   href="/Contactus"
//                   className="text-gray-700 font-light text-2xl"
//                 >
//          Testimonials
//                 </a>
           

//                 <a
//                   href="/blog"
//                   className="text-gray-700 font-light text-2xl"
//                 >
//                 Contact Us
//                 </a>

          
//               </section>
//             </div>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;







// import { useState, useEffect } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import loogo from "../../public/Images/loo.jpg";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ease-in-out ${
//         isScrolled ? "bg-[#6A0DAD] shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
//         {/* Logo */}
//         <a href="/" className="flex items-center">
//           <img
//             className="w-14 h-14 sm:w-20 sm:h-20 rounded-full"
//             src={loogo}
//             alt="Logo"
//           />
//         </a>

//         {/* Desktop Links */}
//         <nav className="hidden md:flex space-x-8 lg:space-x-12 text-white font-semibold text-2xl">
//           <a href="#home" className="hover:text-gray-300">Home</a>
//           <a href="#about" className="hover:text-gray-300">About Us</a>
//           <a href="#services" className="hover:text-gray-300">Services</a>
//           <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
//           <a href="#contact" className="hover:text-gray-300">Contact Us</a>
//         </nav>

        
//       </div>

//       {/* Mobile Menu */}
//       <div className="absolute top-0 right-0 z-[999] w-full">
//         <nav className="relative">
         
//           <div className="block lg:hidden md:hidden">
//             <div className="absolute top-5 right-7 p-1 bg-transparent text-white border-2 rounded-full">
//               <FiMenu
//                 onClick={() => setMenu(true)}
//                 className="lg:text-4xl md:text-4xl sm:text-3xl text-4xl cursor-pointer"
//               />
//             </div>
//           </div>

        

//           {/* Side Menu */}
//           {isSideMenuOpen && (
//             <div className="fixed h-screen overflow-auto w-full z-[999]
//              bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0">
//               <section className=" bg-[#6A0DAD] text-white max-h-screen overflow-y-auto flex-col 
//               absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
//                 <IoCloseOutline
//                   onClick={() => setMenu(false)}
//                   className="mt-1 mb-12 right-7 top-2 w-14 h-14 text-4xl text-white rounded-full cursor-pointer
//                    bg-black absolute"
//                 />

//                 <a href="/">
//                   <img
//                     className="absolute top-2 left-7 mt-1 rounded-full opacity-90 w-14 sm:w-20 "
//                     src={loogo}
//                     alt="Logo"
//                   />
//                 </a>

//                 <a
//                   href="/"
//                   className="text-white text-3xl font-bold"
//                 >
//                Home
//                 </a>

//                 <a
//                   href="/aboutus"
//                   className="text-white text-3xl font-bold"
//                 >
//                  About Us
//                 </a>

//                 <a
//                   href="/Contactus"
//                   className="text-white text-3xl font-bold"
//                 >
//          Services 
//                 </a>

//                 <a
//                   href="/Contactus"
//                   className="text-white text-3xl font-bold"
//                 >
//          Testimonials
//                 </a>
           

//                 <a
//                   href="/blog"
//                   className="text-white text-3xl font-bold"
//                 >
//                 Contact Us
//                 </a>

          
//               </section>




              
//             </div>
//           )}
//         </nav>
//       </div>

//       {/* Overlay */}
//       {isSideMenuOpen && (
//         <div
//           onClick={() => setMenu(false)}
//           className="fixed inset-0 bg-black bg-opacity-50 z-30"
//         ></div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import loogo from "../../public/Images/loo.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-[#6A0DAD] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full"
            src={loogo}
            alt="Logo"
          />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12 text-white font-semibold text-2xl">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
          <a href="#contact" className="hover:text-gray-300">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-4xl text-white cursor-pointer"
          />
        </div>
      </div>

      {/* Side Menu */}
      {isSideMenuOpen && (
        <div className="fixed h-screen overflow-auto w-full z-[999] bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0">
          <section className="bg-[#6A0DAD] text-white max-h-screen overflow-y-auto flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-1 mb-12 right-7 top-2 w-14 h-14 text-4xl text-white rounded-full cursor-pointer bg-black absolute"
            />

            <a href="/">
              <img
                className="absolute top-2 left-7 mt-1 rounded-full opacity-90 w-14 sm:w-20"
                src={loogo}
                alt="Logo"
              />
            </a>

            <a href="/" className="text-white text-3xl font-bold">Home</a>
            <a href="/aboutus" className="text-white text-3xl font-bold">About Us</a>
            <a href="/services" className="text-white text-3xl font-bold">Services</a>
            <a href="/testimonials" className="text-white text-3xl font-bold">Testimonials</a>
            <a href="/blog" className="text-white text-3xl font-bold">Contact Us</a>
          </section>
        </div>
      )}

      {/* Overlay */}
      {isSideMenuOpen && (
        <div
          onClick={() => setMenu(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </header>
  );
};

export default Navbar;




// import { NavLink } from "react-router-dom";
import footer from "../../public/Images/footer.avif";
import logo1 from "../../public/Images/logo.png";

const Footer = () => {
  return (
    <div className="relative lg:mt-20 md:mt-14 mt-12 cursor-pointer font-['Poppins'] ">
   

      <div className="  absolute inset-0 flex text-black lg:justify-center md:justify-center justify-start lg:flex-row md:flex-row flex-col items-start lg:mt-16 md:mt-12 mt-12 mx-5">
        <div className="flex lg:justify-between justify-center lg:gap-32 md:gap-10 gap-8 items-start">
          <div className="flex flex-col">
            <h1 className="font-bold lg:text-3xl md:text-3xl text-2xl">
              Reach Us
            </h1>
            <p className="font-semibold lg:text-2xl md:text-2xl text-lg mt-2 ">
              Corporate Address:
            </p>
            <p className="font-thin opacity-90 tracking-wide text-lg mt-3 w-44 lg:w-64 md:w-64">
              Prestige Falcon Towers, 19, Brunton Road, Bengaluru - 560025,
              Karnataka, India
            </p>
            <p className="font-semibold mt-3 lg:text-2xl md:text-2xl text-lg">
              For sales enquires:
            </p>
            <p className="font-light opacity-90 tracking-wide text-xl mt-2">
              +91 1234 5689
            </p>

            <p className="font-semibold mt-3 lg:text-2xl md:text-2xl text-lg">
              Email:
            </p>
            <p className="font-light opacity-90 tracking-wide  lg:text-xl md:text-xl text-sm  mt-2">
              wildacresproperty@gmail.com
            </p>
            <div className="flex gap-3 items-center mt-5">
              <div className="text-3xl w-7 h-7 rounded-full flex items-center justify-center bg-white text-[#075094]">
                <i className=" mt-2.5 ri-facebook-fill"></i>
              </div>
              <div className="text-2xl w-7 h-7 rounded-full flex items-center justify-center bg-white text-[#075094]">
                <i className="ri-instagram-line"></i>
              </div>
              <div className="text-2xl w-7 h-7 rounded-full flex items-center justify-center bg-white text-[#075094]">
                <i className="ri-youtube-fill"></i>
              </div>
            </div>

            {/* <NavLink to="/" className="lg:hidden md:hidden sm:hidden flex">
          <img
            src={logo1}
            alt="Logo"
            className="z-10 w-28 lg:w-44 md:w-44 sm:w-44 mb-4 mt-2 lg:mt-0 md:mt-0 sm:mt-0 "
          />
        </NavLink> */}
<img
            src={logo1}
            alt="Logo"
            className=" lg:hidden md:hidden sm:hidden flex z-10 w-28 lg:w-44 md:w-44 sm:w-44 mb-4 mt-2 lg:mt-0 md:mt-0 sm:mt-0 "
          />

          </div>

          <div className="flex lg:flex-row md:flex-row lg:gap-20 md:gap-10 flex-col justify-between items-start">
            <div className="flex flex-col">
              <h1 className="font-bold lg:text-3xl md:text-2xl text-lg">
                Quick Menu
              </h1>

              {/* <NavLink
                to="/about"
                className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg font-light opacity-90 tracking-wide"
              >
                About Us
              </NavLink>
              <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg  font-light opacity-90 tracking-wide">
                Residential
              </p>
              <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg  font-light opacity-90 tracking-wide">
                Commercial
              </p>
              <NavLink
                to="/blog"
                className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg  font-light opacity-90 tracking-wide"
              >
                Blogs
              </NavLink> */}
              <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg  font-light opacity-90 tracking-wide">
                Careers
              </p>
            </div>
            <div className="flex mt-10 lg:mt-0 md:mt-0 sm:mt-0 flex-col">
              <h1 className="font-bold lg:text-3xl md:text-2xl text-lg">
                Quick Links
              </h1>
              <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg  font-light opacity-90 tracking-wide">
                EMI Calculator
              </p>
              <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg font-light opacity-90 tracking-wide">
                Privacy Policy
              </p>
              <p className="lg:my-3 mt-1lg:text-2xl md:text-xl text-lg  font-light opacity-90 tracking-wide">
                Residential
              </p>
              <p className="lg:my-3 mt-1lg:text-2xl md:text-xl text-lg  font-light opacity-90 tracking-wide">
                Terms & Conditions
              </p>
              <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg  font-light opacity-90 tracking-wide">
                Disclaimer
              </p>
            </div>
          </div>
        </div>

        {/* <NavLink to="/" className="lg:block md:block sm:block hidden">
          <img
            src={logo1}
            alt="Logo"
            className="z-10 w-28 lg:w-44 md:w-44 sm:w-44 mb-4 mt-2 lg:mt-0 md:mt-0 sm:mt-0 "
          />
        </NavLink> */}

<img
            src={logo1}
            alt="Logo"
            className="  lg:block md:block sm:block hidden z-10 w-28 lg:w-44 md:w-44 sm:w-44 mb-4 mt-2 lg:mt-0 md:mt-0 sm:mt-0 "
          />
        
      </div>








      <div className="absolute bottom-2  left-1/2 transform -translate-x-1/2 text-center text-black">
        <p className="lg:text-2xl md:text-2xl sm:text-2xl text-sm"> Copyright &copy; 2024 Wild_Acre</p>
      </div>



    </div>
  );
};

export default Footer;

















// Background image



// import footer from "../../public/Images/footer.avif"; // Ensure this path is correct
// import logo1 from "../../public/Images/logo.png";

// const Footer = () => {
//   return (
//     <div
//       className="relative  cursor-pointer font-['Poppins'] h-[700px]" // Set a height to see the background image
//       style={{
//         backgroundImage: `url(${footer})`, // Use the imported image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat', // Prevent image repetition
//       }}
//     >
//       <div className="absolute inset-0 flex text-black lg:justify-center md:justify-center justify-start lg:flex-row md:flex-row flex-col items-start lg:mt-16 md:mt-12 mt-12 mx-5">
//         <div className="flex lg:justify-between justify-center lg:gap-32 md:gap-10 gap-8 items-start">
//           <div className="flex flex-col">
//             <h1 className="font-bold lg:text-3xl md:text-3xl text-2xl">
//               Reach Us
//             </h1>
//             <p className="font-semibold lg:text-2xl md:text-2xl text-lg mt-2">
//               Corporate Address:
//             </p>
//             <p className="font-thin opacity-90 tracking-wide text-lg mt-3 w-44 lg:w-64 md:w-64">
//               Prestige Falcon Towers, 19, Brunton Road, Bengaluru - 560025,
//               Karnataka, India
//             </p>
//             <p className="font-semibold mt-3 lg:text-2xl md:text-2xl text-lg">
//               For sales enquiries:
//             </p>
//             <p className="font-light opacity-90 tracking-wide text-xl mt-2">
//               +91 1234 5689
//             </p>
//             <p className="font-semibold mt-3 lg:text-2xl md:text-2xl text-lg">
//               Email:
//             </p>
//             <p className="font-light opacity-90 tracking-wide lg:text-xl md:text-xl text-sm mt-2">
//               wildacresproperty@gmail.com
//             </p>
//             <div className="flex gap-3 items-center mt-5">
//               <div className="text-3xl w-7 h-7 rounded-full flex items-center justify-center bg-white text-[#075094]">
//                 <i className="mt-2.5 ri-facebook-fill"></i>
//               </div>
//               <div className="text-2xl w-7 h-7 rounded-full flex items-center justify-center bg-white text-[#075094]">
//                 <i className="ri-instagram-line"></i>
//               </div>
//               <div className="text-2xl w-7 h-7 rounded-full flex items-center justify-center bg-white text-[#075094]">
//                 <i className="ri-youtube-fill"></i>
//               </div>
//             </div>
//             <img
//               src={logo1}
//               alt="Logo"
//               className="lg:hidden md:hidden sm:hidden flex z-10 w-28 lg:w-44 md:w-44 sm:w-44 mb-4 mt-2 lg:mt-0 md:mt-0 sm:mt-0"
//             />
//           </div>
//           <div className="flex lg:flex-row md:flex-row lg:gap-20 md:gap-10 flex-col justify-between items-start">
//             <div className="flex flex-col">
//               <h1 className="font-bold lg:text-3xl md:text-2xl text-lg">
//                 Quick Menu
//               </h1>
//               <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg font-light opacity-90 tracking-wide">
//                 Careers
//               </p>
//             </div>
//             <div className="flex mt-10 lg:mt-0 md:mt-0 sm:mt-0 flex-col">
//               <h1 className="font-bold lg:text-3xl md:text-2xl text-lg">
//                 Quick Links
//               </h1>
//               <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg font-light opacity-90 tracking-wide">
//                 EMI Calculator
//               </p>
//               <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg font-light opacity-90 tracking-wide">
//                 Privacy Policy
//               </p>
//               <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg font-light opacity-90 tracking-wide">
//                 Residential
//               </p>
//               <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg font-light opacity-90 tracking-wide">
//                 Terms & Conditions
//               </p>
//               <p className="lg:my-3 mt-1 lg:text-2xl md:text-xl text-lg font-light opacity-90 tracking-wide">
//                 Disclaimer
//               </p>
//             </div>
//           </div>
//         </div>
//         <img
//           src={logo1}
//           alt="Logo"
//           className="lg:block md:block sm:block hidden z-10 w-28 lg:w-44 md:w-44 sm:w-44 mb-4 mt-2 lg:mt-0 md:mt-0 sm:mt-0"
//         />
//       </div>
//       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-black">
//         <p className="lg:text-2xl md:text-2xl sm:text-2xl text-sm"> Copyright &copy; 2024 Wild_Acre</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;















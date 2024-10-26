// import shankarvideo from "../../public/Images/shankarvideo.mp4";

// const Home = () => {
//   return (
//     <div>
//       <div id="imggg" className="relative w-full h-full mb-8">
//         <div className="relative w-full h-full">
//           <video
//             className="min-w-full min-h-full object-cover"
//             autoPlay
//             loop
//             muted
//           >
//             <source src={shankarvideo} type="video/mp4" />
//           </video>
//           <div
//             className="absolute inset-0 bg-black"
//             style={{ opacity: 0.3 }}
//           ></div>
//         </div>
//       </div>

//       <div className="max-w-screen-xl lg:mx-auto mx-3 lg:mt-10">
//   {/* <h1 className="text-center font-medium lg:text-5xl md:text-4xl sm:text-3xl tracking-wide text-2xl text-[#001E55]">
//     ABOUT DIGITALLY KARO
//   </h1> */}
//   <p className="lg:mt-7 mt-5 font-light lg:text-lg md:text-base text-sm text-center tracking-wide">
//     Founded with the vision of transforming the digital landscape, Digitally Karo specializes in providing innovative digital marketing solutions tailored to meet the unique needs of businesses. Our journey began with a commitment to empower brands by leveraging the power of digital technologies. From search engine optimization (SEO) and social media marketing to content creation and analytics, we offer a comprehensive suite of services designed to enhance online visibility and drive engagement. With a dedicated team of experts, we strive to help our clients achieve their goals in an ever-evolving digital world.
//   </p>
// </div>

//     </div>
//   );
// };

// export default Home;













import shankarvideo from "../../public/Images/shankarvideo.mp4";
import Hometwo from "./Hometwo";
const Home = () => {
  return (
    <div>
      <div id="imggg" className="relative w-full h-full mb-8">
        <div className="relative w-full h-full">
          <video
            className="min-w-full min-h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={shankarvideo} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.3 }}
          ></div>
        </div>

        {/* Hero Section over Video */}
        <div className="absolute inset-0 flex flex-col items-end justify-center text-right p-5">
          <h1 className="font-medium lg:text-5xl md:text-4xl sm:text-3xl tracking-wide text-2xl text-white">
            Transform Your Digital Presence
          </h1>
          <p className="mt-2 font-light lg:text-lg md:text-base text-sm tracking-wide text-white">
            Empowering businesses with innovative digital marketing solutions.
          </p>
          <a
            href="#contact"
            className="mt-4 bg-[#6A0DAD] text-white hover:text-black py-2 px-4 rounded-lg hover:bg-white transition duration-300"
          >
            Get Started
          </a>
        </div>


        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5">
  <h1 className="font-bold text-5xl lg:text-6xl text-white">
    Transform Your Digital Presence
  </h1>
  <p className="mt-2 text-lg text-gray-300">
    Empowering businesses with innovative digital marketing solutions.
  </p>
  <a
    href="#contact"
    className="mt-4 bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 shadow-lg"
  >
    Get Started
  </a>
</div> */}

      </div>
<Hometwo />
      {/* Existing Content */}
      {/* <div className="max-w-screen-xl lg:mx-auto mx-3 lg:mt-10">
        <p className="lg:mt-7 mt-5 font-light lg:text-lg md:text-base text-sm text-center tracking-wide">
          Founded with the vision of transforming the digital landscape, Digitally Karo
           specializes in providing innovative digital marketing solutions tailored to meet
            the unique needs of businesses. Our journey began with a commitment to empower brands by 
            leveraging the power of digital technologies. From search engine optimization (SEO) and 
            social media marketing to content creation and analytics, we offer a comprehensive suite 
            of services designed to enhance online visibility and drive engagement. With a dedicated team of 
            experts, we strive to help our clients achieve their goals in an ever-evolving digital world.
        </p>
      </div> */}
    </div>
  );
};

export default Home;

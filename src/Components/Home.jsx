









import shankarvideo from "../../public/Images/shankarvideo.mp4";
import Hometwo from "./Hometwo";
const Home = () => {
  return (
    <div>
      <div id="home" className="relative w-full h-full mb-8">
        {/* <div className="relative w-full h-full">
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
        </div> */}
<div className="relative w-full h-full">
  <video
    className="min-w-full min-h-full object-cover h-[calc(32vh+50px)] sm:h-full" // Adjusted height for mobile
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

      
        <div className="absolute inset-0 flex flex-col items-end justify-center text-right p-5 mt-10  sm:mt-0 lg:mt-0 md:mt-0">
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


        

      </div>
<Hometwo />
   
    </div>
  );
};

export default Home;

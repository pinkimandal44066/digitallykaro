// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="h-screen flex items-center justify-center bg-green-500 text-white">
//       <h1 className="text-4xl font-bold">About Us</h1>
//       <p className="mt-4 text-lg">We are dedicated to providing quality services.</p>
//     </section>
//   );
// };

// export default About;














import React, { useEffect } from "react";
// import aboutus from '../../../public/Images/aboutus.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const ZoomInOutOnScroll = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    // <div
    //   className="relative bg-cover bg-center"
    //   style={{
    //     backgroundImage: `url(${aboutus})`,
    //   }}
    // >
    //   <div className="absolute inset-0 bg-black opacity-50"></div>

    //   <div className="relative max-w-7xl mx-auto py-20 px-5 md:px-10 lg:px-20 text-center text-white">
    //     <h1
    //       data-aos="fade-up"
    //       className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
    //     >
    //       About Us
    //     </h1>
    //     <p
    //       data-aos="fade-up"
    //       data-aos-delay="200"
    //       className="text-lg md:text-xl lg:text-2xl mb-6"
    //     >
    //       We provide innovative solutions that help businesses grow and thrive
    //       in today's fast-paced digital landscape.
    //     </p>
    //     <p
    //       data-aos="fade-up"
    //       data-aos-delay="400"
    //       className="text-sm md:text-base lg:text-lg mb-8"
    //     >
    //       Our dedicated team delivers high-quality services tailored to your
    //       specific needs, ensuring excellence at every step.
    //     </p>
    //   </div>
    // </div>

<div
  className="relative bg-cover bg-center mt-10"
  style={{
    backgroundImage: `url("https://fps.cdnpk.net/images/ai/image-generator/advantages/image-generator-freepik-8.webp?w=1920&h=1920&q=75")`, 

    // https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148122902.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid
}}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="relative max-w-7xl mx-auto py-20 px-5 md:px-10 lg:px-20 text-center text-white">
    <h1
      data-aos="fade-up"
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4
       bg-clip-text text-transparent bg-[#6A0DAD]"
    >
      About Us
    </h1>
    <p
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-lg md:text-xl lg:text-xl mb-6"
    >
    We provide innovative solutions that help businesses grow and thrive in today's
     fast-paced digital landscape. At Digitally Karo, our dedicated team delivers high-quality
     services tailored to your specific needs, ensuring excellence at every step. 
    </p>
    <p
      data-aos="fade-up"
      data-aos-delay="400"
      className="text-sm md:text-base lg:text-lg mb-8"
    >
     Whether it’s website development, SEO, or digital strategy,
      we’re committed to helping you achieve your business goals.
    </p>
  </div>
</div>

    
  );
};

export default ZoomInOutOnScroll;


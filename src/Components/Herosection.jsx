
import React from 'react';
import '../App.css';

const ResponsiveGrid = () => {
  return (
    <>
      {/* <div className="p-4 md:p-6 lg:p-8 max-w-screen-lg mx-auto">
        <p className="text-base md:text-lg leading-relaxed">
          Welcome to our company! We are dedicated to providing the best solutions for our clients. With a team of highly skilled professionals, we strive to deliver innovative and effective services tailored to meet your needs. Our mission is to exceed expectations and drive success through our expertise and commitment.
          
          We pride ourselves on our customer-centric approach, ensuring that each project is handled with the utmost care and attention. Our values are rooted in integrity, excellence, and collaboration, and we believe in building strong relationships with our clients based on trust and mutual respect.
          
          Whether you're looking for cutting-edge technology solutions, strategic consulting, or personalized support, we are here to help. Discover how we can make a difference for your business and join us on this exciting journey towards growth and success.
          
          Thank you for considering us as your partner. We look forward to working with you and achieving great results together.
        </p>
      </div> */}

      <div className="p-4">
        <h1 className="text-4xl font-bold text-center mb-32">Featured Solutions</h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 mb-32">
          <div className="bg-purple-700 text-white p-6 rounded-lg flex flex-col justify-center items-start grid-item fade-in">
            <h2 className="text-2xl font-bold">Software Developer</h2>
            <ul className="mt-4 space-y-2">
              <li>Earnings Per Share: <span className="text-green-500">+9.9% YoY</span></li>
              <li>Operating Margin: <span className="text-green-500">+0.4% YoY</span></li>
              <li>Net Income: <span className="text-green-500">+4.6% YoY</span></li>
              <li>Operating Cash Flow: <span className="text-green-500">+6.5% YoY</span></li>
            </ul>
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-lg flex justify-center items-center grid-item fade-in">
            <h2 className="text-2xl font-bold">Everything Starts with Ambition</h2>
          </div>

          <div className="bg-indigo-900 text-white p-6 rounded-lg flex justify-center items-center grid-item fade-in">
            <h2 className="text-2xl font-bold">Is There a Future of Work with AI?</h2>
          </div>

          <div className="bg-[#D3D3D3] text-black p-6 rounded-lg flex flex-col justify-center items-start grid-item fade-in">
            <h2 className="text-2xl font-bold text-purple-700">GenAI Drives Cloud Investment</h2>
            <p className="mt-4">Pulse of Cloud Quarterly Report</p>
            <p className="text-sm text-gray-500">Presented by Wipro FullStride Cloud</p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg flex flex-col justify-center items-start grid-item fade-in">
            <h2 className="text-2xl font-bold">Industry and AI-Focused Cloud Transformation</h2>
            <p className="mt-4">An MIT Technology Review Insights report in association with Wipro and Oracle</p>
          </div>

          <div className="bg-yellow-500 text-white p-6 rounded-lg flex justify-center items-center grid-item fade-in">
            <h2 className="text-2xl font-bold">Realizing Client Ambitions</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponsiveGrid;

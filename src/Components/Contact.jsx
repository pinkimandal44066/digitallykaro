import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    const serviceId = "service_ejx1sii"; // Your service ID
    const templateId = "template_sgch3n8"; // Your template ID
    const publicKey = "QJ3LYg2phyi7VCyJY"; // Your public key

    const templateParams = {
      from_firstName: firstName,
      from_lastName: lastName,
      from_email: email,
      from_phone: phone,
      message: message,
      to_name: "Digitally Karo By SUKVIR VENTURES LLP.",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        // Show success toast
        toast.success("Message sent successfully!", {
          style: {
            background: "#6A0DAD",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
        });

        // Clear the form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Show error toast
        toast.error("Failed to send message", {
          style: {
            background: "#6A0DAD",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
        });
      });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {/* <div className="relative bg-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white">
            {" "}
            Get In Touch With Us
          </h1>
          <p className="text-lg text-blue-200 mt-4">
            Let's start a conversation. We’d love to hear from you!
          </p>
        </div>
      </div>

      <div className="relative -mt-12 z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Address
            </h3>
            <p className="text-gray-600">123 IT Park, Tech Street, Dhanbad</p>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
            <p className="text-gray-500 text-sm mt-2">
              Mon - Fri, 9:00am - 6:00pm
            </p>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Email</h3>
            <p className="text-gray-600">info@itcompany.com</p>
            <p className="text-gray-600 mt-2">support@itcompany.com</p>
          </div>
        </div>
      </div> */}

      <Toaster />
      {/* <section id="contact" className="py-16 px-4 md:px-8 lg:px-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-12 justify-center">
      
            <div className="w-full mb-12 md:mb-0" data-aos="fade-right">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl md:text-4xl text-[#6A0DAD] font-semibold mb-6 ">
                Enquiry
                </h3>
                <form onSubmit={handleSubmit}>
              
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                        placeholder="Your First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                        placeholder="Your Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                 
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                      placeholder="Your Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#6A0DAD] text-white py-3 px-6 rounded-md hover:bg-black transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}



<section
  id="contact"
  className="py-16 mt-8 px-4 md:px-8 lg:px-20 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-photo/fantasy-anime-style-scene_23-2151135103.jpg?t=st=1729883100~exp=1729886700~hmac=129025ceb1c3c4c21e0e9c159608d1975c2fbeba380ac7db56d5eba3baf86519&w=826')",
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
    backgroundBlendMode: "overlay", 
  
  }}
>
  <div className=" mx-auto">
    <div className="flex flex-col md:flex-row md:space-x-12 justify-center">
      {/* Contact Form */}
      <div className="w-full mb-12 md:mb-0" data-aos="fade-right">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl md:text-4xl text-[#6A0DAD] font-semibold mb-6">
            Enquiry
          </h3>
          <form onSubmit={handleSubmit}>
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                  placeholder="Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                  placeholder="Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Send Message Button */}
            <button
              type="submit"
              className="w-full bg-[#6A0DAD] text-white py-3 px-6 rounded-md hover:bg-black transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactPage;

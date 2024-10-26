




import React from 'react'
import Form from './Components/Form';
import HeroSection from './Components/Herosection';
import AboutUs from './Components/Aboutus';
import Services from './Components/Services';
import Card from './Components/Card';
import ContactForm from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Herosection from './Components/Herosection';
const App = () => {
  return (
    <div>
      {/* <Form /> */}

      {/* <HeroSection /> */}
      <Navbar />
<Home />
      <AboutUs />
      <Services />
      <Herosection />
      {/* <Card />
      <ContactForm />

      <Footer /> */}
    </div>
  )
}

export default App

















// import React from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';
// import './App.css';
// function App() {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <Link to="home" smooth={true} duration={500}>Home</Link>
//         <Link to="about" smooth={true} duration={500}>About Us</Link>
//         <Link to="services" smooth={true} duration={500}>Services</Link>
//         <Link to="contact" smooth={true} duration={500}>Contact</Link>
//       </nav>

//       {/* Sections */}
//       <section id="home" className="section">
//         <h1>Home Section</h1>
//       </section>
      
//       <section id="about" className="section">
//         <h1>About Us Section</h1>
//       </section>
      
//       <section id="services" className="section">
//         <h1>Services Section</h1>
//       </section>
      
//       <section id="contact" className="section">
//         <h1>Contact Section</h1>
//       </section>
//     </div>
//   );
// }

// export default App;














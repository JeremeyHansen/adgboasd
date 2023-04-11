import Home from "./components/Home.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import Gallery from "./components/Gallery.js";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import StarterPage from "./components/StarterPage.js";
import { useEffect, useState } from 'react';
import Footer from './components/Footer.js'

function App() {
  // const [className, setClassName] = useState('starter-container')

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setClassName('invisible')
  //   }, 2900)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
    {/* <StarterPage className={className}/> */}
    <Nav />
      <div className="com-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    <Footer />
    </>
  );
}

export default App;

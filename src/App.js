import Home from "./components/Home.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";


function App() {


  return (
    <>
    <Nav />
      <div className="com-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

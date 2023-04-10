import "../css/service.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  return (
    <div className="service-container1">
      <h1 className="service-title">Services</h1>
      <div className="service-container">
        <div className="first-div">
          <h3>Pressure Cleaning</h3>
          <p>Residential</p>
          <p>Commercial</p>
          <p>Roof Cleaning</p>
        </div>
        <div className="middle-div">
          <h3>Window Washing</h3>
          <p>Residential</p>
          <p>Commercial</p>
          <p></p>
        </div>
        <div className="final-div">
          <h3>Soft Cleaning</h3>
          <p>Residential</p>
          <p>Commercial</p>
        </div>
      </div>
      <button className="button">Contact For A Free Quote</button>
      <div className="service-image-container">
        <img
          className="service-image1"
          alt="spinner"
          src="https://i.pinimg.com/originals/c8/4b/d5/c84bd5eb5962485518835fbcb86c27b4.gif"
        ></img>
        <img
          className="service-image"
          alt="spinner"
          src="https://i.pinimg.com/originals/c8/4b/d5/c84bd5eb5962485518835fbcb86c27b4.gif"
        ></img>
      </div>
     
    </div>
  );
}

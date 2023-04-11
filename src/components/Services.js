import '../css/service.css'
import PressureWasher from "../pressure-washer.png";
import PressureWasher2 from "../pressure-washer (3).png";
import { Link } from "react-router-dom";

import "animate.css";

export default function Services() {
  return (
    <div className="service-container1">
      <h1 class="animate__animated animate__flipInY">Services</h1>
      <div className="service-container">
        <div className="first-div">
          <h3 class="animate__animated animate__rotateInDownLeft">
            Pressure Cleaning
          </h3>
          <div className="service-div">
            <p class="animate__animated animate__fadeInLeftBig">Residential</p>
            <p class="animate__animated animate__fadeInLeftBig">Commercial</p>
            <p class="animate__animated animate__fadeInLeftBig">
              Roof Cleaning
            </p>
          </div>
        </div>
        <div className="second-div">
          <h3 class="animate__animated animate__fadeInDown">Window Washing</h3>
          <div className="service-div">
            <p class="animate__animated animate__fadeInUpBig">Residential</p>
            <p class="animate__animated animate__fadeInUpBig">Commercial</p>
          </div>
        </div>
        <div className="final-div">
          <h3 class="animate__animated animate__rotateInDownRight">
            Soft Cleaning
          </h3>
          <div className="service-div">
            <p class="animate__animated animate__fadeInRightBig">Residential</p>
            <p class="animate__animated animate__fadeInRightBig">Commercial</p>
          </div>
        </div>
      </div>
      <div className="button-div">
        <Link to="/contact">
          <button class="animate__animated animate__fadeInUpBig">Contact For A Free Quote</button>
        </Link>
      </div>
      <div className="left-image-div">
        <img alt="clean" class="animate__animated animate__fadeInBottomLeft" src={PressureWasher}></img>
      </div>
      <div className="right-image-div">
        <img alt="clean" class="animate__animated animate__fadeInBottomRight" src={PressureWasher2}></img>
      </div>
    </div>
  );
}

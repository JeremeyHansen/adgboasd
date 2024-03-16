import "../css/service.css";
import { Link } from "react-router-dom";
import Logo from "../buzzvend.png"
import "animate.css";


export default function Services() {
  return (
    <div className="service-container1">
      <div className="title-container">
        <h1 className="service-title">Why be sober, </h1>
        <h2>when you can be</h2>
          <div className="buzz-title">buzzed?</div>
      </div>
      <div className="top-div">
      <div className="service-container">
          <div className="service-div">
            <h2 class="animate__animated animate__fadeInLeftBig">Sales</h2>
            <p>Our vending machine not only elevates the customer experience but also boosts revenue by encouraging longer stays with more spending opportunities </p>
        </div>
        <div className="service-div">
            <h2 class="animate__animated animate__fadeInLeftBig">Amenities</h2>
            <p>Enhance your guests' experience with amenities tailored specific to your location, providing a fun and unique time for your guests. </p>

          </div>
        <div className="service-div">
            <h2 class="animate__animated animate__fadeInLeftBig">Profit Sharing</h2>
            <p>When we make money, you make money! We operate on a profit-share model, ensuring mutual success and sustainable growth. </p>

          </div>
      </div>
      <div className="service-img">
        <img alt="logo" src={Logo}>
        </img>
      </div>
      </div>
      <div className="button-div">
        <Link to="/contact">
          <button class="animate__animated animate__fadeInUpBig">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

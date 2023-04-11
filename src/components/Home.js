import "../css/home.css";
import PressureWasher from "../pressure-washer.png";
import "animate.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-title">
        <h1 class="animate__animated animate__backInRight">
          <span>Pure </span>Quality
        </h1>
      </div>
      <div className="paragraph">
        <p class="animate__animated animate__backInLeft">
          is your local Charlotte, NC based Pressure and Soft Washing Company.
          We take great pride in providing top quality work and service to home
          owners, businesses and property managers in the Mecklenburg area, as
          well as neighboring counties.
        </p>
        <div className="mobile-addy">
          <p class="animate__animated animate__backInLeft">
            <span className="addy">Email: </span>purequalitywashing@gmail.com
          </p>
        </div>
        <p></p>
        <div className="mobile-addy">
          <p class="animate__animated animate__backInRight">
            <span className="addy">Phone Number: </span>(704)-614-5084
          </p>
        </div>
      </div>
      <div className="home-image-container">
        <img
          alt="clean"
          class="animate__animated animate__fadeInUp"
          src={PressureWasher}
        ></img>
      </div>
    </div>
  );
}

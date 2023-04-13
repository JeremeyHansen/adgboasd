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
            <span className="addy">
              Email:
              <a href="mailto:purequalitywashing@gmail.com?Subject=Leave%20your%20name%20and%20number%20and%20tell%20us%20a%20about%20your%20project.%20Thanks!">
                {" "}
                purequalitywashing@gmail.com
              </a>
            </span>
          </p>
        </div>
        <p></p>
        <div className="mobile-addy">
          <p class="animate__animated animate__backInRight">
            <span className="addy">
              Phone Number:<a href="tel:+17046145084"> (704)-614-5084</a>{" "}
            </span>
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

import "../css/about.css";
import PressureWasher from "../pressure-washer.png";
import PressureWasher2 from "../pressure-washer (3).png";
import 'animate.css';

export default function About() {
  return (
    <div className="about-container">
      <div>
        <h1 class="animate__animated animate__flipInY">About</h1>
        <div className="text-about">
          <p class="animate__animated animate__fadeIn">
            <span>Pure <span className="quality">Quality</span></span> was founded in 2019 by John Paul, a Charlotte native who
            has always had a passion for keeping his community clean and
            beautiful. Starting out as a one-man operation, John Paul used his
            pressure washing expertise to clean driveways, sidewalks, and homes
            for his neighbors. Over the years, John Paul's reputation for quality
            work and exceptional customer service grew, and he soon found
            himself with more work than he could handle on his own. In 2020,
            John Paul hired his first employee, and the business has been growing
            steadily ever since. Today, <span>Pure <span className="quality">Quality</span></span> is one of the most trusted
            names in the Charlotte area when it comes to pressure washing
            services. With a team of highly skilled and trained
            employees, <span>Pure <span className="quality">Quality</span></span> is equipped to handle projects of any size,
            from small residential jobs to large commercial properties. Despite
            its growth, <span>Pure <span className="quality">Quality</span></span> has remained committed to the same values
            that John Paul founded the business on: honesty, integrity, and a
            commitment to excellence. Whether you need your driveway pressure
            washed or your entire building cleaned, you can trust <span>Pure <span className="quality">Quality</span></span>
            to get the job done right.
          </p>
        </div>
        <div className="left-pressure-about">
          <img class="animate__animated animate__flipInY" src={PressureWasher} alt="clean"></img>
        </div>
        <div className="right-pressure-about">
          <img class="animate__animated animate__flipInY" alt="clean" src={PressureWasher2}></img>
        </div>
      </div>
    </div>
  );
}

import "../css/home.css";
import BuzzVend from "../buzzvend.png";
import "animate.css";

export default function Home() {
  return (
    <div className="home-container">
        <div className="image">
          <img
            alt="clean"
            className="home-image"
            src={BuzzVend}
          ></img>
        </div>
      <div className="home-content">
        <div class="animate__animated animate__slideInLeft">
          <div className="home-title">
            <h1 className="title1">Buzz</h1>
            <h1 className="title2">Box<span>.</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}


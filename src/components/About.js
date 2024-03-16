import "../css/about.css";
import 'animate.css';
import BuzzVend2 from '../buzzvend2.png';
import { PiSunglassesBold } from "react-icons/pi";
import { CgCardSpades } from "react-icons/cg";
import { GiHeartEarrings } from "react-icons/gi";
import { IoDiceOutline } from "react-icons/io5";
import { BsPatchQuestion } from "react-icons/bs";
import { PiBeerStein } from "react-icons/pi";
import { BiGame } from "react-icons/bi";
import { GiClothes } from "react-icons/gi";
import { CiSquarePlus } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";



export default function About() {
  return (
    <div className="about-container">
      <div className="left">
        <div className="text-about">
          <div className="top-box">
          <h1 class="animate__animated animate__fadeIn">
            Meet <span>Buzz</span> Box<span>.</span> 
          </h1>
          <p>Your ultimate partner in spicing up the bar scene. Our vending machines offer everything from cheeky novelties to essential party gear, bringing a fresh dose of excitement to your establishment. Let's turn your bar into the buzz of the town.</p>
          </div>
        </div>
        <div className="products">
          <h1>What products do we carry?</h1>
          <div className="product-list">
            <div>
              <p>
                <div className="about-icon">
                  <PiSunglassesBold /> 
                </div>
                Sunglasses 
              </p> 
            </div>
            <div>
              <p>
              <div className="about-icon">
                  <BiGame /> 
                </div>
                Nostalgic Goods 
              </p> 
            </div>
            <div>
              <p>
              <div className="about-icon">
                  <GiHeartEarrings /> 
                </div>
                Earings 
              </p> 
            </div>
            <div>
              <p>
              <div className="about-icon">
                  <CgCardSpades /> 
                </div>
                Cards 
              </p> 
            </div>
            <div>
              <p>
              <div className="about-icon">
                  <IoDiceOutline /> 
                </div>
                Dice 
              </p> 
            </div>
            <div>
              <p>
              <div className="about-icon">
                  <GiClothes /> 
                </div>
                Merchandise 
              </p> 
            </div>
            <div>
              <p>
              <div className="about-icon">
                  <PiBeerStein /> 
                </div>
                Drinking Accessories 
              </p> 
            </div>
            <div>
              <p>
              <div className="about-icon">
                  <BsPatchQuestion /> 
                </div>
                Mystery Packs 
              </p> 
            </div>
            <div>
              <p>
              <div className="about-icon">
              <CiCamera />
                </div>
                Cameras 
              </p> 
            </div>
            <div>
              <p>
              <div className="about-icon">
              <CiSquarePlus />
                </div>
                Much Much More! 
              </p> 
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img alt="second vending machine" className="about-img" src={BuzzVend2}></img>
      </div>
    </div>
  );
}

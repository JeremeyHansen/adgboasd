import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/gallery.css";
import 'animate.css';

// images
import driveway1before from "../assets/driveway1.jpg";
import driveway1after from "../assets/driveway1after.jpg";
import garagebefore from "../assets/garagebefore.jpg";
import garageafter from "../assets/garageafter.jpg";
import driveway2before from "../assets/driveway2before.jpg";
import driveway2after from "../assets/driveway2after.jpg";

export default function Gallery() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
    <h1 className="animate__animated animate__flipInY" id = "gal-title">GALLERY</h1>
    <div className="gallery-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        ssr={true} // means to render carousel on server-side.
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
      >

          <div className="car"> 
            <img src = {driveway1before} alt="hi"></img>
          </div>
          <div className="car"> 
          <img src={driveway1after} alt="hi"></img>
          </div>
          <div className="car">
          <img src={garagebefore} alt="hi"></img>
          </div>
          <div className="car">
          <img src={garageafter} alt="hi"></img>
          </div>
          <div className="car">
          <img src={driveway2before} alt="hi"></img>
          </div>
          <div className="car">
          <img src={driveway2after} alt="hi"></img>
          </div>
     </Carousel>
     </div>
      ;
    </>
  );
}

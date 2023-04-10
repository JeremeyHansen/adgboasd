import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/gallery.css";

export default function Gallery() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 13,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <h1 className="gal">Gallery</h1>
      <div className="gallery-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
        >
          <div className="car">
            <img src="https://cdnassets.stihlusa.com/1630514494-rb400act2005.jpg?fit=crop&h=554&w=984" alt="hi"></img>
          </div>
          <div className="car">
            <img src="https://cdnassets.stihlusa.com/1630514494-rb400act2005.jpg?fit=crop&h=554&w=984" alt="hi"></img>
          </div>
          <div className="car">
            <img src="https://cdnassets.stihlusa.com/1630514494-rb400act2005.jpg?fit=crop&h=554&w=984" alt="hi"></img>
          </div>
          <div className="car">
            <img src="https://cdnassets.stihlusa.com/1630514494-rb400act2005.jpg?fit=crop&h=554&w=984" alt="hi"></img>
          </div>
          <div className="car">
            <img src="https://cdnassets.stihlusa.com/1630514494-rb400act2005.jpg?fit=crop&h=554&w=984" alt="hi"></img>
          </div>
          <div className="car">
            <img src="https://cdnassets.stihlusa.com/1630514494-rb400act2005.jpg?fit=crop&h=554&w=984" alt="hi"></img>
          </div>
          <div className="car">
            <img src="https://cdnassets.stihlusa.com/1630514494-rb400act2005.jpg?fit=crop&h=554&w=984" alt="hi"></img>
          </div>
        </Carousel>
        ;
      </div>
    </>
  );
}

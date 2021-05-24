import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import photo from "../../images/child.jpg";
import photo1 from "../../images/card.jpg";
import photo3 from "../../images/join.jpg";

import './patner.css'

function Patner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div style={{ marginTop: "90px", marginBottom: "70px" }}>
      <h1 className="heade"><span style={{fontWeight: 'lighter'}}>Global</span> Patners</h1>
      <div style={{ marginLeft: "40px", marginRight: "40px" }}>
        <Carousel
          arrows={false}
          swipeable={true}
          draggable={false}
          className="slider"
          infinite
          showDots={false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          <div>
            <img src={photo} alt="patner" width="300px" height="200px" style={{borderRight:'1px solid grey', objectFit: 'cover', overflow: 'hidden'}}/>
          </div>
          <div>
            <img src={photo1} alt="patner" width="300px" height="200px"  style={{borderRight:'1px solid grey', objectFit: 'cover', overflow: 'hidden'}}/>
          </div>
          <div>
            <img src={photo3} alt="patner" width="300px" height="200px" style={{borderRight:'1px solid grey', objectFit: 'cover', overflow: 'hidden'}}/>
          </div>
          <div>
            <img src={photo1} alt="patner" width="300px" height="200px" style={{borderRight:'1px solid grey', objectFit: 'cover', overflow: 'hidden'}}/>
          </div>
          <div>
            <img src={photo3} alt="patner" width="300px" height="200px" style={{borderRight:'1px solid grey', objectFit: 'cover', overflow: 'hidden'}}/>
          </div>
        </Carousel>
      </div>
    </div>
    </>
  );
}

export default Patner;

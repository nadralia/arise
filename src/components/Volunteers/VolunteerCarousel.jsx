import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Volunteer from "./Volunteer";

import photo from "../../images/volunteer.jpg";
import photo1 from "../../images/volunteer_02.jpg";
import photo2 from "../../images/volunteer_03.jpg";

function VolunteerCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      //slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      //slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      //slidesToSlide: 1 // optional, default to 1.
    },
  };
  return (
    <div style={{ marginTop: "50px", marginBottom: "70px" }}>
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>Meet Our Volunteer</h1>
      <div style={{ marginLeft: "40px", marginRight: "40px" }}>
        <Carousel
          arrows={false}
          swipeable={true}
          draggable={false}
          className="slider"
          infinite
          showDots={true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          <div>
            <Volunteer
              img={photo}
              name="John Snow"
              details="Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla"
            />
          </div>
          <div>
            <Volunteer
              img={photo1}
              name="Jack Jane"
              details="Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla"
            />
          </div>
          <div>
            <Volunteer
              img={photo2}
              name="Jeff Scoth"
              details="Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default VolunteerCarousel;

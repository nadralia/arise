import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import HomeCarouselCard from './Card';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../CSS/CardCarousel/CardCarousel.css';

export default class CardCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={2}
        interval={7000}
        isPlaying={true}
        className="home-carousel-container"
      >
        <div className="home-carousel-container-div">
          <p>Latest</p>
          <p className="home-carousel-container-div-h">Campaigns</p>
        </div>
        <Slider>
          <Slide index={0}>
            <div className="home-card-slider-container">
              <HomeCarouselCard
                cname="campaign-1"
                heading="Vocational training"
                text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..."
                num1="$45,583"
                num2="$78,324"
              />
              <HomeCarouselCard
                cname="campaign-2"
                heading="Educational Training"
                text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..."
                num1="$45,583"
                num2="$78,324"
              />
              <HomeCarouselCard
                cname="campaign-3"
                heading="Vocational training"
                text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..."
                num1="$45,583"
                num2="$78,324"
              />
            </div>
          </Slide>
          <Slide index={1}>
            <div className="home-card-slider-container">
              <HomeCarouselCard
                cname="campaign-4"
                heading="Educational Training"
                text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..."
                num1="$45,583"
                num2="$78,324"
              />
              <HomeCarouselCard
                cname="campaign-5"
                heading="Vocational training"
                text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..."
                num1="$45,583"
                num2="$78,324"
              />
              <HomeCarouselCard
                cname="campaign-6"
                heading="Vocational training"
                text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..."
                num1="$45,583"
                num2="$78,324"
              />
            </div>
          </Slide>
        </Slider>
        <div className="home-card-slider-dots">
          <DotGroup />
        </div>
      </CarouselProvider>
    );
  }
}

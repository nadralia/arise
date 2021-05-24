import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Box from '@material-ui/core/Box';

import photo from '../images/child.jpg';
import photo1 from '../images/join.jpg';
import photo3 from '../images/mainevents.jpg';

import '../CSS/carousel.css';

function HomeCarousel(props) {
  var items = [
    {
      description: 'Fruits',
      img: `${photo3}`,
    },
    {
      description: 'Fruits',
      img: `${photo1}`,
    },
    {
      description: 'Fruits',
      img: `${photo}`,
    },
  ];

  return (
    <>
      <div className="carousel__text">
        <h1>Please help African children make them a better life</h1>
        <br />
        <Button variant="contained" fullWidth={false}>
          Donate
        </Button>
      </div>

      <Carousel
        indicators={false}
        animation="slide"
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon />}
      >
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
}

function CarouselItem(props) {
  return (
    <>
      <Paper>
        <Box
          style={{
            backgroundImage: `url(${props.item.img})`,
            backgroundSize: 'cover',
            height: '80vh',
            position: 'relative',
          }}
          className="carousel_item"
        ></Box>
      </Paper>
    </>
  );
}

export default HomeCarousel;

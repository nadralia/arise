import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import BG_Image from '../../images/bg_people.jpg';
import { Container } from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import RedeemIcon from '@material-ui/icons/Redeem';
import MoodIcon from '@material-ui/icons/Mood';

const useStyles = makeStyles((theme) => ({
  section1: {
    background: `url(${BG_Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 400,
  },
  inner__content: {
    padding: 50,
    textAlign: 'center',
  },
  courosel__footer: {
    color: 'white',
    textAlign: 'center',
  },
  courosel__content: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  content__cards: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  test: {
    '@media (max-width: 360px)': {
      position: 'absolute',
      left: '40px',
      top: '380px'
    }
  }
}));

export default function StaticSection2() {
  const classes = useStyles();
  return (
    <div>
      {/* <h2>Meet Our Volunteers</h2> */}
      <Box position="relative" style={{ marginBottom: 200 }}>
        <div className={classes.section1}>
          <Container maxWidth="md">
            <div className={classes.inner__content}>
              <h2 style={{ color: 'white' }}>What people Say?</h2>
              <br />
              <hr width="100px" size="2" color="white" />
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={70}
                totalSlides={3}
                isPlaying={true}
                interval={3000}
              >
                <Slider>
                  <Slide index={0}>
                    <p className={classes.courosel__content}>
                      I go to many land,meet many people and know that there are many poor people that need
                      our help.
                    </p>
                    <br />
                    <div className={classes.courosel__footer}>
                      <p>John Doe</p>
                      <p>
                        Ceo of MediaLeak-<span style={{ color: 'orange' }}>www.medieleak.com</span>
                      </p>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <p className={classes.courosel__content}>
                      I go to many land,meet many people and know that there are many poor people that need
                      our help.
                    </p>
                    <br />
                    <div className={classes.courosel__footer}>
                      <p>John Doe</p>
                      <p>
                        Ceo of MediaLeak-<span style={{ color: 'orange' }}>www.medieleak.com</span>
                      </p>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <p className={classes.courosel__content}>
                      I go to many land,meet many people and know that there are many poor people that need
                      our help.
                    </p>
                    <br />
                    <div className={classes.courosel__footer}>
                      <p>John Doe</p>
                      <p>
                        Ceo of MediaLeak-<span style={{ color: 'orange' }}>www.medieleak.com</span>
                      </p>
                    </div>
                  </Slide>
                </Slider>
              </CarouselProvider>
            </div>
          </Container>
        </div>
        <Box position="absolute" top={350} left={150} zIndex="tooltip" width="75%" className={classes.test}>
          <Container maxWidth="lg">
            <Grid container spacing={5} justify="center">
              <Grid item xs={6} md={3}>
                <Card className={classes.content__cards} color="primary">
                  <CardContent style={{ textAlign: 'center' }}>
                    <FavoriteBorderIcon fontSize="large" color="primary" />

                    <Typography className={classes.card} color="secondary">
                      60,875
                    </Typography>

                    <p>Volunteer Helper</p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card className={classes.content__cards} color="primary">
                  <CardContent style={{ textAlign: 'center' }}>
                    <RedeemIcon fontSize="large" color="primary" />
                    <Typography className={classes.card} color="textSecondary">
                      682,345
                    </Typography>
                    <p>Donated</p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card className={classes.content__cards} color="primary">
                  <CardContent style={{ textAlign: 'center' }}>
                    <MoodIcon fontSize="large" color="primary" />
                    <Typography className={classes.card}>28,374</Typography>
                    <p>Happy Children</p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card className={classes.content__cards} color="primary">
                  <CardContent style={{ textAlign: 'center' }}>
                    <LocalLibraryIcon fontSize="large" color="primary" />
                    <Typography className={classes.card} color="primary">
                      589
                    </Typography>
                    <p>Products & Gifts</p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

import React from "react";
import Carousel from "react-multi-carousel";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";
import FollowComponent from "./Follow";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { orange, yellow } from "@material-ui/core/colors";

import photo from "../../images/child.jpg";
import photo1 from "../../images/card.jpg";
import photo3 from "../../images/join.jpg";

const theme = createMuiTheme({
  palette: {
    secondary: orange,
  },
});

const useStyles = makeStyles((theme) => ({
  section1: {
    padding: "40px 60px",
    backgroundColor: "#1db3e7",
  },
  section2: {
    padding: "60px 60px",
    backgroundColor: "white",
  },
}));

function Follow() {
  const classes = useStyles();
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
    <div style={{ backgroundColor: "white" }}>
      <h3 style={{ textAlign: "center", padding: 40 }}>
        Follow us on Instagram <span style={{ color: "orange" }}>@CharityPlus</span>
      </h3>
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
          <FollowComponent img={photo3} />

          <FollowComponent img={photo} />

          <FollowComponent img={photo1} />

          <FollowComponent img={photo} />

          <FollowComponent img={photo1} />
        </Carousel>
        <br />
        <br />
      </div>

      <Box className={classes.section1}>
        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
          <Box flexGrow={1}>
            <h2 style={{ color: "white" }}>Are you ready to volunteer?</h2>
          </Box>
          <Box marginRight={2}>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="secondary">
                Become a volunteer
              </Button>
            </ThemeProvider>
          </Box>

          <Box>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="warning">
                Make a donation
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Follow;

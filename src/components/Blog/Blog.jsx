import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { usePagination } from "@material-ui/lab/Pagination";

import Header from "../Header/campaignHeader";
import Footer from "../Footer/Footer";

import photo1 from "../../images/card.jpg";
import photo3 from "../../images/mainevents.jpg";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";
// import "../../CSS/blog.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 140,
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    fontSize: "20px",
    padding: "0.4rem",
    margin: "1rem 0",
  },
  li: {
    padding: "0.1rem",
  },
});

function Blog() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 992x)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 992px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 992px)",
  });

  useEffect(() => {
    if (isTabletOrMobile || isTabletOrMobileDevice) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isDesktopOrLaptop, isBigScreen, isTabletOrMobileDevice, isTabletOrMobile]);

  //create mobile view
  const [isMobile, setIsMobile] = useState(false);

  //add clickable buttons
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <div>
      <Box
        style={{
          backgroundImage: `url(${photo3})`,
          backgroundSize: "cover",
          height: "80vh",
          marginBottom: "50px",
          overFlow: "hidden",
        }}
      >
        {isMobile ? (
          <MobileHeader toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} blog />
        ) : (
          <Header blog />
        )}
      </Box>

      <MediaCard />
      <Footer />
    </div>
  );
}
function MediaCard() {
  const classes = useStyles();
  const { items } = usePagination({
    count: 2,
  });
  return (
    <>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={photo1} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/blog/blogDetails">Am a Volunteer</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,
                  vestibulum placerat metus mattis. Aenean dictum vitae nisl nec tempor. Proin varius turpis
                  ut sem porttitor varius. Sed aliquet mi at libero ultrices consectetur.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={photo1} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/blog/blogDetails">Take Shelter From War</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,
                  vestibulum placerat metus mattis. Aenean dictum vitae nisl nec tempor. Proin varius turpis
                  ut sem porttitor varius. Sed aliquet mi at libero ultrices consectetur.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={photo1} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/blog/blogDetails">Why Help</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,
                  vestibulum placerat metus mattis. Aenean dictum vitae nisl nec tempor. Proin varius turpis
                  ut sem porttitor varius. Sed aliquet mi at libero ultrices consectetur.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={photo1} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/blog/blogDetails">The Untold secerts in children</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,
                  vestibulum placerat metus mattis. Aenean dictum vitae nisl nec tempor. Proin varius turpis
                  ut sem porttitor varius. Sed aliquet mi at libero ultrices consectetur.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={photo1} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/blog/blogDetails">The Earth We Live In</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,
                  vestibulum placerat metus mattis. Aenean dictum vitae nisl nec tempor. Proin varius turpis
                  ut sem porttitor varius. Sed aliquet mi at libero ultrices consectetur.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={photo1} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to="/blog/blogDetails">What changed Me</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,
                  vestibulum placerat metus mattis. Aenean dictum vitae nisl nec tempor. Proin varius turpis
                  ut sem porttitor varius. Sed aliquet mi at libero ultrices consectetur.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <nav className="blog_pagination">
          <ul className={classes.ul}>
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;

              if (type === "start-ellipsis" || type === "end-ellipsis") {
                children = "…";
              } else if (type === "page") {
                children = (
                  <button
                    className={classes.btn}
                    type="button"
                    style={{ fontWeight: selected ? "bold" : undefined }}
                    {...item}
                  >
                    {page}
                  </button>
                );
              } else {
                children = (
                  <button type="button" {...item} className={classes.btn}>
                    {type}
                  </button>
                );
              }

              return (
                <li key={index} className={classes.li}>
                  {children}
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Blog;

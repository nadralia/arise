import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import Header from "../Header/campaignHeader";
import Footer from "../Footer/Footer";

import photo from "../../images/2.jpg";
import photo1 from "../../images/1.jpg";
import photo3 from "../../images/mainevents.jpg";

import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";

import "../../CSS/blogDetails.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      // width: '200px',
    },
  },
}));

function BlogDetails() {
  const classes = useStyles();
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
      <CssBaseline />
      <Container>
        <div className={classes.root}>
          <Grid container spacing={8}>
            {/* first grid section */}
            <Grid item xs={12} sm={8}>
              <Box className="blog__main">
                <img src={photo} alt={`blogImage`} />
                <h4>Server-Side Rendering</h4>
                <small>heyy 30-04-2021</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac neque at mi elementum
                  gravida et vitae elit. Etiam ullamcorper auctor orci, id luctus felis laoreet a. Nam nec
                  nulla sit amet tellus pretium rhoncus. Integer interdum, nibh sed posuere aliquet, enim ante
                  lacinia augue, ut ultricies augue erat vel lorem. Vestibulum bibendum dolor sit amet
                  tincidunt lacinia. Nunc sapien libero, condimentum et turpis eget, eleifend hendrerit augue.
                  Duis molestie volutpat feugiat.
                </p>
                <ol>
                  <li>Proin id lacus non dolor viverra hendrerit vel vel magna.</li>
                  <li>Duis iaculis varius urna, nec feugiat enim suscipit vitae.</li>
                  <li>Nulla nec enim eget dui posuere tincidunt sit amet venenatis lorem.</li>
                </ol>

                <ol>
                  <li>Proin id lacus non dolor viverra hendrerit vel vel magna.</li>
                  <li>Duis iaculis varius urna, nec feugiat enim suscipit vitae.</li>
                  <li>Nulla nec enim eget dui posuere tincidunt sit amet venenatis lorem.</li>
                </ol>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac neque at mi elementum
                  gravida et vitae elit. Etiam ullamcorper auctor orci, id luctus felis laoreet a. Nam nec
                  nulla sit amet tellus pretium rhoncus. Integer interdum, nibh sed posuere aliquet, enim ante
                  lacinia augue, ut ultricies augue erat vel lorem. Vestibulum bibendum dolor sit amet
                  tincidunt lacinia. Nunc sapien libero, condimentum et turpis eget, eleifend hendrerit augue.
                  Duis molestie volutpat feugiat.
                </p>
                <hr />
                {/* displaying comments */}
                <h4>Comments</h4>
                <List className={classes.list}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Ali Connors
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                          <button style={{ background: "rgb(247, 169, 25)", padding: "5px" }}>reply</button>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Summer BBQ"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            to Scott, Alex, Jennifer
                          </Typography>
                          {" — Wish I could come, but I'm out of town this…"}
                          <button style={{ background: "rgb(247, 169, 25)", padding: "5px" }}>reply</button>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Sandra Adams
                          </Typography>
                          {" — Do you have Paris recommendations? Have you ever…"}
                          <button style={{ background: "rgb(247, 169, 25)", padding: "5px" }}>reply</button>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
                {/* creating a new comment */}
                <h4>Leave a comment</h4>
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Your Name" width={15} />
                  <TextField id="standard-basic" label="Your Email" />
                  <br />
                  <TextField
                    label="Message"
                    multiline
                    rows={6}
                    variant="standard"
                    placeholder="Message"
                    fullWidth
                    margin="normal"
                  />
                  <button style={{ backgroundColor: "rgb(247, 169, 25)", padding: "15px" }}>
                    Post Comment
                  </button>
                </form>
              </Box>
            </Grid>
            {/* second grid section */}
            <Grid item xs={12} sm={4}>
              <Box className="blog__summary">
                <h5>Categories</h5>
                <p>Fashion</p>
                <p>Food</p>
                <p>Life Style</p>
                <h5>Recent Posts</h5>
                <Box className="blog__recent__post" mb={4}>
                  <img src={photo1} alt="heyy there" />
                  <h6>
                    Server-Side Rendering <br /> <small>30-april-2021</small>
                  </h6>
                </Box>
                <Box className="blog__recent__post" mb={4}>
                  <img src={photo1} alt="heyy there" />
                  <h6>
                    Server-Side Rendering <br /> <small>1-may-2021</small>
                  </h6>
                </Box>
                <Box className="blog__recent__post" mb={4}>
                  <img src={photo1} alt="heyy there" />
                  <h6>
                    Server-Side Rendering <br /> <small>5-may-2021</small>
                  </h6>
                </Box>
                <h5>Tags</h5>
                <Box className="blog__tags">
                  <p>Fashion</p>
                  <p>Food</p>
                  <p>Life Style</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default BlogDetails;

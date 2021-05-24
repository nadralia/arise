import React, { useEffect, useState } from "react";
import '../../CSS/events.css';
import photo from '../../images/card.jpg';
import photo2 from '../../images/marathon.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Links from '@material-ui/core/Link';
import { Link } from "react-router-dom"
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowForward from '@material-ui/icons/ArrowForward';
import EventNote from '@material-ui/icons/EventNote';
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";
import Header from '../Header/campaignHeader';
import Footer from '../Footer/Footer';
function Events() {
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
      <div className="events_photo">
        {isMobile ? <MobileHeader toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} events /> : <Header events />}
        <div className="events_title">
          <p >Events</p>
          <hr />
        </div>
        <p className="events_text">Home/Events</p>
      </div>
      <div className="event_cards">
        <EventCard />
      </div>
      <Footer />
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    textAlign: 'justify',
    marginTop: '30px',
  },
  content: {
    backgroundColor: 'white',
    marginLeft: '60px',
    position: 'relative',
    top: '-50px',
    padding: ' 30px 30px',
    textAlign: 'justify',
  },
});
function EventCard() {
  const classes = useStyles();
  return (
    <Grid container spacing={5} style={{ paddingLeft:30, paddingRight: 30, marginLeft: "auto", marginRight: "auto", width: "100%" }}>
      <Grid container item xs={12} sm={6}>
        <Card className={classes.root} style={{ border: 'none', boxShadow: 'none' }}>
          <CardMedia component="img" alt="kids" image={photo} title="kids" />
        </Card>
        <CardContent className={classes.content}>
          <Typography color="textSecondary" variant="h5" component="h2" gutterBottom>
            <Link to="/event/eventDetail" style={{ color: 'orange' }} underline="none" >Our question reached the United Nations!</Link>
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{ paddingTop: '12px' }}>
            Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum
            placerat metus mattis. Aenean dictum vitae nisl nec tempor. Proin varius turpis ut sem porttitor
            varius. Sed aliquet mi at libero ultrices consectetur.
          </Typography>
          <Link to="/event/eventDetail"><Links to="/"
            component="button"
            variant="h6"
            underline="none"
            color=""
            className="event_link"
            style={{ fontWeight: 700, paddingTop: '10px' }}

          >
            Read more <ArrowForward style={{ fontSize: 25, fontWeight: 700 }} className="icon_link" />
          </Links></Link>
          <Typography variant="body1" color="textSecondary" component="p" style={{ paddingTop: '18px' }}>
            <LocationOnIcon className="icon_color" style={{ fontSize: 20, paddingRight: 1 }} />
            25 Manhattan, Newyork, USA
            <EventNote className="icon_color" style={{ fontSize: 20, paddingRight: 1, paddingLeft: 22 }} />
            Thu, 08/03/2017 - 06:00
          </Typography>
        </CardContent>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <Card className={classes.root} style={{ border: 'none', boxShadow: 'none' }}>
          <CardMedia component="img" alt="kids" image={photo2} title="kids" />
        </Card>
        <CardContent className={classes.content}>
          <Typography color="textSecondary" variant="h5" component="h2" gutterBottom>
            Charity Marathon 2016: Run for better life
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{ paddingTop: '12px' }}>
            Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum
            placerat metus mattis. Aenean dictum vitae nisl nec tempor. Proin varius turpis ut sem porttitor
            varius. Sed aliquet mi at libero ultrices consectetur.
          </Typography>
          <Links
            component="button"
            variant="h6"
            underline="none"
            color=""
            className="event_link"
            style={{ fontWeight: 700, paddingTop: '10px' }}
          >
            Read more <ArrowForward style={{ fontSize: 25, fontWeight: 700 }} className="icon_link" />
          </Links>
          <Typography variant="body1" color="textSecondary" component="p" style={{ paddingTop: '18px' }}>
            <LocationOnIcon className="icon_color" style={{ fontSize: 20, paddingRight: 1 }} />
            25 Manhattan, Newyork, USA
            <EventNote className="icon_color" style={{ fontSize: 20, paddingRight: 1, paddingLeft: 22 }} />
            Thu, 08/03/2017 - 06:00
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default Events;

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import '../../CSS/events.css';
import "../../CSS/EventDetails.css";

import kids from '../../images/event-detail.jpg';
import photo2 from '../../images/event-detail2.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { Link } from "react-router-dom";
import Map from '../Contact/Map';
import Box from '@material-ui/core/Box';
import MobileHeader from "../Header/MobileHeader";
import Header from '../Header/campaignHeader';
import Footer from '../Footer/Footer';

function EventDetail() {
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
        <div >
            <div className="events_photo">
                {isMobile ? <MobileHeader toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /> : <Header />}

                <div className="events_title">
                    <p >Event Detail</p>
                    <hr />
                </div>
                <p className="events_text">Home/Event Detail</p>
            </div>
            <div className="event_details">
                <EventCard />
            </div>
            <Footer />
        </div>
    )
}
const useStyles = makeStyles({
    root: {
        textAlign: 'justify',
        paddingTop: '30px',
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    listWrap: {


    }
});
function EventCard() {
    const classes = useStyles();
    return (
        <Grid container spacing={6} className={classes.root}>
            <Grid container item xs={12} sm={8}>
                <Card style={{ border: 'none', boxShadow: 'none' }}>
                    <CardMedia component="img" alt="kids" image={kids} title="kids" />
                </Card>
                <Typography color="secondary" variant="h5" component="h2">
                    <Link to="/event/eventDetail" style={{ color: 'black', fontWeight: 'bold' }} underline="none" >Our question reached the United Nations!</Link>
                </Typography>
                <Typography variant="caption" component="p" style={{ width: '100%' }} color="textSecondary">
                    -   29 November 2015 <span style={{ color: 'orange' }}>Comment</span></Typography>
                <Typography variant="body1" color="textSecondary" component="p" style={{ paddingTop: '12px', lineHeight: '30px', fontsize: '40px' }}>
                    Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum
                    placerat metus mattis. Aenean dictum vitae nisl nec tempor. Proin varius turpis ut sem porttitor
                    varius. Sed aliquet mi at libero ultrices consectetur.
                </Typography>

                <Typography variant="body1" color="textSecondary" component="p" style={{ paddingTop: '12px', lineHeight: '30px', fontsize: '40px' }}>
                    Blog content also helps keep your social media presence going -- instead of asking your social
                    media manager to come up with brand new
                    original content for social media (or creating that content yourself), your blog can serve as
                    that repository of content. You're strengthening your social reach with blog content and driving
                    new website visitors to your blog via your social channels. Quite a symbiotic relationship, if I do say so myself.
                </Typography>
                <Box className="mapsize" >
                    <Map />
                </Box>
            </Grid>
            <Grid container item xs={12} sm={4} style={{height:'50%'}}>
                <Typography color="textPrimary" variant="h5" component="h2">Categories</Typography>
                <List style={{ width: '100%' }}>
                    <button  className="listWrap" ><span>Food </span></button>
                    <button className="listWrap" ><span>Fashion</span></button>
                    <button className="listWrap" ><span>Life Style</span></button>
                    <button className="listWrap" ><span>Music</span></button>
                    <button className="listWrap" ><span>Sport</span></button>
                </List>
                <Typography color="textPrimary" variant="h5" component="h2">Recent Posts</Typography>
                <Box className="blog__recent__post" mb={4}>
                  <img src={photo2} alt="serverside" />
                <Typography color="textPrimary" variant="h6" component="h2">Server-Side Rendering                
                <Typography variant="caption" component="p" style={{ width: '100%' }} color="textSecondary">
                  29 November 2015</Typography>
                </Typography>
                </Box>
                <Box className="blog__recent__post" mb={4}>
                  <img src={photo2} alt="serverside" />
                <Typography color="textPrimary" variant="h6" component="h2">Coffee shops continue to conquer                
                <Typography variant="caption" component="p" style={{ width: '100%' }} color="textSecondary">
                  29 November 2015</Typography>
                </Typography>
                </Box>
                <Box className="blog__recent__post" mb={4}>
                  <img src={photo2} alt="serverside" />
                <Typography color="textPrimary" variant="h6" component="h2">Country big concert report               
                <Typography variant="caption" component="p" style={{ width: '100%' }} color="textSecondary">
                  29 November 2015</Typography>
                </Typography>
                </Box>
                <Box className="blog__recent__post" mb={4}>
                  <img src={photo2} alt="serverside" />
                <Typography color="textPrimary" variant="h6" component="h2">How the future could resemble               
                <Typography variant="caption" component="p" style={{ width: '100%' }} color="textSecondary">
                  29 November 2015</Typography>
                </Typography>
                </Box>
                <Box className="blog__recent__post" mb={4}>
                  <img src={photo2} alt="serverside" />
                <Typography color="textPrimary" variant="h6" component="h2">Latest Fashion Trends 2016                
                <Typography variant="caption" component="p" style={{ width: '100%' }} color="textSecondary">
                  29 November 2015</Typography>
                </Typography>
                </Box>
                <Typography color="textPrimary" variant="h5" component="h2" style={{ width: '100%' }} >Tags</Typography>    
                <List  style={{ width: '100%' }} className="event__tags"> 
                <button  >FOOD </button>
                    <button >FASHION</button>
                    <button >LIFE STYLE</button>
                    <button>MUSIC</button>
                    <button  >SPORT</button>
                </List>           
            </Grid>
        </Grid>
    );
}

export default EventDetail;
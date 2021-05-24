import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import '../CSS/aboutUs.css';
import '../CSS/events.css';
import './Header/Header.css'
import aboutus from '../images/aboutus.jpg';
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';

import Typography from '@material-ui/core/Typography';
import MobileHeader from "./Header/MobileHeader";
import Header from './Header/campaignHeader';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';

function AboutUs() {
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
                {isMobile ? <MobileHeader toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} aboutus /> : <Header aboutus />}

                <div className="events_title">
                    <p >About Us</p>
                    <hr />
                </div>
                <p className="events_text">Home</p>
            </div>
            <div className="event_details aboutus ">
                <div>
                    <h2>Who we are?</h2>
                    <Typography color="textPrimary" component="p" style={{ lineHeight: "30px", marginBottom: 20 }} >
                        ArrayLorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Typography color="textPrimary" component="p" style={{ lineHeight: "30px" }} >
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis. Riber tempor soluta nobis eleifend option
                        congue nihil imperdiet doming id quod mazim.
                    </Typography>
                    <div className="header__button section_two_buttonn">
                        <Link to="#">Readmore</Link>
                    </div>
                </div>
                <div className="aboutus_image">
                <img alt="aboutus" src={aboutus} />
                </div>
            </div>
            <div className="event_details aboutus_grid">
                <h2>How Can You Help ?</h2>
                <SingleLineGrid  />
            </div>
            <Footer />
        </div>
    )
}

const tileData = [
    {
        img: image1,
        title: 'Make a Gift',
        icon: <CardGiftcardIcon fontSize='large' />,
    },
    {
        img: image2,
        title: 'Become a Volunteer',
        icon: <FavoriteBorderIcon fontSize='large' />,
    },
    {
        img: image3,
        title: 'Send Donation',
        icon: <AttachMoneyIcon fontSize='large' />,
    },
];
const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-evenly',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding: '20px',
    },
    gridList: {
        width: '100%',
    },
    title: {
        color: 'white',
        fontSize: '22px',
        fontWeight: '600'
    },
    icon: {
        color: 'white',
    },
    gridListTile: {
    },
    titleBar: {
        padding: "15px",
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.6) 100%, ' +
            'rgba(0,0,0,0) 70%, rgba(0,0,0,0.3) 100%)',
    },
}));

function SingleLineGrid() {
    const classes = styles();
    return (
        <Grid item xs={12} style={{ width: "100%" }}>
            <Grid container justify="center" spacing={4} >
                {tileData.map(tile => (
                    <Grid item xs={12} sm={4}>
                        <GridList className={classes.gridList}  >
                            <GridListTile key={tile.img} style={{ width: "100%", height: 300 }}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton className={classes.icon}>
                                            {tile.icon}
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                />
                            </GridListTile>
                        </GridList>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
export default AboutUs;

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MobileHeader from "./Header/MobileHeader";
import Header from './Header/campaignHeader';
import Footer from './Footer/Footer';
import '../CSS/aboutUs.css';
import image from '../images/gallery1.jpg';
import image1 from '../images/gallery2.jpg';
import image2 from '../images/gallery3.jpg';
import image3 from '../images/gallery5.jpg';
import image4 from '../images/gallery4.jpg';
import image5 from '../images/gallery7.jpg';

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
//import tileData from './tileData';
const Gallery = (props) => {
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
  const cols = getCols(props.width);
  const classes = useStyles();
  return (
    <div >
      <div className="events_photo">
        {isMobile ? <MobileHeader toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} aboutus /> : <Header aboutus />}

        <div className="events_title">
          <p >Gallery</p>
          <hr />
        </div>
        <p className="events_text">Home/Gallery</p>
      </div>
      <div className="event_details aboutus_grid">
        <div className={classes.root}>
          <GridList cellHeight="auto" className={classes.gridList} cols={cols} spacing={30}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}  >
                <img src={tile.img} alt={tile.title} style={{ height: '100%'}} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
      <Footer />
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
   justifyContent:'center',
  },
  gridList: {
    width: "100%",
    height: "100%",
    margin: "auto !important",
  },
}));

const tileData = [
  {
    img: image,
    title: 'Image',
    cols: 2,
  },
  {
    img: image1,
    title: 'Image1',
    cols: 2,
  },
  {
    img: image2,
    title: 'Image2',
    cols: 2,
  },
  {
    img: image5,
    title: 'Image5',
    cols: 2,
  },
  {
    img: image4,
    title: 'Image',
    cols: 2,
  },
  {
    img: image3,
    title: 'Image3',
    cols: 2,
  },
  {
    img: image1,
    title: 'Image1',
    cols: 2,
  },
  {
    img: image2,
    title: 'Image2',
    cols: 2,
  },
  {
    img: image5,
    title: 'Image5',
    cols: 2,
  },
];
function getCols(screenWidth) {
  if (isWidthUp('lg', screenWidth)) {
    return 6;
  }

  if (isWidthUp('sm', screenWidth)) {
    return 2;
  }
}

export default withWidth()(Gallery);
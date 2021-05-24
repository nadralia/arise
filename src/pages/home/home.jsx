import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/header';
import HeaderCarousel from '../../components/Carousel';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import FollowCarousel from '../../components/Follow/FollowCarousel';
import StaticSection from '../../components/Home/StaticSection';
import StaticSection1 from '../../components/Home/StaticSection1';
import Volunteer from '../../components/Volunteers/VolunteerCarousel'
import StaticSection2 from '../../components/Home/StaticSection2';
import Patner from '../../components/Patners/Patner'
import VideoSection from "../../components/Home/VideoSection"
import './Home.css';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../../components/Header/MobileHeader';

const HomePage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 992x)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 992px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 992px)',
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
    <div className="home">
      {isMobile ? (
        <MobileHeader toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} home />
      ) : (
        <Header home />
      )}

      <HeaderCarousel />
      <StaticSection1 />
      <VideoSection/>
      <CardCarousel />
      <StaticSection />
      <Volunteer />
      <StaticSection2 />
      <Patner />
      <FollowCarousel />
      <Footer />
    </div>
  );
};
export default HomePage;

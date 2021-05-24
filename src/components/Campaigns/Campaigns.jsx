import React,{useState, useEffect} from 'react'
import "../../CSS/Campaigns/Campaigns.css"
import Header from "../Header/campaignHeader"
import Footer from "../Footer/Footer"
import CampaignCard from "../CampaignCard/CampaignCard";
import {useMediaQuery} from "react-responsive"
import MobileHeader from "../Header/MobileHeader";
function Campaigns() {
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
        <div className="campaigns-container">
            {
                isMobile?<MobileHeader
                 toggleMenu={toggleMenu} 
                setToggleMenu={setToggleMenu}
                campaign
                />:
                <section className="campaigns-hero">
                <Header campaign/> 
                <div className="campaign-hero-text">
                    <p className="campaign-hero-text-h">Your kindness might help lots of <br></br>people have better lives</p>
                    <hr style={{ width:"6em"}} className = "campaign-hero-line"/>
                </div>
            </section>


            }
                       <div className="campaign-contents-container">
                <section className="campaign-button-section">
                    <button id="active">ALL</button>
                    <button>EDUCATION</button>
                    <button>ENVIRONMENT</button>
                    <button>FOOD</button>
                    <button>OTHERS </button>
                    <button>WATER DRINKS</button>
                </section>
                <section className="campaigns-card-section">
                    <CampaignCard cname="campaign-1" heading="Vocational training" text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..." num1="$45,583" num2="$78,324" />                   
                    <CampaignCard cname="campaign-2" heading="Educational Training" text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..." num1="$45,583" num2="$78,324" />
                    <CampaignCard cname="campaign-3" heading="Vocational training" text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..." num1="$45,583" num2="$78,324" />
                    <CampaignCard cname="campaign-4" heading="Educational Training" text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..." num1="$45,583" num2="$78,324" />                   
                    <CampaignCard cname="campaign-5" heading="Vocational training" text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..." num1="$45,583" num2="$78,324" />
                    <CampaignCard cname="campaign-6" heading="Vocational training" text="Maecenas sed diam eget risus varius blandi amet non magna ullamcorper nulaon..." num1="$45,583" num2="$78,324" />
                </section>
            </div>
            <div className="campaigns-footer-area">
                <Footer/>
            </div>
        </div>
        
        )
}

export default Campaigns

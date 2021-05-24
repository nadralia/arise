import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./campaignHeader.css";

const Header = ({campaign, blog,aboutus,events}) => {
  const [homeDropDown, showHomeDropdown] = useState(false);
  const [campaignDropDown, showcampaignDropdown] = useState(false);
  const [blogsDropDown, showBlogsDropdown] = useState(false);

  return (
    <div className="campaignheader">
      <div className="header__content">
        <div className="header__image">
          <img
            alt="not found"
            src="https://www.spyropress.com/templates/charityplus/images/logo-2.png"
            className="header__image"
          />
        </div>
        <div className="header__items">
          <ul className="header__options">
            <li
              className="header__optionsli white-campaign-header"
              onMouseOver={() => showHomeDropdown(false)}
              onMouseLeave={() => showHomeDropdown(false)}
              onMouseMove={() => showHomeDropdown(false)}
            >
              <Link to="/">
                <span className="white-campaign-header">Home</span>{" "}
                {/* <ExpandMoreIcon className="header__homeIcon" fontSize="small" /> */}
              </Link>
              {homeDropDown ? (
                <ul className="header__dropdown">
                  <li>
                    {" "}
                    <Link to="#">Home 1</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                  <Link to="#">Home 2</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                    {" "}
                    <Link to="#">Home 3</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                  <Link to="#">Home 4</Link>
                  </li>
                  <hr className="header__line"></hr>
                  <li>
                  <Link to="#">Home 5</Link>
                  </li>
                </ul>
              ) : null}
            </li>

            <li
              onMouseOver={() => showcampaignDropdown(false)}
              onMouseLeave={() => showcampaignDropdown(false)}
              className="header__optionsli white-campaign-header"
            >
              <Link to="/campaigns">
                <span className={campaign&&`header__isactive`} style={{color:"#fff"}}>Campaigns</span>{" "}
                {/* <ExpandMoreIcon
                  className="haeder__campaignsIcon"
                  fontSize="small"
                /> */}
              </Link>
              {campaignDropDown ? (
                <ul className="header__dropdown">
                  <li>
                    {" "}
                    <Link to="#">Campaigns Grid</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                  <Link to="#">Campaigns List</Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li className="header__optionsli white-campaign-header">
            <Link to="/events" className="white-campaign-header">
            <span className={events&`header__isactive`}>Events</span>  {" "}
            </Link></li>
            <li
              onMouseOver={() => showBlogsDropdown(false)}
              onMouseLeave={() => showBlogsDropdown(false)}
              className="header__optionsli white-campaign-header"
            >
              <Link to="/blog" className="white-campaign-header">
                <span className={blog&&`header__isactive`}>Blog</span>  {" "}
                {/* <ExpandMoreIcon className="header__blogIcon" fontSize="small" /> */}
              </Link>
              {blogsDropDown && (
                <ul className="header__dropdown">
                  <li>
                    {" "}
                    <Link to="#">Grid Layout</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                  <Link to="#">List layout</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                    {" "}
                    <Link to="#">Mason layout</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                  <Link to="#">post format</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="header__optionsli white-campaign-header">
            <Link to="/contact" className="white-campaign-header">Contact</Link>
            </li>
            <li className="header__optionsli white-campaign-header">
              <Link to="/gallery" className="white-campaign-header">Gallery</Link>
           
            </li>
            <li className="header__optionsli white-campaign-header">
              <Link to="/aboutus" className="white-campaign-header">About Us</Link>
           
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};
export default Header;

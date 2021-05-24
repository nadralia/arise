import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({home,  contact, blog, campaign, events,gallery,aboutus}) => {
  const [homeDropDown, showHomeDropdown] = useState(false);
  const [campaignDropDown, showcampaignDropdown] = useState(false);
  const [blogsDropDown, showBlogsDropdown] = useState(false);
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__image">
          <Link to="/">
            <img
              alt="not found"
              src="https://www.spyropress.com/templates/charityplus/images/logo.png"
              className="header__image"
            />
          </Link>
        </div>
        <div className="header__items">
          <ul className="header__options">
            <li
              className="header__optionsli"
              onMouseOver={() => showHomeDropdown(false)}
              onMouseLeave={() => showHomeDropdown(false)}
            >
              <Link to="/">
                <span className={home&&`header__isactive`}>
                Home 
                {/* <ExpandMoreIcon className="header__homeIcon" fontSize="small" /> */}
                </span>

              </Link>
              {homeDropDown ? (
                <ul className="header__dropdown">
                  <li>
                    {' '}
                    <Link to="#">Home 1</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                    <Link to="#">Home 2</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                    {' '}
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
              className="header__optionsli"
            >
              <Link to="/campaigns">
                <span className={campaign&&`header__isactive`}>
                Campaigns{" "}
                {/* <ExpandMoreIcon
                  className="haeder__campaignsIcon"
                  fontSize="small"
                /> */}
                </span>
                
              </Link>
              {campaignDropDown ? (
                <ul className="header__dropdown">
                  <li>
                    {' '}
                    <Link to="#">Campaigns Grid</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                    <Link to="#">Campaigns List</Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li className="header__optionsli">
              <Link to="/events" ><span  className={events&&`header__isactive`}>Events</span></Link>
            </li>
            <li
              onMouseOver={() => showBlogsDropdown(false)}
              onMouseLeave={() => showBlogsDropdown(false)}
              className="header__optionsli"
            >
              <Link to="/blog">
                <span className={blog&&`header__isactive`}>
                Blog 
                {/* <ExpandMoreIcon className="header__blogIcon" fontSize="small" /> */}
                </span>

              </Link>
              {blogsDropDown && (
                <ul className="header__dropdown">
                  <li>
                    {' '}
                    <Link to="#">Grid Layout</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                    <Link to="#">List layout</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                    {' '}
                    <Link to="#">Mason layout</Link>
                  </li>
                  <hr className="header__line" />
                  <li>
                    <Link to="#">post format</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="header__optionsli">

              <Link to="/contact"><span className={contact&&`header__isactive`}>Contact</span></Link>              

            </li>
            <li className="header__optionsli">
              <Link to="/gallery"><span className={gallery&&`header__isactive`}>Gallery</span></Link>
           
            </li>
            <li className="header__optionsli">
              <Link to="/aboutus"><span className={aboutus&&`header__isactive`}>About Us</span></Link>
           
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;

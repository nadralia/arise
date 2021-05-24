import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import "./volunteer.css";

function Volunteer({ img, name, details }) {
  return (
    <>
      <div className="volunteer__w">
        <div>
          <img src={img} alt="volunteer" />
          <div className="hello">
          <div className="heyy">
            <span>
              <FacebookIcon />
            </span>
            <span>
              <TwitterIcon />
            </span>
            <span>
              <LinkedInIcon />
            </span>
            <span>
                <WhatsAppIcon />
            </span>
          </div>
          </div>
        </div>
        <h3 className="volunteer__text">{name}</h3>
        <p className="volunteer__details">{details}</p>
      </div>
    </>
  );
}

export default Volunteer;

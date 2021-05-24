import React from 'react';
import "../../CSS/Campaigns/CampaignCard.css"

function classnamer(elementname){
  switch(elementname) {
    case "campaign-1":
      return "campaign-1";
      break;
    case "campaign-2":
      return "campaign-2";
      break;
    case "campaign-3":
      return "campaign-3";
      break;
    case "campaign-4":
      return "campaign-4";
      break;
    case "campaign-5":
      return "campaign-5";
      break;
    case "campaign-6":
      return "campaign-6";
      break;
    default:
      // code block
  }
}

export default function CampaignCard({cname, heading, text , num1 , num2}) {
  
  return (
    <div className={"card-campaign-container card-campaign-container-"+classnamer(cname)}>
      <div className="campaign-contents">
        <div class="c100 p25 small orange">
          <span>25%</span>
          <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
          </div>
        </div>
      </div>
      <div className="campaign-card-text-section">
        <div className="campaign-card-inner">
          <h4>{heading}</h4>
          <p className="campaign-head-p">{text}</p>
          <p className="campaign-head-p"> <span className="campaign-head-p-1">{num1}</span> Raised of <span className="campaign-head-p-2">{num2}</span> Goal</p>
        </div>
      </div>
      <button className="campaign-donate">Donate Now</button>
    </div>
    );
}

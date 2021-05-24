import React from "react";
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid:{ 
        width:"100%",
}
  }))
const Footer = ()=>{
    const classes = useStyles()
    return(
        <div className="footer">
            <div className="footer__area">
            <Grid 
            container 
            spacing ={3}
            className={classes.grid}
            
            >
                <Grid item xs={12} sm={3}>
                  <div className="footer__useful">
                      <h6>Useful Links</h6>
                      <ul>
                          <li>
                              <a>Donation History</a>
                          </li>
                          <li>
                              <a>Our Mission</a>
                          </li>
                          <li>
                              <a>Donation History</a>
                          </li>
                          <li>
                              <a>Our Leadership</a>
                          </li>
                          <li>
                              <a>Public Reporting</a>
                          </li>
                          
                          <li>
                              <a>Media Library</a>
                          </li>
                          <li>
                              <a>Sign in</a>
                          </li>

                      </ul>

                  </div>
                </Grid>
                <Grid item  xs={12} sm={3}>
                <div className="footer__newletter">
                    
                    <h4>NewsLetter SignUp</h4>
                    <div className="footer__newletterContent">
                    <p>dorem dorem dorem dorem</p>
                    <p>dorem dorem dorem dorem </p>
                    <div>
                    <input className="footer__input" placeholder="Your email address..."/>
                    </div>
                    
                    <a>Subscribe</a>

                    </div>
                    
                </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className="footer__latestTweet">
                      <h6>Latest Tweeet</h6>
                      <p>
                          <span>@Wordpress:</span>
                          lorem isumdotap
                          <p>tab dorem isongodld</p>
                          <p className="footer__http">http://t.co/B0aO4FrqN0</p>
                          <p>18 hours ago</p>
                      </p>
                  </div>
                  <div className="footer__latestTweet">
                      <p>
                          <span>@Wordpress:</span>
                          lorem isumdotap
                          <p>tab dorem isongodld</p>
                          <p className="footer__http">http://t.co/B0aO4FrqN0</p>
                          <p>18 hours ago</p>
                      </p>
                  </div>
                </Grid>
                <Grid item  xs={12} sm={3}>
                <div className="footer__charity">
                    <img
                    alt="not found"
                    src="http://spyropress.com/templates/charityplus/images/logo_footer.png"
                    />
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>conseteturop sapscing elitre sed</p>
                    <p>diam eimod tempores einvidunt</p>
                    <p>labore voluptua dolores.</p>
                    <p className="footer__icons">
                        <span style={{display:"flex" ,marginTop:20}}>
                        <MailOutlineIcon fontSize="small" color="red" style={{marginTop:7, marginRight:10}}/>
                        <p className="header__mail">Contact@Charitys.com</p>  
                        </span>
                        
                        </p>

                        <p>
                            <span style={{display:"flex" ,marginTop:5}}>
                            <PhoneIcon fontSize="small" color="#cdcfcf" style={{marginTop:5, marginRight:5}}/>
                        <p className="header__mail">(305) 123 456 789 - 888</p>
                            </span>

                        </p>
                     
                </div>
                </Grid>
                 <Grid item sm={12}>
                     <div className="footer__social">
                         <hr className="footer__hr"/>
                         <div className="footer__icons">
                             <FacebookIcon style={{marginRight:10, paddingRight:10}}/>
                             <TwitterIcon  style={{marginLeft:10, paddingRight:10}}/>
                             <LanguageIcon style={{marginLeft:10, paddingRight:10}}/>
                             <LinkedCameraIcon style={{marginLeft:10, paddingRight:5}}/>

                         </div>
                         <hr className="footer__hr2"/>
                     </div>

                 </Grid>
                 <Grid item sm={12}>
                 <div className="footer__more">
                        <div>
                        <a href="#">My Charities</a>
                        </div>
                        <div>
                        <a href="#">Terms of Use</a>

                        </div>
                        <div>
                        <a href="#">Privacy Policy</a>
                        </div>
                        <div>
                            
						<a href="#">Site Map</a>
                        </div>
                        <div>
                        <a href="#">About Us</a>
                        </div>

                        <div>
                        <a href="#">Contact Us</a>
                        </div>
                        
					</div>

                 </Grid>
                <Grid item sm={12}>
                    <div className="footer__rights">
                        <p> <span style={{color:"#FBB122"}}>CharityPlus</span> by <span style={{color:"#FBB122"}}>SpyroPress</span> . All right Reserved</p>
                    </div>
                </Grid>
                

            </Grid>

            </div>
            
        </div>
    )
}
export default Footer;
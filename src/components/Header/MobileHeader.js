import React, { useEffect, useState } from "react";
import './MobileHeader.css';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
const HeaderMobile = ({ toggleMenu, setToggleMenu, home, events, blog, contact, campaign,gallery,aboutus }) => {
    //fix the header
    const [fixedHeader, setFixHeader] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setFixHeader(true)
            }
            else {
                setFixHeader(false)
            }
            return () => window.removeEventListener("scroll", () => { })
        })
    }, [])

    return (
        <div className={fixedHeader && "mobile__positionedTop"}>
            <div className={toggleMenu ? "mobile" : "mobile__show"}>
                <div className={toggleMenu ? "mobile__logo" : "mobile__logo_fixed"}>
                    <img
                        className={toggleMenu ? "mobile__image" : "mobile__blueImage"}
                        alt="not found"
                        src={`https://www.spyropress.com/templates/charityplus/images/logo.png`}
                    />

                </div>
                <div className={toggleMenu ? "menu__hide" : "menu"}>
                    <ul className="menu__ul">
                        <li>
                            <div className="mobile__icons">

                                <Link to="/">
                                    <span className={home&&`header__isactive`}>HOME</span>
                                    
                                    </Link>
                                <AddIcon className="mobile__plus" fontSize="small" color="#111"/>

                            </div>
                           
                            
                        </li>
                       

                        
                        <li>
                            <div className="mobile__icons">

                                <Link to="/campaigns">
                                <span className={campaign&&`header__isactive`}>CAMPAIGNS</span>
                                    </Link>
                                <AddIcon className="mobile__plus" fontSize="small" color="#111"/>

                            </div>

                        </li>
                        
                        <li>
                            <div className="mobile__icons">
                                <Link to="/events">
                                <span className={events&&`header__isactive`}>EVENTS</span>
                                    
                                    </Link>
                            </div>

                        </li>
                        
                        <li>
                            <div className="mobile__icons">

                                <Link to="/blog">
                                <span className={blog&&`header__isactive`}>BLOG</span>
                                </Link>
                                <AddIcon className="mobile__plus" fontSize="small" color="#111"/>

                            </div>

                        </li>
                        
                        <li>
                            <div className="mobile__icons">

                                <Link to="/contact">
                                <span className={contact&&`header__isactive`}>CONTACT</span>
                                </Link>
                            </div>

                        </li>
                        <li>
                            <div className="mobile__icons">
                                <Link to="/gallery">
                                    <span className={gallery &&`header__isactive`}>GALLERY</span></Link>
                                <AddIcon className="mobile__plus" fontSize="small" color="#111"/>                                

                            </div>

                        </li>
                        <li>
                            <div className="mobile__icons">
                                <Link to="/aboutus">
                                    <span className={aboutus&&`header__isactive`}>ABOUT US</span></Link>
                                <AddIcon className="mobile__plus" fontSize="small" color="#111"/>                                

                            </div>

                        </li>
                        
                    </ul>
                </div>

                <div className={`mobile__toggle`}>

                    <div className={toggleMenu ? "mobile__fixedRight" : "mobile__fixedLeft"}>

                        {
                            toggleMenu ?
                                <IconButton
                                    onClick={() => setToggleMenu(!toggleMenu)}
                                    size="small">
                                    <MenuIcon fontSize="large" className="menu__iconColor" />
                                </IconButton>
                                :
                                <IconButton
                                    onClick={() => setToggleMenu(!toggleMenu)}
                                    size="small">
                                    <CancelIcon
                                        fontSize="large"
                                    />
                                </IconButton>
                        }

                    </div>
                </div>

            </div>
        </div>


    )

}
export default HeaderMobile
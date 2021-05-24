import '../Header/Header.css';
import '../../CSS/Home/SectionTwo.css';
import child from '../../images/child.jpg';
import stories2 from '../../images/stories2.jpg';
import stories3 from '../../images/stories3.jpg';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function StaticSection() {
    return (
        <div>
            <div className="section_one">
                <div className="sectiontwo_1">
                    <p>Recent <strong>New </strong>  &#38; <strong>Video </strong></p>
                </div>
                <div>
                    <SectionOne />
                </div>
            </div>
            <div className="section_tw">
                <div class="section_tw_container">
                <p className="section_two_titl">Join Our Campaign</p>
                <hr className="section_two_hr" />
                <p className="section_two_pp">Cystic fibrosis is an inherited chronic disease that affects the lungs and digestive system.
                A defective gene causes the body to produce unusually thick, sticky
                mucus that clogs the lungs and leads to life-threatening lung infections.
               Join us today in supporting abandoned and disabled children.</p>
                <div className="header__button section_two_buttonn">
                    <Link to="#">Join Now</Link>
               </div> </div></div>

        </div>
    )
}
const useStyles = makeStyles({
    side_content: {
        marginTop: '35px',
    },
});
function SectionOne() {
    const classes = useStyles();
    return (
        <Grid container spacing={6} style={{ width:"100%",paddingLeft: 15, paddingRight: 15, marginLeft: "auto", marginRight: "auto", paddingBottom: 50, paddingTop: 50 }}>
            <Grid container item xs={12} sm={6} >
                <CardMedia component="img" alt="child" height="400" image={child} title="child" />
                <Button variant="contained" color="primary" size="small" className={classes.side_content}>
                    STORY</Button>
                <Typography color="textPrimary" variant="h4" gutterBottom className={classes.side_content}>
                    A girl's father shows charity by helping another girl feel included at a birthday party.
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={6}>
                <Grid container spacing={4} style={{ marginBottom: '30px' }}>
                    <Grid item xs={12} sm={5} >
                        <CardMedia component="img" alt="stories2" image={stories2} title="stories2" />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Button variant="contained" color="primary" size="small" style={{ marginTop: '13px' }} >
                            STORY</Button>
                        <Typography variant="h6" color="textPrimary" component="p" style={{ marginTop: '18px', lineHeight: "normal" }}>BGEA Chaplains Aim to Share Place, Hope in
                    Midst of Civil Unrest in Milwaukee</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4} style={{ marginBottom: '30px' }}>
                    <Grid item xs={12} sm={5}>
                        <CardMedia component="img" alt="stories3" image={stories3} title="stories3" />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Button variant="contained" color="primary" size="small" style={{ marginTop: '13px' }} >
                            VIDEO</Button>
                        <Typography variant="h6" color="textPrimary" component="p" style={{ marginTop: '18px', lineHeight: "normal" }}>
                            Get a free ride to the Aquarium aboard the MST Trolley
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4} style={{ marginBottom: '30px' }}>
                    <Grid item xs={12} sm={5}>
                        <CardMedia component="img" alt="stories2" image={stories2} title="stories2" />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Button variant="contained" color="primary" size="small" style={{ marginTop: '13px' }} >
                            STORY</Button>
                        <Typography variant="h6" color="textPrimary" component="p" style={{ marginTop: '18px', lineHeight: "normal" }}>
                            Watch! Viggo Mortensen Celebrates 100 years of National Parks
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default StaticSection;
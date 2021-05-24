import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header/header';
import Footer from '../Footer/Footer';
import Map from './Map';
import './contact.css';
import BlueDiamond from '../../images/diamond-blue.png';
import GreenDiamond from '../../images/diamond-green.png';
import OrangeDiamond from '../../images/diamond-orange.png';

const tooltipProps = {
  bgcolor: 'background.paper',
  m: 1,
  padding: '10px 0px 0px 0px',
  border: 4,
  style: { width: '5rem', height: '5rem' },
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
  },
  title: {
    fontSize: 14,
  },
  card: {
    color: '#FFF',
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing(1),
    padding: '12px 30px',
    backgroundColor: '#FBB122',
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Header />
      <Box>
        <Map />
      </Box>
      <Container maxWidth="lg">
        <div>
          <Box display="flex" justifyContent="center" margin={6}>
            <p style={{ fontSize: 40 }}>
              Get in <b>Touch</b>
            </p>
          </Box>

          <div>
            <Grid container spacing={5} justify="center">
              <Grid item xs={12} md={4} lg={4} style={{ position: 'relative' }}>
                <Card className={classes.root} style={{ backgroundColor: '#5B84CE' }} color="primary">
                  <CardContent>
                    <Typography className={classes.card} color="textSecondary">
                      596 Bernardo Center Bros,
                    </Typography>
                    <Typography className={classes.card} color="textSecondary">
                      Suite 550 Los Angeles, CA 932643
                    </Typography>
                  </CardContent>
                </Card>
                <Box position="absolute" top={-30} left="40%" zIndex="tooltip">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50%"
                    borderColor="#5B84CE"
                    {...tooltipProps}
                  >
                    <img src={BlueDiamond} alt="Logo" width="120px" height="120px" />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} lg={4} style={{ position: 'relative' }}>
                <Card className={classes.root} style={{ backgroundColor: '#9AD064' }} color="primary">
                  <CardContent>
                    <Typography className={classes.card}>Line 01: +849 123 456 789</Typography>
                    <Typography className={classes.card}>Line 02: +849 987 654 321</Typography>
                  </CardContent>
                </Card>
                <Box position="absolute" top={-30} left="40%" zIndex="tooltip">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50%"
                    borderColor="#9AD064"
                    {...tooltipProps}
                  >
                    <img src={GreenDiamond} alt="Logo" width="120px" height="120px" />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} lg={4} style={{ position: 'relative' }}>
                <Card className={classes.root} style={{ backgroundColor: '#EA9E3D' }} color="primary">
                  <CardContent>
                    <Typography className={classes.card} color="textSecondary">
                      Contact@CharityPlus.com
                    </Typography>
                    <Typography className={classes.card} color="textSecondary">
                      Infor@CharityPlus.com
                    </Typography>
                  </CardContent>
                </Card>
                <Box position="absolute" top={-30} left="40%" zIndex="tooltip">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50%"
                    borderColor="#EA9E3D"
                    {...tooltipProps}
                  >
                    <img src={OrangeDiamond} alt="Logo" width="120px" height="120px" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <Box display="flex" justifyContent="center" margin={6}>
            <p style={{ fontSize: 40 }}>
              Send Us <b>Message</b>
            </p>
          </Box>
          <Container maxWidth="md">
            <form autoComplete="off">
              <TextField
                type="text"
                label="Your Name"
                variant="standard"
                placeholder="Your Name"
                fullWidth
                margin="normal"
              />

              <TextField
                type="text"
                label="Subject"
                variant="standard"
                placeholder="Subject"
                fullWidth
                margin="normal"
              />
              <br />
              <TextField
                type="email"
                label="Your Mail Address"
                variant="standard"
                placeholder="Email"
                fullWidth
                margin="normal"
              />
              <br />

              <TextField
                label="Message"
                multiline
                rows={8}
                variant="standard"
                placeholder="Message"
                fullWidth
                margin="normal"
              />
              <br />
              <Box display="flex" justifyContent="center" margin={2}>
                <Button variant="contained" size="large" className={classes.button}>
                  Send Message
                </Button>
              </Box>
            </form>
          </Container>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
export default Contact;

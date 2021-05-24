import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange, yellow } from '@material-ui/core/colors';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

const theme = createMuiTheme({
  palette: {
    secondary: orange,
  },
});

const useStyles = makeStyles((theme) => ({
  section1: {
    padding: '20px 60px',
    backgroundColor: '#1db3e7',
  },
  section2: {
    padding: '60px 60px',
    backgroundColor: 'white',
  },
}));

export default function StaticSection1() {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <Box className={classes.section1}>
          <Grid container spacing={1}>
            <Grid item md={10} xs={12}>
              <h3 style={{ color: 'white' }}>Make a diffirence in the life of a child</h3>
              <p style={{ color: 'white' }}>Please help us change lives around the word!</p>
            </Grid>
            <Grid item md={2} xs={12}>
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="secondary">
                  Donate now
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>
        {/* <div className={classes.section2}>
          <Box marginBottom={5}>
            <p style={{ color: '#ffb011', fontSize: 20 }}>
              <b>We're helping hand on</b>
            </p>
            <h2>80.593 Children in 125 Countries</h2>
          </Box>
          <Grid container spacing={4}>
            <Grid container item xs={12} md={9}>
              <Grid item xs={12} md={6}>
                <Box display="flex">
                  <Box paddingRight={1}>
                    <ThemeProvider theme={theme}>
                      <CollectionsBookmarkIcon fontSize="large" color="secondary" />
                    </ThemeProvider>
                  </Box>
                  <Box flexGrow={1} fontFamily="Roboto">
                    <h6>Education</h6>
                    <br />
                    <p>
                      Praesent vestibulum aenean nommy eros hendrerit mauris. Cum sociis natoqueing patibuset
                      mgnis parturient.
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display="flex">
                  <Box paddingRight={1}>
                    <ThemeProvider theme={theme}>
                      <LocalCafeIcon fontSize="large" color="secondary" />
                    </ThemeProvider>
                  </Box>
                  <Box flexGrow={1}>
                    <h6>Help $ Support</h6>
                    <br />
                    <p>
                      Praesent vestibulum aenean nommy eros hendrerit mauris. Cum sociis natoqueing patibuset
                      mgnis parturient.
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display="flex">
                  <Box paddingRight={1}>
                    <ThemeProvider theme={theme}>
                      <FavoriteBorderIcon fontSize="large" color="secondary" />
                    </ThemeProvider>
                  </Box>
                  <Box flexGrow={1}>
                    <h6>Voluntering</h6>
                    <br />
                    <p>
                      Praesent vestibulum aenean nommy eros hendrerit mauris. Cum sociis natoqueing patibuset
                      mgnis parturient.
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display="flex">
                  <Box paddingRight={1}>
                    <ThemeProvider theme={theme}>
                      <PersonAddIcon fontSize="large" color="secondary" />
                    </ThemeProvider>
                  </Box>
                  <Box flexGrow={1}>
                    <h6>Adoption</h6>
                    <br />
                    <p>
                      Praesent vestibulum aenean nommy eros hendrerit mauris. Cum sociis natoqueing patibuset
                      mgnis parturient.
                    </p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <box>
                <img
                  src="http://spyropress.com/templates/charityplus/images/img_static_01.jpg"
                  alt
                  width="200px"
                />
              </box>
            </Grid>
          </Grid>
        </div> */}
      </Box>
    </div>
  );
}

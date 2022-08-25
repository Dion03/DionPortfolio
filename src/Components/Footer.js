import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';
class Footer extends Component {
  render() {
    return (
      <div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="10vh"
          className="footer"
        >
          <Grid container>
            <Grid item xs={12} md={6} className='copyText'>
              <Typography>Made by Dion Meijboom</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/dion-meijboom-1617b1240/')}>
                  <LinkedInIcon className='footerIcons' fontSize="large" />
                </IconButton>
                <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://github.com/Dion03')}>
                  <GitHubIcon className='footerIcons' fontSize="large" /> 
                </IconButton>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Footer;
import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typewriter from 'typewriter-effect';

import { Card, CardMedia, Typography } from '@mui/material';
import ImgPomodoR from '../Images/person.png';
class Home extends Component {
  render() {
    return (
      <div className='homePage'>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
          className='homeContainer'
        >
          <Grid container>
            <Grid item md={6} xs={12}>
                <Typography variant="h3" className="nameTitle">Dion Meijboom</Typography>
                <Typewriter
                  options={{
                    strings: ['Software Developer!', 'Frontend Developer!'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/dion-meijboom-1617b1240/')}>
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://github.com/Dion03')}>
                  <GitHubIcon fontSize="large" /> 
                </IconButton>
            </Grid>
            <Grid item md={6} xs={12} className='imageContainer'>
                <Card className='imageCard' elevation={0}>
                  <CardMedia className='imageCardMedia' image={ImgPomodoR}></CardMedia>
                </Card>
            </Grid>
          </Grid>
          
        </Box>
      </div>
    );
  }
}

export default Home;
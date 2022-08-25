import React, { Component } from 'react';
import SwiperCore, {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import TvIcon from '@mui/icons-material/Tv';

// images
import ozczPic from '../Images/ozcz.png'
import weatherapp from '../Images/weatherapp.png'
import password from '../Images/password.png'
import portfolio from '../Images/portfolio.png'
import musicapp from '../Images/musicapp.png'
SwiperCore.use([Navigation]);
const projects = [
  {
    name: "Portfolio site",
    text: "De site waar je nu opzit is mijn portfolio site en is gemaakt door middel van React.js",
    imageUrl: portfolio,
    url: "http://localhost:3000/",
    gitUrl: "https://github.com/Dion03/devportfolio",
  },
  {
    name: "Password generator",
    text: "Een van mijn eerste projecten in React.js. Iets simpels om te kijken hoe de basis van react werkt",
    imageUrl: password,
    url: "https://dmpasswordgenerator.netlify.app/",
    gitUrl: "https://github.com/Dion03/password-generator",
  },
  {
    name: "OZCZ stage project",
    text: "Een applicatie gemaakt tijdens mijn laatste stage. De opdracht was het ontwerpen en ontwikkeling van een webapplicatie voor het verbeteren van de zorgverlening. De applicatie wordt zowel intern als extern gebruikt en is opgezet door middel van een VueJS frontend en NodeJS backend.",
    imageUrl: ozczPic,
    url: "",
    gitUrl: "",
  }, 
  {
    name: "Music app",
    text: "Muziek desktop app gemaakt in Vue.js. Hier zitten ook controls bij zoals liedjes afspelen, pauzeren en stoppen. Daarnaast kan je ook bijvoorbeeld geluid van liedjes zachter zetten door middel van de geluids balk",
    imageUrl: musicapp,
    url: "https://dmmusic.netlify.app/",
    gitUrl: "https://github.com/Dion03/MusicApp",
  },
  {
    name: "Weather app",
    text: "Een weers applicatie gemaakt in Vue.js. Hier kan je weers statestieken opzoeken voor verschillende plaatsen over de gehele wereld. Dit is met de API van OpenWeather.org",
    imageUrl: weatherapp,
    url: "https://dmweather.netlify.app/",
    gitUrl: "https://github.com/Dion03/Weather_App",
  }
]
class Projects extends Component {
  render() {
    return (
      <div>
        <Box
          display="flex"
          minHeight="100vh"
        > 
         <Grid container>
            <Grid item md={12} xs={12}>
              <Typography variant='h3' className="titleSection">Projecten</Typography>
              <hr className='hrLine'/>
              <Typography variant='p'>Tijdens mijn studie en in mijn vrijetijd heb ik meerdere projecten gemaakt. Een lijstje hiervan is hier onder te zien, met eventueel een linkje naar een demo van hoe het in werking gaat</Typography>
            </Grid>
            <Grid item md={12} xs={9}  className='SwiperContainer' sx={{mt:5}}>
            <Swiper
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={100}
              loop = {true}
              centeredSlides={true}
              className="swiper">
                {projects.map((item) =>
                <SwiperSlide className='projectSlider' key={item.name}>
                  <Card style={{ height: '100%' }}>
                    <Typography variant='h4'>{item.name}</Typography>
                    {!item.url ? <CardMedia  image={item.imageUrl} component="img" height="250"></CardMedia>
                    :<Box component='a' href={item.url} target="_blank" sx={{ textDecoration: 'none' }}>
                      <CardMedia  image={item.imageUrl} component="img" height="250"></CardMedia>
                    </Box>}
                    <CardContent style={{ minHeight: "120px",}}>
                      <Typography>
                        {item.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {!item.gitUrl ? "" :                       
                      <IconButton aria-label="Linkedin.com" onClick={() => window.open(item.gitUrl)} sx={{flexGrow: 1}}>
                        <GitHubIcon fontSize="large" /> Github
                      </IconButton>}
                      {!item.url ? "" :                       
                      <IconButton aria-label="Linkedin.com" onClick={() => window.open(item.url)} sx={{flexGrow: 1}}>
                        <TvIcon fontSize="large" /> Demo
                      </IconButton>}
                    </CardActions>
                  </Card>
                </SwiperSlide>)}
              </Swiper>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Projects;
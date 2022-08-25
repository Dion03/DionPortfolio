import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImgPomodoR from '../Images/person2.png';
import { Typography } from '@mui/material';
const personalInfo = [
  {
    onderwerp: "Geboortedag",
    text: "6 april 2003"
  },
  {
    onderwerp: "Email",
    text: "dionmeijboom2003@gmail.com"
  },
  {
    onderwerp: "Leeftijd",
    text: "19"
  },
  {
    onderwerp: "Woonplaats",
    text: "Zwolle, Netherlands"
  },
  {
    onderwerp: "Studie",
    text: "Software Developer, MBO 4"
  },
]
class About extends Component {
  render() {
    return (
      <div>
        <Box
          display="flex"
          minHeight="100vh">
          <Grid container>
            <Grid item md={12} xs={12}>
              <Typography variant='h3' className="titleSection">Over mij</Typography>
              <hr className='hrLine'/>
            </Grid>
            <Grid item md={6} xs={12} className='aboutImageContainer'>
              <img src={ImgPomodoR} className='aboutImage' alt='person'/>
            </Grid>
            <Grid item md={6} xs={12} align="left" className='aboutListContainer'>
              <Typography variant='h5' className='mobileText'>Junior Software developer</Typography>
              <div className='mobileText'>
                <Typography variant='p' >Mijn naam is Dion Meijboom, ik ben 19 jaar oud en woon in Zwolle. In juli 2022 heb ik op het Deltion College in Zwolle de opleiding applicatie ontwikkelaar/software developer afgerond.</Typography>
              </div>
              <ul className='aboutUL' >
                {personalInfo.map((item) =>
                  <li key={item.onderwerp} className='aboutLi'><b>{item.onderwerp}:</b> {item.text}</li>
                )}
              </ul>
              <div className='mobileText'>
                <Typography variant='p'>Tijdens deze studie heb ik kennis van verschillende programeertalen opgedaan zoals: Javascript, PHP, C# en Python. Ook heb ik kennis opgedaan van frameworks zoals: Laravel, React.js (React native) en Vue.js. Buiten de programmeertalen is werken met databases ook niet nieuw. Ook zijn GitHub en Scrum ook geen onbekende termen.</Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}
export default About;
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography } from '@mui/material';
const opleidingen = [
  {
    naam: "Deltion College",
    niveau: "MBO 4",
    opleiding: "Software Developer/Applicatie Ontwikkelaar",
    jaar: "2019-2022",
    text: "Op het Deltion College heb ik de opleiding tot Software Developer gevolgd. Tijdens deze opleidingen is mij meerdere programmeer talen geleerd. Daarnaast is er ook geleerd te werken met dingen als databases, database design, Git(hub) en Scrum.",
  },
  {
    naam: "Thomas A Kempis College",
    niveau: "TL/MAVO",
    opleiding: "Middelbaar onderwijs",
    jaar: "2015-2019",
    text: "Profielen: Techniek, Economie & Zorg en welzijn",
  },
]
const werkervaring = [
  {
    bedrijf: "Oogzorgcentrum Zwolle",
    functie: "Stagiair Software Developer (Front & Backend)",
    periode: "Jan 2022 - Jul 2022",
    text: "Ontwerpen en Ontwikkeling van een webapplicatie voor het verbeteren van de zorgverlening. Applicatie wordt zowel intern als extern gebruikt en is opgezet door middel van een VueJS frontend en NodeJS backend.",
    technieken: 
    [
      {
        taal: "Node.JS"
      },
      {
        taal: "Vue.js 2"
      },
      {
        taal: "MySQL"
      },
      {
        taal: "Firebase (Tijdelijk)"
      }
    ]
  },
  {
    bedrijf: "Masters of Media",
    functie: "Stagiair Software Developer",
    periode: "Sep 2020 - Jan 2021",
    text: "Ontwikkeling en ontwerpen van een applicatie in Joomla 4. Dit werd gedaan in een klein team met twee andere stagiairs.",
    technieken: 
    [
      {
        taal: "PHP"
      },
      {
        taal: "Joomla 4"
      },
      {
        taal: "(Wireframes) design"
      }
    ]

  },
]
class Cv extends Component {
  render() {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"> 
        <Grid container>
          <Grid item md={12} xs={12}>
            <Typography variant='h3' className="titleSection">CV</Typography>
            <hr className='hrLine'/>
          </Grid>
          <Grid item md={5} xs={12} align="left" >
            <Card align="left" sx={{ml:3}} elevation={0}>
              <Typography variant='h4'>Onderwijs</Typography>
              {opleidingen.map((school) => 
                <CardContent key={school.naam} className="cvContent" sx={{mt:2}}>
                  <Typography variant='h6'>{school.niveau} - {school.opleiding}</Typography>
                  <Typography>{school.naam}</Typography>
                  <div className='cvPeriod'>{school.jaar}</div>
                  <Typography>{school.text}</Typography>
                </CardContent>)}
            </Card>
          </Grid>
          <Grid item md={6} xs={12} sx={{ml:10}} className="werkervaringGrid">
            <Card align="left" elevation={0}>
            <Typography variant='h4'>Werk ervaring</Typography>
            {werkervaring.map((ervaring) => 
              <CardContent key={ervaring.bedrijf} className="cvContent" sx={{mt:2}}>
                <Grid container direction={'row'}>
                  <Grid item xs={12} md={6}>
                    <Typography variant='h6'>{ervaring.functie}</Typography>
                    <Typography>{ervaring.bedrijf}</Typography>
                    <div className='cvPeriod'>{ervaring.periode}</div>
                    <Typography>{ervaring.text}</Typography><br/>

                  </Grid>
                  <Grid item xs={12} md={5} className="cvTechnieken">
                    <Typography>Gebruikte Technieken:</Typography>
                    {ervaring.technieken.map((techniek) => 
                  <div key={techniek.taal} className='cvTechniekBox'>{techniek.taal}</div>
                )}
                  </Grid>
                </Grid>
              </CardContent>)}
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Cv;
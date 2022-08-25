import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgressWithLabel  from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';
const skills = [
  {
    name: "HTML", 
    percent: 90,
  },
  {
    name: "CSS", 
    percent: 80,
  },  
  {
    name: "Javascript", 
    percent: 75,
  },  
  {
    name: "Vue.js", 
    percent: 80,
  },
  {
    name: "React.js", 
    percent: 60,
  },
  {
    name: "Node.js", 
    percent: 60,
  },
  {
    name: "PHP", 
    percent: 50,
  },  
  {
    name: "Laravel", 
    percent: 50,
  },  
]
class Skills extends Component {
  render() {
    return (
      <div>
        <Box
          display="flex"
          minHeight="60vh"
          className='skillsContainer'>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Typography variant='h3' className="titleSection">Skills</Typography>
              <hr className='hrLine'/>
              <Typography variant='p'>Zoals hierboven te lezen was heb ik tijdens mijn studie van veel talen en frameworks kennis opgedaan. Hieronder is te zien waar ik mezelf inschat qua kennis.</Typography>
            </Grid>
            <Grid item md={12} xs={9} className='skillsListContainer'>
              <ul className='skillsUl'>
                {skills.map((item) =>
                  <li key={item.name} className='skillsLi'><span>{item.name}: {item.percent}%</span><br/><LinearProgressWithLabel className='skillsBar' variant="determinate" value={item.percent}/></li>
                )}
              </ul>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Skills;
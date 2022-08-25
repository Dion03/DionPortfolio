import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon  from '@mui/icons-material/Email';
import { Box, Grid, TextField, Card, CardContent, Button,Typography, Alert, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const contactInfo = [
  {
    Onderewerp: "Locatie",
    Gegevens: "Zwolle, Nederland",
    Icon: <LocationOnIcon fontSize='large'/>
  },
  {
    Onderewerp: "Email",
    Gegevens: "dionmeijboom2003@gmail.com",
    Icon: <EmailIcon fontSize='large'/>
  },
]
function ContactPage() {
  const [formSuccess, setFormSuccess] = React.useState(null)
  const recaptchaRef = React.createRef();

  function sendEmail(e){
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue){
      console.error("Leeg")
      return
    }
    e.preventDefault();
    emailjs.sendForm( process.env.REACT_APP_SERVICE_ID,  process.env.REACT_APP_TEMPLATE_ID, e.target,  process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
          console.log(recaptchaValue)
          setFormSuccess(true)
      }, (error) => {
          console.log(error.text);
          setFormSuccess(false)
      });
      e.target.reset();
  }
  return (
    <div>
      <Box
        display="flex"
        minHeight="70vh"
        className='contactPage'> 
        <Grid container className='contactContainer'>
        <Grid item md={12} xs={12}>
            <Typography variant='h3' className="titleSection">Contact</Typography>
            <hr className='hrLine'/>
            <Typography>Voor eventuele vragen kunt u onderstaand contact formulier invullen</Typography>
          </Grid>
          <Grid item sx={12} md={4}           >
            <Card sx={{mb:5, mr:5}} className="contactInfo"> 
              <CardContent>
                <List>
                  {contactInfo.map((item) =>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {item.Icon}
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ fontSize: "1.5rem" }} secondaryTypographyProps={{ fontSize: "1rem" }} primary={item.Onderewerp} secondary={item.Gegevens}/>
                      </ListItemButton>
                    </ListItem>
                  )}
                </List>
                <iframe title='Zwolle_Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30613.15185113969!2d6.08551119923677!3d52.513475873496056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7df209d12ecb1%3A0xcd0b5b2492dd3e8c!2sZwolle!5e0!3m2!1sen!2snl!4v1661169248669!5m2!1sen!2snl" className='maps' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sx={12} md={6}> 
              <Card>
                {formSuccess  ?<Alert severity="success" color="success">
                  Bericht is succesvol verzonden
                </Alert> : ""}
                <CardContent>
                <form onSubmit={sendEmail}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="naam"
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        id="naam"
                        label="Naam"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="subject"
                        label="Onderwerp"
                        name="subject"
                        autoComplete="subject"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="message"
                        label="Bericht"
                        type="text"
                        id="message"
                        autoComplete="message"
                        multiline
                        rows={10}
                      />
                    </Grid>
                    <ReCAPTCHA
                      className='reCaptcha'
                      ref={recaptchaRef}
                      sitekey={process.env.REACT_APP_RECAPTCHA}
                    />,
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="submit"
                      sx={{mt:3}}
                    >
                      Verstuur bericht
                    </Button>
                  </Grid>
                  </form>
                </CardContent>
              </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default ContactPage;
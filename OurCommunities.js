import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Grid,Typography,Paper,Container} from '@material-ui/core';
import Chennai from './images/Chennai.png';
import Pune from './images/Pune.png';
import Bangalore from './images/Bangalore.png';
const useStyles = makeStyles(theme => ({
  title:{
    lineHeight:'1.5em'
  },
  subtitle:{
    margin: theme.spacing(6),
    color:'#333',
  },
  section:{
    background:'#efefef',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',    
    padding: theme.spacing(1),
  },
  paperWrapper:{
    padding: theme.spacing(1)
  },
  imgWidth:{
    width:'100%'
  },
  paper:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    minHeight:'150px',
    borderRadius:20
  },
  paperTitle:{
    marginBottom: theme.spacing(1)
  }
}));
const OurCommunities = () => {
  const classes = useStyles();
  const data = [{
    desc:"The name Madras is also of native origin, and has been shown to have been in use before the British established a presence in India.A Vijayanagar-era inscription dated to the year 1367 that mentions the port of Mādarasanpattanam, along with other small ports on the east coast, was discovered in 2015 and it was theorised that the aforementioned port is the fishing port of Royapuram.",
    image:Chennai
  },
{
  desc:"After Indian independence from the British in 1947, Pune saw enormous growth transforming it into a modern metropolis. The  Municipal Council was reorganised to form the Pune Municipal Corporation (PMC) in 1950. The education sector in the city continued its growth  of that into pune in incressing  his technical post-independence era with the establishment of the University of Pune.",
  image:Pune,
},
{
  desc:"The city's history dates back to around 890 CE, in a stone inscription found at the Nageshwara Temple in Begur, Bangalore. The Begur inscription is written in Halegannada (ancient Kannada), mentions 'Bengaluru Kalaga' (battle of Bengaluru). It was a significant turning point in the history of Bangalore as it bears the earliest ref the name 'Bengaluru incease population on  banglore it.",
  image:Bangalore,
}];
  const [news] = useState(data);  
  return (
    <div className={classes.section}>
      <Container maxWidth="lg">       
        <div className={classes.titleWrapper}>
            <Typography className={classes.title} variant="h4">
              Our Communities
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
            Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima.
            Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.
            </Typography>
        </div>
          <Grid item xs={10} container direction="row" justify="space-evenly" alignItems="center" spacing={2}>    
            {                
              news.map((newsObj,index) =>(    
                <Grid item xs={10} md={4} key={index} >
                    <Paper className={classes.paper} elevation={0}>
                      <img src={newsObj.image} className={classes.imgWidth} alt={newsObj.image} />
                      <div className={classes.paperWrapper}>
                        <Typography variant="subtitle1">{newsObj.desc}</Typography>
                      </div>
                  </Paper>
                </Grid>
              ))
            }
        </Grid>
      </Container>
    </div>    
  );
};
export default OurCommunities;

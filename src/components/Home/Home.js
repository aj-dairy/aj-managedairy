import './Home.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import CowImage from '../../content/images/cow-feed.jpg';
import Typography from '@material-ui/core/Typography';
import transitions from '@material-ui/core/styles/transitions';
import { red } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 350,
    width: 350,
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },
  control: {
    padding: theme.spacing(5),
  },
}));


export default function Home() {
  const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();  
  return (  
  <div className="margin">
   <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing} alignContent="space-around">
        <Grid key="1" item className="myCustom">                     
              <Paper className={classes.paper} >
              First Blcok
              </Paper> 
         </Grid>

         <Grid key="2" item>                     
              <Paper className={classes.paper} >
              Second Blcok
              </Paper> 
         </Grid>

            <Grid key="3" item>                     
              <Paper className={classes.paper} >
              THird Blcok
              </Paper> 
            </Grid>

            <Grid key="4" item>                     
              <Paper className={classes.paper} >
              Fourth Blcok
              </Paper> 
            </Grid>
        </Grid>
      </Grid>    
      </Grid>      
      </div>
  );
}
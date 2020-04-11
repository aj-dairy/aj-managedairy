import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home';
import Login from '../Login';


  const Navbar = () => {  
    const classes =  makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(3),
      },
      title: {
        flexGrow: 1,
      },
    }));

    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
    }));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };   
    
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && <Box p={3}>{children}</Box>}
        </Typography>
      );
    }

    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <Router>
     <div>

        <AppBar position="fixed">
        <Toolbar>
         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">          
        </IconButton>               
        <MenuIcon onClick={handleClick} />
          <Tabs position="spacing"  scrollButtons="auto" value={value} onChange={handleChange}>        
          <Tab label="&nbsp;Daily Reports&nbsp;" {...a11yProps(0)}/>
          <Tab label="&nbsp;Cost Sheets&nbsp;" {...a11yProps(1)} />
          <Tab label="&nbsp;Procurement&nbsp;" {...a11yProps(2)} />
          <Tab label="&nbsp;Profiles&nbsp;" />
        </Tabs>
        </Toolbar>
       
        <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>User Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
       </Menu>
     </AppBar>
     <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

        </div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/about">
          <Home />
          </Route>
          <Route path="/home">
          <Home />
          </Route>
        </Switch>
        </Router>
    ); 
}

export default Navbar;
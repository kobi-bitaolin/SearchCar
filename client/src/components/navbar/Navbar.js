
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IsUserLogContext } from '../context/user';
import { Redirect } from 'react-router'
import axios from 'axios';
import './nav.css';

const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const { isLog } = useContext(IsUserLogContext);
  console.log(isLog);

  const logOut = () => {
    axios.get('/logout')
      .then(res => {
        console.log(res.data);
       return <Redirect to="/"/>
      })
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className="nav-container" variant="h6" color="inherit">
            {
              isLog ? <a className="nav-link" onClick={logOut} href='/'>Logout</a> : <a href="/register" className="nav-link" >Register</a>
            }
            <span className="cars-bord">cars-bord</span> 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;








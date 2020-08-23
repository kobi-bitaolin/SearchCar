
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {Link} from 'react-router-dom';

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

  // const LogOut = () => {
  //   axios.get('/users/logout')
  //     .then(res => console.log(res.data))
  // }

  return (
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
             <a href="/carsbord">car bord</a> <a href="/">Logout</a>
                </Typography>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default Navbar;








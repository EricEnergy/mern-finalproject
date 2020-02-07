import React, { useEffect, useState } from 'react';
import Links from './Links'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    backgroundColor: 'red',
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    // marginRight:'50%',
  },
  bar: {
    // flexGrow: 1,
    // marginRight:'50%',
    backgroundColor: '#1f3236',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    // marginBottom: '5vh',
  },
  logo: {
    margin: 'auto',
    textAlign: 'center',    
    height: '6vh',  
  },
  logoHorizontallyCenter: {
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',    
  } 

}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    if (user === null) {
      return setIsLogin(false)
    } else {
      return setIsLogin(true)
    }
  }, [user])

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  function logOut() {
    localStorage.removeItem("user")
    window.location.href = '/'
  }
  function profile() {
    window.location.href = '/companyView'
  }


  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          {/* SIGN UP/HOME  */}
          <Links />
          {/* TITLE */}
          <div className={classes.logoHorizontallyCenter}>
            <img
              alt='logo'
              className={classes.logo}
              src="./servICON.png"
              title="Logo"
            />
          </div>
          {isLogin ?
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={()=> profile()}>Profile</MenuItem>
                <MenuItem onClick={() => logOut()}>Log Out</MenuItem>
              </Menu>
            </div>:
            <div>
              <Link style={{ color: "white" }} to="/signin" className={'d-inline p-2 text-white'}>
                Sign
              </Link>
            </div>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
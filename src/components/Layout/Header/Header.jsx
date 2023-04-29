import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiDashboardFill, RiLogoutBoxRLine } from 'react-icons/ri';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const isAuthenticated = false;
  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {
    console.log('Logout');
  };

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="box"
    >
      <List>
        <ListItem className="side_heading">
          <h3>Course Bundler</h3>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem className="sideMenu" alignItems="flex-start">
          <Link to="/">Home</Link>
          <Link to="/courses">Browse All Courses</Link>
          <Link to="/request">Request a Course</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About</Link>
        </ListItem>
      </List>
      <div className="auth">
        <List>
          <ListItem className="authitem">
            {isAuthenticated ? (
              <div className="profile">
                <div className="profileitem">
                  <Link to="/profile">
                    <button className="btnprofile">Profile</button>
                  </Link>
                  <button className="btnlogout" onClick={logoutHandler}>
                    <RiLogoutBoxRLine style={{ color: 'black' }} />
                    Logout
                  </button>
                </div>
                <div className="dashboard">
                  {user && user.role === 'admin' && (
                    <Link to="/admin/dashboard">
                      <button className="dbtn">
                        <RiDashboardFill />
                        Dashboard
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="authbutton">
                <Link to="/login" className="btn">
                  Login
                </Link>
                <p className="text">OR</p>
                <Link to="/register" className="btn">
                  Sign Up
                </Link>
              </div>
            )}
          </ListItem>
        </List>
      </div>
    </Box>
  );

  return (
    <div>
      {['left'].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <AiOutlineMenu className="menu" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

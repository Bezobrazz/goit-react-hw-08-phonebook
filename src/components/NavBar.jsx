import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/selectors';
import ProfileDetails from './ProfileDetails';
import AuthDetails from './AuthDetails';

export default function NavBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { email } = useSelector(selectUser);
  console.log(isLoggedIn);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '40px' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Home
            </Link>
          </Typography>
          {isLoggedIn && (
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: '14px', marginRight: '8px' }}
            >
              {email}
            </Typography>
          )}
          {isLoggedIn ? <ProfileDetails /> : <AuthDetails />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

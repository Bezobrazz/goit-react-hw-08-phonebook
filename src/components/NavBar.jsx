import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../redux/operations';

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '40px' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Home
            </Link>
          </Typography>
          <Button color="inherit">
            {' '}
            <Link
              to="/register"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Register
            </Link>
          </Button>

          <Button color="inherit">
            {' '}
            <Link
              to="/contacts"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Login
            </Link>
          </Button>
          <Button color="inherit">
            {' '}
            <Link
              to="/contacts"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Contacts
            </Link>
          </Button>
          <Button onClick={() => dispatch(logoutThunk())} color="inherit">
            {' '}
            <Link
              to="/login"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Exit
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

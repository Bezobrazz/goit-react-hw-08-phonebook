import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutThunk } from '../redux/operations';

export default function ProfileDetails() {
  const dispatch = useDispatch();

  return (
    <div>
      {' '}
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
        <Link to="login" style={{ color: 'inherit', textDecoration: 'none' }}>
          Exit
        </Link>
      </Button>
    </div>
  );
}

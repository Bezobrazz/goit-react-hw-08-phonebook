import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthDetails() {
  return (
    <div>
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
        <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
          Login
        </Link>
      </Button>
    </div>
  );
}

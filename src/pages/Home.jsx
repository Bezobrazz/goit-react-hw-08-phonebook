import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';

function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          padding: '20px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography variant="h1">Hello</Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', marginTop: '10px', width: '450px' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          ipsum ipsam, nihil minima quibusdam in voluptas modi dolorum placeat
          expedita magni fugiat numquam iusto perferendis amet ipsa possimus,
          atque quo.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          <Link
            to={!isLoggedIn ? 'login' : 'contacts'}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Get Started
          </Link>
        </Button>
      </Box>
    </Container>
  );
}

export default Home;

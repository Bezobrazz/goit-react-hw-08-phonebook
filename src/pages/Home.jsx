import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          padding: '20xp',
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
            to="contacts"
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

import React from 'react';
import { Button, Typography, Box, Paper, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Paper sx={{ width: 1 / 2, height: 1 / 2, padding: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            padding: '20xp',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // height: '100%',
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
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: '20px' }}
          >
            <Link
              to="contacts"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Get Started
            </Link>
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Home;

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ContactsPage from 'pages/ContactsPage';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Layout from './Layout';
import Register from 'pages/Register';
import { refreshThunk } from '../redux/operations';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import { selectIsRefreshing } from '../redux/selectors';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

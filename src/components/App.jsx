import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/operations';
import { selectIsRefreshing } from '../redux/selectors';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
import Layout from './Layout';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

const LazyContactsPage = lazy(() => import('pages/ContactsPage'));
const LazyHome = lazy(() => import('pages/Home'));
const LazyLogin = lazy(() => import('pages/Login'));
const LazyRegister = lazy(() => import('pages/Register'));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      {isRefreshing ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LazyHome />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <LazyContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LazyLogin />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <LazyRegister />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </Suspense>
  );
};

export default App;

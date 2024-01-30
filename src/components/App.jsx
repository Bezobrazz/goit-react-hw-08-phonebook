import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Layout from './Layout';
import Register from 'pages/Register';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/operations';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
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

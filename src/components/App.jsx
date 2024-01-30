import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Layout from './Layout';
import Register from 'pages/Register';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;

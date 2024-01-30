import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/selectors';

const PublicRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/contacts'} />;
  }
  return children;
};

export default PublicRoute;

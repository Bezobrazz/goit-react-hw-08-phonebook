import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/selectors';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate state={{ from: location }} to="/login" />;
  }
  return children;
};

export default PrivateRoute;

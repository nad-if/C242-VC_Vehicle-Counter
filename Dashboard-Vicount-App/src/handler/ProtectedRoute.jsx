import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken'); // Cek token di localStorage
  return authToken ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;

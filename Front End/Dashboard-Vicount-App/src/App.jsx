import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Register from "./pages/Register";
import VerifyOTPPage from "./pages/VerfyOTP";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ErrorPage from "./pages/404";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/verify" element={<VerifyOTPPage />} />
        <Route path="/auth/login" element={<Login />} />
        
        {/* Dashboard and Protected Routes */}
        <Route path="/*" element={<Dashboard />} />

        {/* Error Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

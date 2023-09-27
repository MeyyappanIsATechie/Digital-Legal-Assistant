import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./Chatpage";
import LandingPage from "./LandingPage";
import AuthenticationPage from "./components/authentication/AuthenticationPage";
import LoginPage from "./components/authentication/Login";
import SignUpPage from "./components/authentication/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;

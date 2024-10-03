import React from "react";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import HomePage from "./components/HomePage";
import PasswordChange from "./components/PasswordChange";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="/change-password" element={<PasswordChange />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import HomePage from "./components/HomePage";
import PasswordChange from "./components/PasswordChange";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import SmartCropRec from "./components/SmartCropRec";
import ScrResult from "./components/ScrResult";
import TestManual from "./components/TestManual";
import CropsInfo from "./components/CropsInfo";
import CropInfo from "./components/CropInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-up/sign-in" element={<SignInPage />}></Route>
        <Route path="/change-password" element={<PasswordChange />}></Route>
        <Route path="/services/scr" element={<SmartCropRec />}></Route>
        <Route path="/services/scr/scr-result" element={<ScrResult />}></Route>
        <Route path="/services/scr/scr-result/process" element={<TestManual />}></Route>
        <Route path="/crops-info" element={<CropsInfo />}></Route>
        <Route path="/crops-info/crop-info" element={<CropInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

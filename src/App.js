import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import OTP from "./pages/OTP/OTP"
import ForgotPassword from "./pages/forgotPassword/ForgotPassword"
import ResetPassword from "./pages/resetPassword/ResetPassword"
import LandingPage from "./pages/landing page/LandingPage"
import UserProfile from "./pages/userProfile/UserProfile"
import UpdateProfileForm from "./pages/updateProfile/UpdateProfileForm"
import UpdateEmailForm from "./pages/updateEmail/UpdateEmailForm"
import VerifyEmail from "./pages/verifyEmail/VerifyEmail"
import UpdatePasswordForm from "./pages/updatePassword/UpdatePasswordForm"
import VerifyPassword from "./pages/verifyPassword/VerifyPassword"
import { ToastContainer } from 'react-toastify';
import DataProvider from './components/context/authcontext';
import 'react-toastify/dist/ReactToastify.css';

import './scss/main.scss';
const App = () => {
  return (
    <div>
      <>
        <Router>
          <DataProvider>
            <ToastContainer />
            <Header />
            <Routes>
            <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account-verification" element={<OTP />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:id" element={<ResetPassword />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/update-profile" element={<UpdateProfileForm />} />
              <Route path="/change-email" element={<UpdateEmailForm />} />
              <Route path="/email-verification/:email" element={<VerifyEmail />} />
              <Route path="/change-password" element={<UpdatePasswordForm />} />
              <Route path="/password-verification/:password" element={<VerifyPassword />} />
              
            </Routes>
            <Footer />
          </DataProvider>
        </Router>
      </>
    </div>
  );
};

export default App;

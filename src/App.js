import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Courses from './components/Courses/Courses';
import OutletHeader from './components/Layout/Outlet';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/login/Login';
import Register from './components/Auth/register/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Auth/Contact';
import Request from './components/Request/Request';
import About from './components/about/About';
import Subscribe from './components/Payment/Subscribe';
import PaymentSuccess from './components/Payment/PaymentSuccess';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<OutletHeader />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;

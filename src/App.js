import React from 'react';
import './App.css';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './components/homepage';
import Layout from './components/layout';
import Contact from './components/contact/contact';
import AboutUs from './components/about-us';
import Footer from './components/Footer';
import Menu from './components/menu';



function App() {
  const location = useLocation();
  return (
    <>
   <div className={`content-container ${location.pathname === '/home' ? 'home-with-background' : ''}`}>
   <Layout />
  <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order-online" element={<Contact />} />
      <Route path="/gallery" element={<Contact />} />
      <Route path="/preorder" element={<Contact />} />
      <Route path="/catering" element={<Contact />} />
  </Routes>
</div>
    <Footer/>
    </>
  );
}

export default App;

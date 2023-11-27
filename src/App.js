import React from 'react';
import './App.css';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './components/homepage';
import Layout from './components/layout';
import Contact from './components/contact/contact';
import AboutUs from './components/about-us';
import Footer from './components/Footer';
import Menu from './components/order-online/order-online';
import MenuCopy from './components/menu copy/menu';
import Catering from './components/catering/catering';
import ComingSoon from './components/coming-soon';
import PreOrder from './components/pre-order/pre-order';



function App() {
  const location = useLocation();
  return (
    <>
  <div className={`content-container ${['/home', '/order-online', '/catering', '/preorder'].includes(location.pathname) ? 'home-with-background' : ''}`}>

   <Layout />
  <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<MenuCopy />} />
      <Route path="/order-online" element={<Menu />} />
      <Route path="/gallery" element={<Contact />} />
      <Route path="/preorder" element={<PreOrder />} />
      <Route path="/catering" element={<Catering />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
  </Routes>
</div>
    <Footer/>
    </>
  );
}

export default App;

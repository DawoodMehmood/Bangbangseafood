import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './components/homepage';
import Contact from './components/contact/contact';
import AboutUs from './components/about-us';
import Menu from './components/order-online/order-online';
import MenuCopy from './components/menu copy/menu';
import Catering from './components/catering/catering';
import ComingSoon from './components/coming-soon';
import PreOrder from './components/pre-order/pre-order';
import Login from './components/admin/login/login';
import AdminLayout from './layouts/adminLayout';
import MainLayout from './layouts/mainLayout';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Admin Panel Routes */}
      <Route
        path="/bangbangseafood/controlUddaycontrol/controlpanel"
        element={
          <AdminLayout>
            <Login />
          </AdminLayout>
        }
      />

      {/* Main Website Routes */}
      <Route
        path="/*"
        element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/menu" element={<MenuCopy />} />
              <Route path="/order-online" element={<Menu />} />
              <Route path="/preorder" element={<PreOrder />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/homepage";
import Contact from "./components/contact/contact";
import AboutUs from "./components/about-us";
import Menu from "./components/order-online/order-online";
import MenuCopy from "./components/menu copy/menu";
import Catering from "./components/catering/catering";
import ComingSoon from "./components/coming-soon";
import PreOrder from "./components/pre-order/pre-order";
import Login from "./components/admin/login/login";
import AdminLayout from "./layouts/adminLayout";
import MainLayout from "./layouts/mainLayout";
import AdminHome from "./components/admin/main/adminHome";
import "./App.css";
import BACKEND_URL from "./config";

function App() {
  // Function to check if the token is expired
  const isTokenExpired = (token) => {
    try {
      const { exp } = JSON.parse(atob(token.split(".")[1]));
      return exp < Date.now() / 1000;
    } catch {
      return true;
    }
  };

  const isAuthenticated = async () => {
    const token = sessionStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
      return false;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/token/validate`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.ok;
    } catch (error) {
      console.error("Error validating token:", error);
      sessionStorage.removeItem("token");
      return false;
    }
  };

  // ProtectedRoute component
  const ProtectedRoute = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
      const checkAuth = async () => {
        const authStatus = await isAuthenticated();
        setIsAuth(authStatus);
      };

      checkAuth();
    }, []);

    if (isAuth === null) {
      return <div>Loading...</div>; // or some loading component
    }

    return isAuth ? (
      children
    ) : (
      <Navigate to="/bangbangseafood/controlUddaycontrol/controlpanel" />
    );
  };

  return (
    <Routes>
      {/* Admin Panel Routes */}
      <Route
        path="/bangbangseafood/controlUddaycontrol/controlpanel/*"
        element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/adminhome"
                element={
                  <ProtectedRoute>
                    <AdminHome />
                  </ProtectedRoute>
                }
              />
            </Routes>
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

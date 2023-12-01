// MainLayout.jsx
import React from "react";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <div
        className={`content-container ${
          ["/home", "/order-online", "/catering", "/preorder"].includes(
            location.pathname
          )
            ? "home-with-background"
            : ""
        }`}
      ></div>
      <Layout />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

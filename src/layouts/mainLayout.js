// MainLayout.jsx
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();

  const [contactInfo, setContactInfo] = useState({
    address: "",
    email: "",
    number: "",
    timings: [
      {
        days: "",
        time: "",
      },
    ],
  });

  const [bannerText, setBannerText] = useState({
    line1: "",
    line2: "",
    fb: "",
    insta: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/banner/getBanner")
      .then((response) => response.json())
      .then((data) => setBannerText(data))
      .catch((error) => console.error("Error fetching banner text:", error));

    // Fetch contact information from the API
    fetch("http://localhost:5000/api/contact/getcontact")
      .then((response) => response.json())
      .then((data) => setContactInfo(data))
      .catch((error) => console.error("Error fetching contact info:", error));
  }, []);

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
      <Layout bannerText={bannerText} />
      {children}
      <Footer contactInfo={contactInfo} bannerText={bannerText} />
    </>
  );
};

export default MainLayout;

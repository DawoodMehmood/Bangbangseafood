import React, { useEffect, useState } from "react";
import "./adminHome.css";
import logoimage from "../../../img/logo.png";
import BannerTextLinks from "./adminComponents/banner";
import ContactInfo from "./adminComponents/contact";
import Menu from "./adminComponents/menu";
import EmailKey from "./adminComponents/email";
import Default from "./adminComponents/default";

const AdminHome = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Banner":
        return <BannerTextLinks />;
      case "Contact":
        return <ContactInfo />;
      case "Menu":
        return <Menu />;
      case "Email":
        return <EmailKey />;
      default:
        return <Default />;
    }
  };

  useEffect(() => {
    // Update the meta tags
    const meta_titleTag = document.querySelector('meta[name="robots"]');
    if (meta_titleTag) {
      meta_titleTag.setAttribute("content", "");
    }

    const metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", "noindex, nofollow");
    }
  }, []);

  return (
    <div>
      <div className="navbar">
        <img
          src={logoimage}
          alt="BangBangSeafood Logo"
          width="100"
          height="100"
        />
        <h1>Admin Panel</h1>
        <button>Logout</button>
      </div>

      <div className="body">
        <div>
          <ul className="left-side">
            <li onClick={() => setActiveComponent("Banner")}>
              Banner Text & Links
            </li>
            <li onClick={() => setActiveComponent("Contact")}>Contact Info</li>
            <li onClick={() => setActiveComponent("Menu")}>Menu Images</li>
            <li onClick={() => setActiveComponent("Email")}>Email & Key</li>
          </ul>
        </div>

        <div className="right-side">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default AdminHome;

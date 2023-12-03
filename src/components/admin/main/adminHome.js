import React, { useEffect } from "react";
import "./adminHome.css";
import logoimage from "../../../img/logo.png";

const AdminHome = () => {
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
          width="80"
          height="80"
        />
        <h1>Admin Panel</h1>
        <button>Logout</button>
      </div>

      <div className="body">
        <div className="left-side">
            <div>
                Banner Text
            </div>
            <div>
                Menu Images
            </div>
            <div>
                Fb & Insta Links
            </div>
            <div>
                Contact Info
            </div>
        </div>
        <div className="right-side">

        </div>
      </div>
    </div>
  );
};

export default AdminHome;

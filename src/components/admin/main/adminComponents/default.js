import React from "react";
import logoimage from "../../../../img/logo.png";
import "./components.css";

const Default = () => {
  return (
    <div className="default container">
      <img
        src={logoimage}
        alt="BangBangSeafood Logo"
        className="defaultImage"
      />
    </div>
  );
};

export default Default;

import React from "react";
import backgroundImage from "./../img/background-image.jpg";

const ComingSoon = () => {
  return (
    <div>
      <div className="contact-image">
        <img src={backgroundImage} alt="header img" loading="lazy" />
        <h1 className="fs-1 centered-heading">COMING SOON</h1>
      </div>

      <div className="marquee-container">
        <div className="marquee-text" id="scrolling-text">
          Bang Bang Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;

import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import logoimage from "../img/logo.png";
import BACKEND_URL from "../config";

const Home = () => {
  const navigate = useNavigate();
  const HandleViewMenuButton = () => {
    navigate("/menu");
  };

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

  useEffect(() => {
    // Fetch contact information from the API
    fetch(`${BACKEND_URL}/api/contact/getcontact`)
      .then((response) => response.json())
      .then((data) => setContactInfo(data))
      .catch((error) => console.error("Error fetching contact info:", error));
  }, []);

  return (
    <>
      <div className="home my-5">
        <img
          src={logoimage}
          alt="bang bang seafood & grill Logo"
          loading="lazy"
        />
        <div className="my-5">
          <Button
            className="show-menu-button"
            variant="warning"
            onClick={HandleViewMenuButton}
          >
            VIEW MENU
          </Button>
        </div>
        <div className="home-text my-3">
          <strong>{contactInfo.address}</strong>
        </div>

        {contactInfo.timings &&
          contactInfo.timings.map((dayAndTime, index) => (
            <div key={index} className="home-text timings my-3">
              <strong className="timings">
                {dayAndTime.days}
                <br />
                {dayAndTime.time}
              </strong>
            </div>
          ))}
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
    </>
  );
};

export default Home;

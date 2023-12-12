import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import logoimage from "../img/logo.png";

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
    fetch("http://localhost:5000/api/contact/getcontact")
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

        {contactInfo.timings.map((dayAndTime, index) => (
          <div key={index} className="home-text my-3">
            <strong>
              {dayAndTime.days}
              <br />
              {dayAndTime.time}
            </strong>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

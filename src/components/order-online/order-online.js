import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./../contact/contact.css";
import "./order-online.css";
import BACKEND_URL from "../../config";
import backgroundImage from "./../../img/background-image.jpg";

const Menu = () => {
  const [contactInfo, setContactInfo] = useState({
    address: "",
    email: "",
    number: "",
  });
  const [links, setLinks] = useState({
    clover: "",
    doordash: "",
    ubereats: "",
    grubhub: "",
    postmate: "",
  });

  useEffect(() => {
    // Fetch contact information from the API
    fetch(`${BACKEND_URL}/api/contact/getcontact`)
      .then((response) => response.json())
      .then((data) => setContactInfo(data))
      .catch((error) => console.error("Error fetching contact info:", error));

    fetch(`${BACKEND_URL}/api/links/getLinks`)
      .then((response) => response.json())
      .then((data) => setLinks(data))
      .catch((error) => console.error("Error fetching links:", error));
  }, []);
  return (
    <div>
      <div className="contact-image">
        <img src={backgroundImage} alt="header img" loading="lazy" />
        <h1 className="fs-1 centered-heading">ONLINE PICK-UP ORDER</h1>
      </div>

      <Container>
        <Row>
          <div className="pre-order text-center marginTopBelow">
            <p>
              Contact us at {contactInfo.contact} to place your online pick-up
              order
              <br /> or by clicking the button below &darr;
            </p>
            <a href={links.clover || "#"}>
              <Button className="p-2 mt-3" variant="warning">
                PLACE YOUR ORDER HERE
              </Button>
            </a>
          </div>
        </Row>
      </Container>
      <div className="marquee-container">
        <div className="marquee-text" id="scrolling-text">
          Bang Bang Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};

export default Menu;

import React, {useState, useEffect} from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./pre-order.css";
import BACKEND_URL from "../../config";
import backgroundImage from "./../../img/background-image.jpg"

const PreOrder = () => {
  const [contactInfo, setContactInfo] = useState({
    address: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    // Fetch contact information from the API
    fetch(`${BACKEND_URL}/api/contact/getcontact`)
      .then((response) => response.json())
      .then((data) => setContactInfo(data))
      .catch((error) => console.error("Error fetching contact info:", error));
  }, []);

  return (
    <div>
      <div className="contact-image">
        <img
          src={backgroundImage}
          loading="lazy"
          alt="header img"
        />
        <h1 className="fs-1 centered-heading">PRE ORDER</h1>
      </div>

      <Container>
        <Row>
          <div className="pre-order text-center marginTopBelow">
            <p>
              Contact us at {contactInfo.number} to place your pre-order
              <br /> or by clicking the button below &darr;
            </p>
            <a href="https://www.clover.com/online-ordering/bang-bang-seafood-west-palm-beach">
              <Button className="p-2 mt-3" variant="warning">
                PLACE YOUR ORDER HERE
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default PreOrder;

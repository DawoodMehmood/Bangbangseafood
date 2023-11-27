import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleButtonClick = () => {
    // Navigate to the "/coming-soon" path
    navigate("/coming-soon");
  };
  return (
    <div>
      <footer className="footer text-dark py-4">
        <Container>
          <Row>
            {/* First Column */}
            <Col sm={3} className="footer-buttons">
              <h4>Order Now</h4>
              <Button
                className="footer-button mb-2"
                variant="outline-dark"
                onClick={handleButtonClick}
              >
                DoorDash
              </Button>
              <Button
                className="footer-button mb-2"
                variant="outline-dark"
                onClick={handleButtonClick}
              >
                Uber Eats
              </Button>
              <Button
                className="footer-button mb-2"
                variant="outline-dark"
                onClick={handleButtonClick}
              >
                Grub Hub
              </Button>
            </Col>
            {/* Second Column */}
            <Col sm={3} className="text-center">
              <h4>Address</h4>
              <p className="mt-5">
                3897 N Haverhill Rd, West Palm Beach, Fl 33417
              </p>
            </Col>

            {/* Third Column */}
            <Col sm={3} className="text-center">
              <h4>Contact Us</h4>
              <p className="mt-5">
                Phone: 123-456-7890
                <br />
                a.abid@bangbangseafood.com
              </p>
            </Col>

            {/* Fourth Column */}
            <Col sm={3} className="text-center">
              <h4>Follow Us</h4>
              <div className="mt-5">
                <a
                  target="_blank"
                  className="mx-2"
                  href="https://www.facebook.com/profile.php?id=61553102605034"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="3x"
                    className="custom-facebook-icon"
                  />
                </a>
                <a
                  target="_blank"
                  className="mx-2"
                  href="https://instagram.com/bangbangseafoodandgrill?igshid=YTQwZjQ0NmI0OA=="
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="3x"
                    className="custom-instagram-icon"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer className="bg-secondary text-light text-center py-2">
        <Container>
          <Row>
            <Col>
              Copyright © 2023 - Bang Bang Seafood & Grill - All Rights Reserved
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

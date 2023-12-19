import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import brandImage from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Layout = ({ bannerText }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="banner text-center">
        <Container className="py-1">
          <strong>
            {bannerText.line1}
            <br />
            {bannerText.line2}
          </strong>
        </Container>
      </div>

      <Navbar expand="lg" className={` px-5 dark-navbar`} variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img
            src={brandImage}
            alt="BangBangSeafood Logo"
            width="80"
            height="80"
          />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} />
        <Navbar.Collapse
          className={`nav-nav-flex ${expanded ? "flex-column" : ""}`}
          in={expanded}
        >
          <Nav className="nav-flex">
            <Nav.Link
              as={Link}
              to="/"
              className="text-light underline-on-hover-white"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/menu"
              className="text-light underline-on-hover-white"
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/order-online"
              className="text-light underline-on-hover-white"
            >
              Online Pickup Order
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/preorder"
              className="text-light underline-on-hover-white"
            >
              Pre-order
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/catering"
              className="text-light underline-on-hover-white"
            >
              Catering
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-light underline-on-hover-white"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="text-light underline-on-hover-white"
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <Nav >
            <div className={`links ${expanded ? "nav-flex" : ""}`}>
              <Nav.Link
                target="_blank"
                className="mx-1"
                href={bannerText.fb}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className="custom-facebook-icon"
                />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href={bannerText.insta}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="custom-instagram-icon mx-1"
                />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;

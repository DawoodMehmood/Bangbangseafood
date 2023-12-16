// ... Other imports ...

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./../contact/contact.css";
import "./menu.css";
import BACKEND_URL from "../../config";
import backgroundImage from "./../../img/background-image.jpg"

const MenuCopy = () => {
  const [menuImg, setMenuImg] = useState([]);

  useEffect(() => {
    // Fetch contact information from the API
    fetch(`${BACKEND_URL}/api/menu/getAllImages`)
      .then((response) => response.json())
      .then((data) => setMenuImg(data))

      .catch((error) => console.error("Error fetching menu images:", error));
  }, []);

  return (
    <div className="menu-main">
      {console.log(menuImg)}
      <div className="contact-image">
        <img
          src={backgroundImage}
          alt="header img"
          loading="lazy"
        />
        <h1 className="fs-1 centered-heading">MENU</h1>
      </div>

      <Container className="container-fluid" fluid>
        <Row className="no-gutters mobile-row mx-5">
        {menuImg.map((menu, index) => (
            <React.Fragment key={index}>
              <Col sm={12}>
                <div className="menuimage">
                  {menu && (
                    <img
                      className="menu-img"
                      src={menu.image}
                      alt={`menu img ${index}`}
                      loading="lazy"
                    />
                  )}
                </div>
              </Col>

              <Col sm={12}>
                <div className="menuimage">
                  <div className="divider"></div>
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MenuCopy;

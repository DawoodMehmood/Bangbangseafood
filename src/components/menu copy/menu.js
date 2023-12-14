// ... Other imports ...

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./../contact/contact.css";
import "./menu.css";
import SoulBowl from "./../../img/Soul Bowl.png";
import Wings from "./../../img/Wings & Po Boy's.png";
import Shrimps from "./../../img/Crab Boils.png";
import Pastas from "./../../img/Pastas.png";
import BACKEND_URL from "../../config";

const MenuCopy = () => {
  const [menuImg, setMenuImg] = useState();

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
          src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg"
          alt="Contact Us img"
          loading="lazy"
        />
        <h1 className="fs-1 centered-heading">MENU</h1>
      </div>

      <Container className="container-fluid" fluid>
        <Row className="no-gutters mobile-row mx-5">
          <Col sm={12}>
            <div className="menuimage">
              {menuImg && (
                <img
                  className="menu-img"
                  src={menuImg[0].image}
                  alt="Soul Bowl"
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

          <Col sm={12}>
            <div className="menuimage">
              {menuImg && (
                <img
                  className="menu-img"
                  src={menuImg[1].image}
                  alt="Wings & Po Boy's"
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
        </Row>

        <Row className="pb-1 no-gutters mobile-row mx-5">
          <Col sm={12}>
            <div className="menuimage">
              {menuImg && (
                <img
                className="menu-img"
                src={menuImg[2].image}
                alt="Crab Boils"
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

          <Col sm={12}>
            <div className="menuimage">
              {menuImg && (
                <img
                className="menu-img"
                src={menuImg[3].image}
                alt="Pastas"
                loading="lazy"
              />
              )}
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuCopy;

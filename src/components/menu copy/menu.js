// ... Other imports ...

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./../contact/contact.css";
import "./menu.css";
import SoulBowl from "./../../img/Soul Bowl.png";
import Wings from "./../../img/Wings & Po Boy's.png";
import Shrimps from "./../../img/Crab Boils.png";
import Pastas from "./../../img/Pastas.png";

const MenuCopy = () => {

  return (
    <div className="menu-main">
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
              <img
                className="menu-img"
                src={SoulBowl}
                alt="Soul Bowl"
                loading="lazy"
              />
            </div>
          </Col>

          <Col sm={12}>
            <div className="menuimage">
              <div className="divider"></div>
            </div>
          </Col>

          <Col sm={12}>
            <div className="menuimage">
              <img
                className="menu-img"
                src={Wings}
                alt="Wings & Po Boy's"
                loading="lazy"
              />
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
              <img
                className="menu-img"
                src={Shrimps}
                alt="Crab Boils"
                loading="lazy"
              />
            </div>
          </Col>

          <Col sm={12}>
            <div className="menuimage">
              <div className="divider"></div>
            </div>
          </Col>

          <Col sm={12}>
            <div className="menuimage">
              <img
                className="menu-img"
                src={Pastas}
                alt="Pastas"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuCopy;

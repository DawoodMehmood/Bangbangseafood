// ... Other imports ...

import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./../contact/contact.css";
import "./menu.css";
import SoulBowl from "./../../img/Soul Bowl.png";
import Wings from "./../../img/Wings & Po Boy's.png";
import Shrimps from "./../../img/Crab Boils.png";
import Pastas from "./../../img/Pastas.png";

const MenuCopy = () => {
  const [menuData, setMenuData] = useState([]);
  const [cardHeights, setCardHeights] = useState({});

  useEffect(() => {
    // Fetch menu data from the API endpoint
    fetch("http://localhost:5000/api/menu/categories")
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  useEffect(() => {
    // Calculate and set the maximum height for each category
    const calculateMaxHeights = () => {
      const newCardHeights = {};

      menuData.forEach((category) => {
        const maxHeight = category.dishes.reduce((max, dish) => {
          const card = document.getElementById(`card-${dish._id}`);
          const cardHeight = card ? card.clientHeight : 0;
          return Math.max(max, cardHeight);
        }, 0);

        newCardHeights[category._id] = maxHeight;
      });

      setCardHeights(newCardHeights);
    };

    // Call the function initially and whenever menuData changes
    calculateMaxHeights();
  }, [menuData]);

  return (
    <div className="menu-main">
      <div className="contact-image">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg"
          alt="Contact Us Image"
        />
        <h1 className="fs-1 centered-heading">MENU</h1>
      </div>

      <Container className="container-fluid" fluid>
        <Row className="no-gutters mx-5">
          <Col sm={12}>
            <div className="menuimage">
              <img className="menu-img" src={SoulBowl} alt="Soul Bowl" />
            </div>
          </Col>

          <Col sm={12}>
            <div className="menuimage">
              <div className="divider"></div>
            </div>
          </Col>

          <Col sm={12}>
            <div className="menuimage">
              <img className="menu-img" src={Wings} alt="Wings & Po Boy's" />
            </div>
          </Col>
        </Row>

        <Row className="pb-1 no-gutters ">
          <Col sm={12}>
            <img className="menu-img" src={Shrimps} alt="Crab Boils" />
          </Col>
          <Col sm={12}>
            <img className="menu-img" src={Pastas} alt="Pastas" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuCopy;

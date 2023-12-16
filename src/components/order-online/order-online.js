import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./../contact/contact.css";
import "./order-online.css";

const Menu = () => {
  return (
    <div>
      <div className="contact-image">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg"
          alt="header img"
          loading="lazy"
        />
        <h1 className="fs-1 centered-heading">ONLINE PICK-UP ORDER</h1>
      </div>

      <Container>
        <Row>
          <div className="pre-order text-center marginTopBelow">
            <p>
              Contact us at 561-847-4078 to place your online pick-up order
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

export default Menu;

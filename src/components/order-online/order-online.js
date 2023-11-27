// ... Other imports ...

import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import "./../contact/contact.css";
import "./order-online.css";

const Menu = () => {


  return (
    <div>
      <div className="contact-image">
        <img src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg" alt="Contact Us Image" />
        <h1 className="fs-1 centered-heading">ONLINE PICK-UP ORDER</h1>
      </div>

      <Container>        
      <Row>
            <div className='pre-order text-center my-5'>
                <p>Contact us at 561-847-4078 to place your online pick-up order<br/> or by clicking the button below.</p>
                <Button className='p-3 mt-3' variant='warning'>PLACE YOUR PICK-UP ORDERS HERE</Button>
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;

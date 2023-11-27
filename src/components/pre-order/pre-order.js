// ... Other imports ...

import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import logo from "./../../img/logo.png";

import "./pre-order.css";

const PreOrder = () => {
  
  return (
    <div>
      <div className="contact-image">
        <img src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg" alt="Contact Us Image" />
        <h1 className="fs-1 centered-heading">PRE ORDER</h1>
      </div>

      <Container>
        <Row>
            <div className='pre-order text-center my-5'>
                <p>Contact us at 561.847.4078 to place your pre-order<br/> or by clicking the button below.</p>
                <Button className='p-3 mt-3' variant='warning'>PLACE YOUR PRE-ORDERS HERE</Button>
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default PreOrder;

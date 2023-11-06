import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./contact/contact.css";

const Menu = () => {

  return (
    <div>
      <div class="contact-image">
        <img src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg" alt="Contact Us Image" />
        <h1 class="fs-1 centered-heading">Menu</h1>
      </div>
<div>
    <ul>
        <li>Build Your Own Bang Bang Bowl</li>
        <li>Seafood Boil Boxes</li>
        <li>Speciality items</li>
        <li>Po Boy's</li>
        <li>Desserts</li>
        <li>Beverages</li>
    </ul>
</div>

    </div>
  )
};
export default Menu;
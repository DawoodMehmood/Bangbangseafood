import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
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
<Card className='m-4' style={{ width: '18rem', borderRadius: '15px' }}>
      <Card.Img variant="top" src="your_image_url_here" alt="Product Image" />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Product Name</h5>
          <strong className="mb-0">Price: $XX.XX</strong>
        </div>
        <Card.Text>
          Product description goes here. You can provide additional details about the product in this section.
        </Card.Text>
        <Card.Text>
          <strong>Add-ons:</strong>
          <ul>
            <li>Add-on 1</li>
            <li>Add-on 2</li>
            {/* Add more add-ons as needed */}
          </ul>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
};
export default Menu;
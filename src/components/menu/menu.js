// ... Other imports ...

import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "./../contact/contact.css";
import "./menu.css";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [cardHeights, setCardHeights] = useState({});

  useEffect(() => {
    // Fetch menu data from the API endpoint
    fetch('http://localhost:5000/api/menu/categories')
      .then(response => response.json())
      .then(data => setMenuData(data))
      .catch(error => console.error('Error fetching menu data:', error));
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  useEffect(() => {
    // Calculate and set the maximum height for each category
    const calculateMaxHeights = () => {
      const newCardHeights = {};

      menuData.forEach(category => {
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
    <div>
      <div className="contact-image">
        <img src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg" alt="Contact Us Image" />
        <h1 className="fs-1 centered-heading">MENU</h1>
      </div>

      <Container className="text-center">
        {/* Render menu items dynamically */}
        {menuData.map(category => (
          <div className='my-5' key={category._id}>
            <h2>{category.categoryName}</h2>

            {category.CategoryDescription && (
              <div className="description-box category-description mt-4">
                <p>{category.CategoryDescription}</p>
              </div>
            )}

            <Row className="justify-content-center">
              {category.dishes.map(dish => (
                <Col key={dish._id} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    id={`card-${dish._id}`}
                    className='m-4'
                    style={{ height: `${cardHeights[category._id]}px` }}
                  >
                    <Card.Img className="card-img" variant="top" src={dish.image} alt="Product Image" />
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">{dish.name}</h5>
                        <strong className="mb-0">Price: ${dish.price.toFixed(2)}</strong>
                      </div>
                      <Card.Text>
                        {dish.addons.length > 0 && (
                          <>
                            <strong>Add-ons:</strong> {dish.addons.map(addon => addon.name).join(', ')}
                          </>
                        )}
                        {dish.description && <p>{dish.description}</p>}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className='extras'>
              {category.categoryAddons.length > 0 && category.categoryAddons[0].addons.length > 0 && (
                <div>
                  <strong>Add-ons:</strong> {category.categoryAddons[0].addons.map(addon => addon.name).join(', ')}
                </div>
              )}
              {category.categoryAddons.length > 0 && category.categoryAddons[0].flavours.length > 0 && (
                <div>
                  <strong>Flavours:</strong> {category.categoryAddons[0].flavours}
                </div>
              )}
              {category.categoryAddons.length > 0 && category.categoryAddons[0].spiceLevels.length > 0 && (
                <div>
                  <strong>Spice levels:</strong> {category.categoryAddons[0].spiceLevels}
                </div>
              )}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Menu;

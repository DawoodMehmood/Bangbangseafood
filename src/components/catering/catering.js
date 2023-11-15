import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InputMask from "react-input-mask";
import "./catering.css";

const Catering = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    persons: 1,
    mobile: "",
    message: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePersonsChange = (increment) => {
    setFormData((prevData) => ({
      ...prevData,
      persons: Math.max(1, prevData.persons + increment),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your code to send data to the specified email
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div class="catering-image">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg"
          alt="catering Us Image"
        />
        <h1 class="fs-1 centered-heading">CATERING</h1>
      </div>
<div className="box">
  
<Container>
        <div className="m-4">
          <h2 className="address text-center text-white my-5">
            GET A QUOTE BY FILLING OUT THE FORM AND WE WILL CONTACT YOU SHORTLY
            VIA EMAIL
          </h2>
        </div>
      </Container>

    
      <Container >
        <Row className="mx-5">
          <Col sm={1}></Col>

          <Col sm={10}>
            <Form
              className="fw-bold ms-3 form-container"
              onSubmit={handleSubmit}
            >
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Mobile Number</Form.Label>
                    <InputMask
                      mask="999-999-9999"
                      maskChar=""
                      type="tel"
                      name="mobile"
                      placeholder="Enter Your Mobile Number"
                      className="form-control"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Form.Group>
                    <Form.Label>Number of Persons</Form.Label>
                    <div className="d-flex align-items-center">
                      <Button
                        variant="outline-dark"
                        onClick={() => handlePersonsChange(-1)}
                      >
                        -
                      </Button>
                      <Form.Control
                        type="number"
                        name="persons"
                        value={formData.persons}
                        onChange={handleChange}
                        min="1"
                        className="text-center" // Add this class to center the text
                        required
                      />
                      <Button
                        variant="outline-dark"
                        onClick={() => handlePersonsChange(1)}
                      >
                        +
                      </Button>
                    </div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="send-button-catering">
                <Button
                  className="fs-6 mt-3 py-2 px-3"
                  variant="dark"
                  type="submit"
                >
                  Send Email
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

</div>
      
      <div className="marquee-container mt-5">
        <div className="marquee-text" id="scrolling-text">
          Bang Bang Seafood&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood.
        </div>
      </div>
    </div>
  );
};
export default Catering;

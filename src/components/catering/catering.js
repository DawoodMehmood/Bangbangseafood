import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InputMask from "react-input-mask";
import ReCAPTCHA from "react-google-recaptcha";
import "./catering.css";
import "./../contact/contact.css";
import { showToast } from "../toast";
import BACKEND_URL from "../../config";
import backgroundImage from "./../../img/background-image.jpg"

const Catering = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    persons: 1,
    mobile: "",
    message: "",
    date: "",
  });
  const [capval, setCapval] = useState(null);
  const mobileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePersonsChange = (increment) => {
    setFormData((prevData) => ({
      ...prevData,
      persons: Math.max(1, prevData.persons + increment),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch(
        `${BACKEND_URL}/api/contact/sendCateringEmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // sending the form data to the backend
        }
      );

      if (response.ok) {
        // Email sent successfully
        showToast("Email sent successfully!", "success");

        // Add any additional handling or notifications here
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          persons: 1,
          mobile: "",
          message: "",
          date: "",
        });
      } else {
        // Handle errors if the email fails to send
        console.error("Error sending email");
        showToast("Error sending email", "error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showToast("Error sending email", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="contact-image">
        <img
          src={backgroundImage}
          alt="header img"
          loading="lazy"
        />
        <h1 className="fs-1 centered-heading">CATERING</h1>
      </div>
      <div className="box">
        <Container>
          <div className="m-4">
            <h3 className="address text-center text-white my-5">
              GET A QUOTE BY FILLING OUT THE FORM AND WE WILL CONTACT YOU
              SHORTLY VIA EMAIL
            </h3>
          </div>
        </Container>

        <Container>
          <Row>
            <Col sm={10}>
              <Form className="fw-bold form-container" onSubmit={handleSubmit}>
                <Row className="message mx-4">
                  <Col sm={6}>
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
                  <Col sm={6}>
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

                <Row className="message mt-3 mx-4">
                  <Col sm={6}>
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
                  <Col sm={6}>
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
                        ref={mobileInputRef}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="message mt-3 mx-4">
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Number of Persons</Form.Label>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-dark"
                          onClick={() => handlePersonsChange(-1)}
                          className="increase-decrease-button"
                        >
                          -
                        </Button>
                        <Form.Control
                          name="persons"
                          value={formData.persons}
                          onChange={handleChange}
                          min="1"
                          className="text-center"
                          required
                        />
                        <Button
                          variant="outline-dark"
                          onClick={() => handlePersonsChange(1)}
                          className="increase-decrease-button"
                        >
                          +
                        </Button>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]} // Set min to current date
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mx-4 message">
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
                </Row>
                <Row className="mt-4">
                  <ReCAPTCHA
                    sitekey="6LfGqCQpAAAAABYzDxejJ-x-IDRurZDVC16P-o-L"
                    onChange={(e) => setCapval(e)}
                  />
                </Row>
                <Row className="mx-4">
                  <div className="send-button-catering">
                    <Button
                      className="fs-6 mt-3 py-2 px-3"
                      variant="dark"
                      type="submit"
                      disabled={isSubmitting || capval === null}
                    >
                      {isSubmitting ? "Sending..." : "Send Quote Request"}
                    </Button>
                  </div>
                </Row>
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
          Seafood&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};
export default Catering;

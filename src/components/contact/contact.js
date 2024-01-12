import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { showToast } from "../toast";
import BACKEND_URL from "../../config";
import backgroundImage from "./../../img/background-image.jpg";

const Contact = () => {
  const [capval, setCapval] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactInfo, setContactInfo] = useState({
    address: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    // Fetch contact information from the API
    fetch(`${BACKEND_URL}/api/contact/getcontact`)
      .then((response) => response.json())
      .then((data) => setContactInfo(data))
      .catch((error) => console.error("Error fetching contact info:", error));
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const response = await fetch(
        `${BACKEND_URL}/api/contact/sendContactUsEmail`,
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
          name: "",
          email: "",
          message: "",
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
    <div className="contact-main-div">
      <div className="contact-image">
        <img src={backgroundImage} alt="header img" loading="lazy" />
        <h1 className="fs-1 centered-heading">CONTACT US</h1>
      </div>

      <Container>
        <div className="m-4">
          <h2 className="address fs-1 mx-4 my-5">SEND US A MESSAGE</h2>
        </div>
      </Container>

      <Row className="contact-address mx-5">
        <Col sm={6} className="border-end border-3 pe-5 mt-4">
          <div className="address-details row ms-3">
            <div className="col-md-3">
              <p className="fs-5">
                <strong>Address: </strong>
              </p>
            </div>
            <div className="col-md-7">
              <p className="fs-5">{contactInfo.address}</p>
            </div>
          </div>
          <div className="address-details row my-2 ms-3">
            <div className="col-md-3">
              <p className="fs-5">
                <strong>Phone: </strong>
              </p>
            </div>
            <div className="col-md-7">
              <p className="fs-5">{contactInfo.number}</p>
            </div>
          </div>
          <div className="address-details row mt-2 ms-3">
            <div className="col-md-3">
              <p className="fs-5">
                <strong>Email: </strong>
              </p>
            </div>
            <div className="col-md-7">
              <p className="fs-5 ">{contactInfo.email}</p>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <Form
            className="contact-us-form fw-bold ms-3"
            onSubmit={handleSubmit}
          >
            <Row className="no-gutter message">
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
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
            </Row>
            <Row className="no-gutter message">
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
            <div className="recaptche mt-4">
              <ReCAPTCHA
                sitekey="6LfGqCQpAAAAABYzDxejJ-x-IDRurZDVC16P-o-L"
                onChange={(e) => setCapval(e)}
                className="contact-recaptche"
              />
            </div>
            <Row className="no-gutter  message" D>
              <div className="send-button-contact">
                <Button
                  className="fs-6 mt-3 py-2 px-3"
                  variant="dark"
                  type="submit"
                  disabled={isSubmitting || capval === null}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>

      <div className="container">
        <div className="row-sm maps m-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.2879766564865!2d-80.12141002587067!3d26.735184876753397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d92a1fc0c4a003%3A0x757b0935f9dc4372!2s3897%20N%20Haverhill%20Rd%2C%20West%20Palm%20Beach%2C%20FL%2033417%2C%20USA!5e0!3m2!1sen!2s!4v1698602582887!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
            title="bangbangseafood google map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-text" id="scrolling-text">
          Bang Bang Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang
          Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};
export default Contact;

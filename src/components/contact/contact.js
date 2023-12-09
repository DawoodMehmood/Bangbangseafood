import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
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
    fetch("http://localhost:5000/api/contact/getcontact")
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
        "http://localhost:5000/api/contact/sendContactUsEmail",
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
        console.log("Email sent successfully");
        // Add any additional handling or notifications here
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Handle errors if the email fails to send
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div class="contact-image">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg"
          alt="Contact Us Background img"
          loading="lazy"
        />
        <h1 class="fs-1 centered-heading">CONTACT US</h1>
      </div>

      <Container>
        <div className="m-4">
          <h2 className="address fs-1 mx-4 my-5">SEND US A MESSAGE</h2>
        </div>
      </Container>

      <Container>
        <Row className="mx-5">
          <Col sm={5} className="border-end border-3">
            <Row>
              <Col sm={3}>
                <p className="fs-5">
                  <strong>Address: </strong>
                </p>
              </Col>
              <Col sm={9}>
                <p className="fs-5">{contactInfo.address}</p>
              </Col>
            </Row>
            <Row className="my-2">
              <Col sm={3}>
                <p className="fs-5">
                  <strong>Phone: </strong>
                </p>
              </Col>
              <Col>
                <p className="fs-5">{contactInfo.number}</p>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm={3}>
                <p className="fs-5">
                  <strong>Email: </strong>
                </p>
              </Col>
              <Col sm={9}>
                <p className="fs-5 ">{contactInfo.email}</p>
              </Col>
            </Row>
          </Col>
          <Col sm={7}>
            <Form className="fw-bold  ms-3" onSubmit={handleSubmit}>
              <Row>
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
              <Row>
                {" "}
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
              <Row>
                <div className="send-button-contact">
                  {/* {submissionStatus === "success" && (
                    <p className="success-message mx-auto my-auto">
                      Email sent successfully!
                    </p>
                  )}
                  {submissionStatus === "failure" && (
                    <p className="failure-message mx-auto my-auto">
                      Error sending email. Please try again later.
                    </p>
                  )} */}
                  <Button
                    className="fs-6 mt-3 py-2 px-3"
                    variant="dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="maps m-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.2879766564865!2d-80.12141002587067!3d26.735184876753397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d92a1fc0c4a003%3A0x757b0935f9dc4372!2s3897%20N%20Haverhill%20Rd%2C%20West%20Palm%20Beach%2C%20FL%2033417%2C%20USA!5e0!3m2!1sen!2s!4v1698602582887!5m2!1sen!2s"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            title="bangbangseafood google map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
      <div className="marquee-container">
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
export default Contact;

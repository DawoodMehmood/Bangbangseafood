import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "./../img/logo.png";

const AboutUs = () => {
  const scrollingTextRef = useRef();
  const addTextInfiniteLoop = () => {
    const scrollingText = scrollingTextRef.current;
    if (scrollingText) {
      const textContent = scrollingText.textContent;
      scrollingText.innerHTML = textContent + textContent;
      // Set a delay and call the function recursively
      setTimeout(addTextInfiniteLoop, 1000); // Add text every 1000 milliseconds (1 second)
    }
  };

  useEffect(() => {
    addTextInfiniteLoop(); // Start the infinite loop when the component mounts
  }, []);

  return (
    <div className="about-container">
      {/* <img src="https://images.squarespace-cdn.com/content/v1/625f099ac40fcf29fdd7ac58/129ae952-a3f9-447a-80c1-d34e3bad3c1a/R6_D5650.jpg"
        className='about-with-background'
      /> */}
      <div className="contact-image">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg"
          alt="Contact Us Background img"
          loading="lazy"
        />
        <h1 className="fs-1 centered-heading">ABOUT US</h1>
      </div>

      <div>
        <div className="centered-image-container">
          <img src={image} alt="logo image" loading="lazy" />
        </div>
      </div>
      <div>
        <div className="centered-content">
          <h2>Flavor That Goes Bang Bang!</h2>
          <p>
            At Bang Bang Seafood & Grill, we infuse passion, expertise, and a
            love for exceptional cuisine into every dish we create. Founded by a
            registered nurse turned culinary enthusiast, our journey began with
            a growing interest in the art of cooking and a background dedicated
            to caring for other’s well-being.
          </p>
        </div>
      </div>
      <div>
        <Col sm={6} xs={12}>
          <div className="about-text">
            <p>
              As a registered nurse, I discovered a profound connection between
              nourishment and healing. This realization sparked my fascination
              with the culinary world - a realm where flavors, ingredients, and
              creativity converge to delight the senses and foster togetherness.
              Hosting Vibrant Parties and orchestrating unforgettable family
              gatherings, I’ve always found joy in preparing grand meals that
              bring people together. From sizzling seafood delicacies to
              tantalizing grill favorites, each dish I craft embodies a blend of
              my nursing precision and culinary flair.
            </p>
          </div>
        </Col>
        <Col sm={6} xs={12} className="about-col1">
          <div className="side-image-container">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/68/22/20/1000_F_268222004_kdPmrr5Mg4yrh3kq4Rhway1zNMHUX6d7.jpg"
              alt="side image 1"
              loading="lazy"
            />
          </div>
          <div className="about-text">
            <p>
              Bang Bang Seafood & Grill is more than just a Take Out experience;
              it's a reflection of my commitment to creating memorable moments
              through exceptional food. Our menu is a testament to the passion
              and dedication poured into every recipe, ensuring a symphony of
              flavors that leaves a lasting impression.
            </p>
          </div>
          <div className="side-image-container">
            <img
              src="https://as1.ftcdn.net/v2/jpg/00/78/29/06/1000_F_78290623_jxPQwZoKVz8Y7hCtCp8PfjlWfLmfptpP.jpg"
              alt="side image 2"
              loading="lazy"
            />
          </div>
          <div className="about-text">
            <p>
              Join us on a culinary journey where savory sensations and
              heartfelt hospitality converge. Whether it’s a celebration, an
              intimate gathering, or a casual Take Out experience, allow Bang
              Bang Seafood & Grill to elevate your palate and create
              unforgettable memories. Thank you for being a part of our
              flavorful Story.
            </p>
          </div>
        </Col>
      </div>

      <div className="marquee-container">
        <div className="marquee-text" id="scrolling-text">
          Bang Bang Seafood. Bang Bang Seafood.Bang Bang Seafood. Bang Bang
          Seafood.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

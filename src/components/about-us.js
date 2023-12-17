import React from "react";
import image from "./../img/logo.png";
import backgroundImage from "./../img/background-image.jpg";
import chef from "./../img/chef.jpeg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="contact-image">
        <img src={backgroundImage} alt="header img" loading="lazy" />
        <h1 className="fs-1 centered-heading">ABOUT US</h1>
      </div>

      <div className="centered-image-container">
        <img src={image} alt="logo" loading="lazy" />
      </div>

      <div className="centered-content">
        <h2>Flavor That Goes Bang Bang!</h2>
      </div>

      <div className="about-us-section mb-5">
        <div className="row1">
          <div className="about-text col1">
            <p>
              Welcome to Bang Bang Seafood & Grill ! <br />
              At Bang Bang Seafood & Grill, we infuse passion, expertise, and a
              love for exceptional cuisine into every dish we create. Founded by
              a registered nurse turned culinary enthusiast, our journey began
              with a growing interest in the art of cooking and a background
              dedicated to caring for other’s well-being.
              <br /> As a registered nurse, I discovered a profound connection
              between nourishment and healing. This realization sparked my
              fascination with the culinary world - a realm where flavors,
              ingredients, and creativity converge to delight the senses and
              foster togetherness.
              <br /> Hosting Vibrant Parties and orchestrating unforgettable
              family gatherings, I’ve always found joy in preparing grand meals
              that bring people together.
            </p>
          </div>
          <div className="owner-card col1">
            <img
              src={chef}
              alt="side img 1"
              loading="lazy"
            />

            <p className="text-light">Head Chef Amna Aziz</p>
          </div>
        </div>
        <div className="row1">
          <div className="col1 text-center imga">
            <img
              className="about-image-2"
              src="https://as1.ftcdn.net/v2/jpg/00/78/29/06/1000_F_78290623_jxPQwZoKVz8Y7hCtCp8PfjlWfLmfptpP.jpg"
              alt="side img 2"
              loading="lazy"
            />
          </div>

          <div className="about-text col1 txt">
            <p>
              From sizzling seafood delicacies to tantalizing grill favorites,
              each dish I craft embodies a blend of my nursing precision and
              culinary flair. Bang Bang Seafood & Grill is more than just a Take
              Out experience; it's a reflection of my commitment to creating
              memorable moments through exceptional food. Our menu is a
              testament to the passion and dedication poured into every recipe,
              ensuring a symphony of flavors that leaves a lasting impression.
              <br /> Join us on a culinary journey where savory sensations and
              heartfelt hospitality converge. Whether it’s a celebration, an
              intimate gathering, or a casual Take Out experience, allow Bang
              Bang Seafood & Grill to elevate your palate and create
              unforgettable memories.
              <br />
              Thank you for being a part of our flavorful Story.
              <br />
              Sincerely,
              <br />
              Chef AMNA. A
            </p>
          </div>
        </div>
      </div>

      <div className="marquee-container">
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

export default AboutUs;

import React, {useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
        

      <Container>
        <Row>
          <div className='centered-image-container'>
            <img src={image} alt='logo image' loading='lazy' />
          </div>
        </Row>
        <Row>
          <div className='centered-content'>
            <h2>Flavor That Goes Bang Bang!</h2>
            <p>Entrepreneur Willie Fair (left to right), chef Hughann Thomas and Issaih Percy are part of the team that have created Soul Bowls, a new soul food restaurant in the South Meadows neighborhood of Hartford.

              The event on Feb. 26 at 489 Wethersfield Ave. in Hartford was supposed to be a friends and family soft opening for a new restaurant called Soul Bowls. But word got out. Hundreds of people showed up. Then passersby saw the line out the door and down the sidewalk, and they got in line, too.

              “People had never seen a restaurant here before. All of a sudden there’s a restaurant,” said Hughann Thomas of West Hartford, one of the owners of Soul Bowls. “We were only able to serve 200 of them.”</p>
          </div>
        </Row>
        <Row>
        <Col sm={6} xs={12} >
            <div className='about-text'>
              <p>Thomas, Willie Fair and Malik Golden opened the restaurant, which serves soul food in bowls, in a long-vacant former deli at the corner of Wethersfield Avenue and Adelaide Street.

                Thomas brings culinary flair to Soul Bowls. He has a long history in the hospitality industry.

                “Since I was a kid I wanted to be head chef at my own restaurant. I taught myself to cook. It was a burning passion. My mom wasn’t the best cook. I was always trying to find a better way to cook that.”

                He is aided in the kitchen by sous chef Issaih Percy, a friend from Conard High and a former colleague at Plan B restaurant. But the restaurant’s secret recipe “soul sauce” comes from Golden’s father.

                The restaurant’s bowl meals, for $14, have a base of white rice or “soul rice,” which is a Spanish rice. Proteins are fried chicken bites, fried or sauteed shrimp and pernil (pork shoulder). Each bowl gets two sides: a choice of collard greens; candied yams; French fries; a “soul veggie mix” of broccoli, carrots, bell peppers and chickpeas; or “krack and cheese,” an addictively creamy macaroni and cheese.

                Each of those sides are available (for $5) on their own, as are the “soul rolls” ($4), a combination of the candied yams and mac-and-cheese rolled up in eggroll wrapping and deep-fried, served with soul sauce.

                Soul Bowls is takeout only, with a lively mural by local artist Corey Pane in the waiting area. When it gets warmer, the men hope to install high-top tables outside.

                Fair comes to Soul Bowls from a business background. A graduate of UConn business school, Fair helped to develop The Lost Breed, a health, wellness and athletic apparel brand based in West Hartford. “I’m the foundational guy. I know how to build a business from A to Z,” he said.

                Golden was a safety for Penn State and the Pittsburgh Steelers. After a career-ending injury, he traveled and laid low for a few years. Then he came back to his hometown and decided to fulfill a lifelong desire to enter the dining industry. He sought out Thomas, who had a catering company, Poppa’s Kitchen in New Britain.

                The restaurant is new, but Fair has big plans. He wants to open a second location by the end of the year. It will be in Connecticut, he said, but the location is still to be determined.

                “We want to be the Chipotle of soul food,” he said. “Our motto is, ‘Everything’s better in a bowl’.”</p>
            </div>
          </Col>
          <Col sm={6} xs={12} className='about-col1'>
            <div className='side-image-container'>
              <img src="https://as1.ftcdn.net/v2/jpg/02/68/22/20/1000_F_268222004_kdPmrr5Mg4yrh3kq4Rhway1zNMHUX6d7.jpg" alt='side image 1' loading='lazy' />
            </div>
            <div className='about-text'>
              <p>Issaih Percy (left) and John Williams prepare "soul rolls" in the kitchen of Soul Bowls, a new soul food restaurant in the South Meadows neighborhood of Hartford. Photograph by Mark Mirko | mmirko@courant.com (Mark Mirko/The Hartford Courant)</p>
            </div>
            <div className='side-image-container'>
              <img src="https://as1.ftcdn.net/v2/jpg/00/78/29/06/1000_F_78290623_jxPQwZoKVz8Y7hCtCp8PfjlWfLmfptpP.jpg" alt='side image 2' loading='lazy' />
            </div>
            <div className='about-text'>
              <p>Entrepreneur Willie Fair (left), helps customer Kenshaun Gamble at Soul Bowls, a new soul food restaurant in the South Meadows neighborhood of Hartford. Photograph by Mark Mirko | mmirko@courant.com (Mark Mirko/The Hartford Courant)</p>
            </div>
          </Col>
          
        </Row>
      </Container>
     

      <div className="marquee-container">
      <div className="marquee-text" id="scrolling-text">
        Bang Bang Seafood. Bang Bang Seafood.Bang Bang Seafood. Bang Bang Seafood.
      </div>
    </div>
    </div>
  );
};

export default AboutUs;

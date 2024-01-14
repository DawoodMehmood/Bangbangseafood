// ... Other imports ...
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

import "./../contact/contact.css";
import "./menu.css";
import BACKEND_URL from "../../config";
import backgroundImage from "./../../img/background-image.jpg";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #000000;
`;

const MenuCopy = () => {
  const [menuImg, setMenuImg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch contact information from the API
    fetch(`${BACKEND_URL}/api/menu/getAllImages`)
      .then((response) => response.json())
      .then((data) => data.sort((a, b) => a.sequenceNo - b.sequenceNo))
      .then((sortedImages) => {
        setMenuImg(sortedImages);
        setLoading(false); // Set loading to false when images are fetched
      })
      .catch((error) => {
        console.error("Error fetching menu images:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div className="menu-main">
      <div className="contact-image">
        <img src={backgroundImage} alt="header img" loading="lazy" />
        <h1 className="fs-1 centered-heading">MENU</h1>
      </div>
      {/* {loading?( <div className="loader-container">
        <ClipLoader css={override} size={50} color={"#ffffff"} loading={loading} className="ring-loader" />
      </div> ) :(<Container className="container-fluid" fluid>
        <Row className="no-gutters mobile-row mx-5">
          {menuImg.map((menu, index) => (
            <React.Fragment key={index}>
              <Col sm={12}>
                <div className="menuimage">
                  {menu && (
                    <img
                      className="menu-img"
                      src={menu.image}
                      alt={`menu img ${index}`}
                      loading="lazy"
                    />
                  )}
                </div>
              </Col>

              <Col sm={12}>
                <div className="menuimage">
                  <div className="divider"></div>
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>)} */}
      {loading ? (
        <div className="loader-container">
          <ClipLoader
            css={override}
            size={100}
            color={"#ffffff"}
            loading={loading}
            className="clip-loader"
          />
        </div>
      ) : (
        <Container className="container-fluid" fluid>
          <Row className="no-gutters mobile-row mx-5">
            {menuImg.map((menu, index) => (
              <React.Fragment key={index}>
                <Col sm={9} className="mx-auto">
                  <div className="menuimage">
                    {menu && (
                      <img
                        className="menu-img"
                        src={menu.image}
                        alt={`menu img ${index}`}
                        loading="lazy"
                      />
                    )}
                  </div>
                </Col>

                <Col sm={9} className="mx-auto">
                  <div className="menuimage">
                    <div className="divider"></div>
                  </div>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Container>
      )}
      <div className="marquee-container">
        <div className="marquee-text" id="scrolling-text">
          Bang Bang Seafood & Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;Bang Bang Seafood &
          Grill&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};

export default MenuCopy;

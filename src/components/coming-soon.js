import React from "react";
import { Container } from "react-bootstrap";

const ComingSoon = () => {
  return (
    <div>
      <div className="catering-image">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/07/76/96/1000_F_107769633_FrmulZCjEzdZ46f5LGbx26JmSuXdCILH.jpg"
          alt="catering img"
          loading="lazy"
        />
      </div>
      <div className="box">
        <Container>
          <div className="m-4">
            <h2 className="address text-center text-red my-5">COMING SOON</h2>
          </div>
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
export default ComingSoon;

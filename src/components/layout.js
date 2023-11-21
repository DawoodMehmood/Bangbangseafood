import { Outlet, Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import brandImage from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
  const location = useLocation();
  return (
    <>
    <div  className="banner text-center"><Container className="py-2">
         
    <strong>Take Out Restaurant</strong> & <strong>We Deliver</strong>
         
        </Container></div>
    
        <Navbar className={` navbar-icons px-5 dark-navbar`}>
        {/* ... (your other Navbar content) */}
        
        <Navbar.Brand as={Link} to="/"><img
          src={brandImage}
          alt="Brand Logo"
          width="80"
          height="80"

        /></Navbar.Brand>
        <Nav className="nav-flex"> {/* Apply the center-nav class */}
          <Nav.Link as={Link} to="/" className='text-light underline-on-hover-white'>Home</Nav.Link>
          <Nav.Link as={Link} to="/menu" className='text-light underline-on-hover-white'>Menu</Nav.Link>
          <Nav.Link as={Link} to="/order-online" className='text-light underline-on-hover-white'>Online Pickup Order</Nav.Link>
          <Nav.Link as={Link} to="/preorder" className='text-light underline-on-hover-white'>Pre-order</Nav.Link>
          <Nav.Link as={Link} to="/catering" className='text-light underline-on-hover-white'>Catering</Nav.Link>
          {/* <Nav.Link as={Link} to="/gallery" className='text-light underline-on-hover-white'>Gallery</Nav.Link> */}
          <Nav.Link as={Link} to="/about" className='text-light underline-on-hover-white'>About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact" className='text-light underline-on-hover-white'>Contact Us</Nav.Link>

        </Nav>
        <Nav >
          <a target="_blank" className='mx-3' href="https://www.facebook.com/profile.php?id=61553102605034">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="custom-facebook-icon" />
          </a>
          <a target="_blank" href="https://instagram.com/bangbangseafoodandgrill?igshid=YTQwZjQ0NmI0OA==" >
            <FontAwesomeIcon icon={faInstagram} size="2x" className="custom-instagram-icon" />
          </a>
        </Nav>

      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;

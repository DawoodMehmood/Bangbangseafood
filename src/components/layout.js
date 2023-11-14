import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import brandImage from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
  return (
    <>
    <div  className="banner text-center"><Container className="py-2">
         
            Take out and delivery options are available
         
        </Container></div>
    
      <Navbar className="custom-navbar navbar-icons px-5">
        
        <Navbar.Brand as={Link} to="/"><img
          src={brandImage}
          alt="Brand Logo"
          width="80"
          height="80"

        /></Navbar.Brand>
        <Nav className="nav-flex"> {/* Apply the center-nav class */}
          <Nav.Link as={Link} to="/" className="underline-on-hover">Home</Nav.Link>
          <Nav.Link as={Link} to="/menu" className="underline-on-hover">Menu</Nav.Link>
          <Nav.Link as={Link} to="/order-online" className="underline-on-hover">Order Online</Nav.Link>
          <Nav.Link as={Link} to="/preorder" className="underline-on-hover">Pre-order</Nav.Link>
          <Nav.Link as={Link} to="/catering" className="underline-on-hover">Catering</Nav.Link>
          {/* <Nav.Link as={Link} to="/gallery" className="underline-on-hover">Gallery</Nav.Link> */}
          <Nav.Link as={Link} to="/about" className="underline-on-hover">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="underline-on-hover">Contact Us</Nav.Link>

        </Nav>
        <Nav >
          <a target="_blank" className='mx-2' href="https://www.facebook.com/profile.php?id=61553102605034">
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

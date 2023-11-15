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
         
    <strong>Take Out</strong> & <strong>Delivery</strong> Both Options are Available
         
        </Container></div>
    
        <Navbar className={` navbar-icons px-5 ${location.pathname === '/home' ? 'dark-navbar ' : 'custom-navbar'}`}>
        {/* ... (your other Navbar content) */}
        
        <Navbar.Brand as={Link} to="/"><img
          src={brandImage}
          alt="Brand Logo"
          width="80"
          height="80"

        /></Navbar.Brand>
        <Nav className="nav-flex"> {/* Apply the center-nav class */}
          <Nav.Link as={Link} to="/" className={` ${location.pathname === '/home' ? 'text-light underline-on-hover-white' : 'underline-on-hover-black'}`}>Home</Nav.Link>
          <Nav.Link as={Link} to="/menu" className={` ${location.pathname === '/home' ? 'text-light underline-on-hover-white' : 'underline-on-hover-black'}`}>Menu</Nav.Link>
          <Nav.Link as={Link} to="/order-online" className={` ${location.pathname === '/home' ? 'text-light underline-on-hover-white' : 'underline-on-hover-black'}`}>Order Online</Nav.Link>
          <Nav.Link as={Link} to="/preorder" className={` ${location.pathname === '/home' ? 'text-light underline-on-hover-white' : 'underline-on-hover-black'}`}>Pre-order</Nav.Link>
          <Nav.Link as={Link} to="/catering" className={` ${location.pathname === '/home' ? 'text-light underline-on-hover-white' : 'underline-on-hover-black'}`}>Catering</Nav.Link>
          {/* <Nav.Link as={Link} to="/gallery" className={` ${location.pathname === '/home' ? 'text-light underline-on-hover-white' : 'underline-on-hover-black'}`}>Gallery</Nav.Link> */}
          <Nav.Link as={Link} to="/about" className={` ${location.pathname === '/home' ? 'text-light underline-on-hover-white' : 'underline-on-hover-black'}`}>About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact" className={` ${location.pathname === '/home' ? 'text-light underline-on-hover-white' : 'underline-on-hover-black'}`}>Contact Us</Nav.Link>

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

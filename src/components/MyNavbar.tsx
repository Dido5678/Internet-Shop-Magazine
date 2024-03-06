import * as React from 'react';
import styles from '../assets/my.module.scss';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


interface  MyNavbarProps {
}

const MyNavbar: React.FC< MyNavbarProps> = () => {
  
  return (
    
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{backgroundColor: "none"}}>
      <Container>
        <Navbar.Brand>
        <div className={styles.cont}>
          <span className={styles.hot_offer}>SHARE</span>
          <Link to="https://www.pinterest.com/">
            <img className={styles.icons} src="./icons/pinterestblack.png" alt="pinterest"/>
          </Link>
        </div>

          <span className={styles.hot_offer}>SHARE</span>
          <Link to="https://www.facebook.com">
            <img className={styles.icons} src="./icons/facebook.png" alt="facebook"/>
          </Link>
          <span className={styles.hot_offer}>SHARE</span>
          <Link to="https://www.twitter.com">
            <img className={styles.icons} src="./icons/twitter.png" alt="twitter"/>
          </Link>
          <span className={styles.hot_offer}>SHARE</span>
          <Link to="https://www.linkedin.com">
            <img className={styles.icons} src="./icons/linkedin.png" alt="linkedin"/>
          </Link>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <NavDropdown title="PAGES" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/home">HOME</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/2.2">SHOP</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productdetails/2.3">PRODUCT DETAILS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cart/2.4">CART</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/checkout/2.5">CHECKOUT</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/dresses">DRESSES</Nav.Link>
            <div className={styles.hot_box}>
              <span className={styles.hot_world}>HOT</span>
              <Nav.Link as={Link} to="/shoes">SHOES</Nav.Link>
            </div>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/home" className={styles.tel_container}>
              <img className={styles.service} src="./icons/customer-service.png" alt="customer-service"/>
              <div className={styles.tel}> +34 657 3556 778</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
};

export default MyNavbar;

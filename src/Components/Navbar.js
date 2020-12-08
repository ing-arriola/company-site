import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

//nav-link
const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Link
            className="navbar-brand cursor nav-link"
            to="home-section"
            smooth={true}
            duration={1000}
          >
            RestaurantJS
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/Services" className="nav-link">
                Services
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

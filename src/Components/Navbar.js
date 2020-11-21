import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

//nav-link
const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Container>
          <Link
            className="navbar-brand cursor nav-link"
            to="home-section"
            smooth={true}
            duration={1000}
          >
            Jarriola
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
              <Nav.Link to="share">Blog</Nav.Link>

              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

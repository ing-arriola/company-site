import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Nav.Link
            className="navbar-brand cursor "
            to="home-section"
            smooth={true}
            duration={1000}
          >
            LOOP
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link to="home-section" smooth={true} duration={1000}>
                Home
              </Nav.Link>

              <Nav.Link to="explore" smooth={true} duration={1000}>
                Explore
              </Nav.Link>
              <Nav.Link to="create" smooth={true} duration={1000}>
                Create
              </Nav.Link>
              <Nav.Link to="share" smooth={true} duration={1000}>
                Share
              </Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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

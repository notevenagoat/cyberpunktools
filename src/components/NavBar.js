import React from "react";
import Header from "../Header";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link>Not Even Goat</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown title="Tools" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/night_market">Night Market</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/fashion_generator">Fashion Generator</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/about">About Us</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;

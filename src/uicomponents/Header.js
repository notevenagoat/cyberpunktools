import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        CYBERPUNK<span>RED</span>
      </h1>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link>
                <Link className="nav_flex" to="/cyberpunktools/">
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown title="Tools" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="nav_flex" to="/cyberpunktools/night_market">
                    Night Market
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="nav_flex"
                    to="/cyberpunktools/fashion_generator"
                  >
                    Fashion Generator
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link className="nav_flex" to="/cyberpunktools/about">
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav_flex" to="/cyberpunktools/contact">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

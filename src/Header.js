import React from "react";
import Navigation from "./components/NavBar";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <Container>
      <header>
        <h1>
          CYBERPUNK
          <span style={{ color: "red" }}>RED</span>
        </h1>
        <Navigation />
      </header>
    </Container>
  );
}

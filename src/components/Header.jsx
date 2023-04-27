import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Link style={{ color: "black" }} to={"/"}>
            <Navbar.Brand style={{ color: "black" }}>Home</Navbar.Brand>
          </Link>
          <Link style={{ color: "black" }} to={"/about"}>
            <Navbar.Brand style={{ color: "black" }}>About</Navbar.Brand>
          </Link>

          <Link style={{ color: "black" }} to={"/career"}>
            <Navbar.Brand style={{ color: "black" }}>Career</Navbar.Brand>
          </Link>
          <Link style={{ color: "black" }} to={"/fenty"}>
            <Navbar.Brand style={{ color: "black" }}>Fenty</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

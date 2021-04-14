import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Navbarr = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand className="mr-auto">
        <img src={logo} alt="CoderSchool" width="50px" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} exact to="/jobs">
          Jobs List
        </Nav.Link>
        <Nav.Link as={Link} exact to="/login">
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navbarr;

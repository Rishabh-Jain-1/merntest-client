import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const { auth } = useSelector((state) => state);
  return (
    <div>
      <Container>
        <Navbar bg="light" variant="dark">
          <Container>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              {auth.user ? (
                <Nav.Link as={NavLink} to="/logout">
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

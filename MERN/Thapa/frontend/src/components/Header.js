import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mearn-Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className="mx-3 my-1"
              to="/"
              style={{ color: "black", textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              className="mx-3 my-1"
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              className="mx-3 my-1"
              to="/contact"
              style={{ color: "black", textDecoration: "none" }}
            >
              Contact
            </Link>
          </Nav>
          <Link className="mx-3" to="/login">
            <Button>Login</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;

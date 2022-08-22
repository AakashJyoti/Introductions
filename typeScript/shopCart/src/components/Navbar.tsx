import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useShoppingCart } from "../context/shopingCartContext";

export function Navbar() {
  const { openCart, cartQuatity } = useShoppingCart();
  return (
    <NavbarBs className="bg-white shadow-sm nb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuatity > 0 && (
          <Button
            onClick={openCart}
            style={{
              width: "3rem",
              height: "3rem",
              padding: "0",
              position: "relative",
            }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <BsFillCartFill style={{ width: "1.5rem", height: "1.5rem" }} />

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center "
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "0",
                right: "0",
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuatity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}

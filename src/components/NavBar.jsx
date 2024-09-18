import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./../context/UserContext"; 
import CartTotal from "./CartTotal";

function NavBar() {
  const { user } = useContext(UserContext); 

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="link whiteText" to="/">
            Pizzeria Mamma Mia
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link whiteText" to="/">
              Home
            </Link>
            {user ? (
              <>
                <NavLink className="link whiteText" to="/profile">
                  Profile
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="link whiteText" to="/login">
                  Login
                </NavLink>
                <NavLink className="link whiteText" to="/register">
                  Register
                </NavLink>
              </>
            )}
          </Nav>
          <Nav>
            <Link className="link whiteText" to="/cart">
              <CartTotal className="carrito"></CartTotal>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { HeaderContainer } from "./header.styles";
import ThemeButton from "../elements/button";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#home">Pal's Parking</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-end m-auto me-auto navbar-nav w-100 gap-3">
              <Nav.Link href="#home">Contact Us</Nav.Link>
              <ThemeButton className="login-btn rounded-pill">
                Login
              </ThemeButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;

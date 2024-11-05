import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { HeaderContainer } from "./header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid >
                    <Navbar.Brand href="#home">Pal's Parking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex justify-content-end m-auto me-auto navbar-nav w-100 gap-3">
                            <Nav.Link href="#home">Contact Us</Nav.Link>
                            <Button variant="primary" className="login-btn rounded-pill">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header
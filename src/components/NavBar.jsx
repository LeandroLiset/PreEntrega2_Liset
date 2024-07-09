import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
    <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Drink Store</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Vinos</Nav.Link>
                    <Nav.Link href="#features">Cervezas</Nav.Link>
                    <Nav.Link href="#pricing">Gins</Nav.Link>
                    <Nav.Link href="#pricing">Whiskies</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </>
); 
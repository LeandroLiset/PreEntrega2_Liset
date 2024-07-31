import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
    <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Drink Store</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/vinos">Vinos</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/cervezas">Cervezas</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/gins">Gins</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/whiskies">Whiskies</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </>
); 
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminNav = () => {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: '#176B87' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/" className="logo">Suppliers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white', borderColor: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/AHome" className="nav-link-custom">Home</Nav.Link>
                            <Nav.Link as={Link} to="/AUniforms" className="nav-link-custom">Uniforms</Nav.Link>
                            <Nav.Link as={Link} to="/UsersList" className="nav-link-custom">UsersList</Nav.Link>
                            <Nav.Link as={Link} to="/Events" className="nav-link-custom">Events</Nav.Link>
                            <Nav.Link as={Link} to="/OnlineBooked" className="nav-link-custom">OnlineBooked</Nav.Link>
                            <Nav.Link as={Link} to="/" className="login">LogOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default AdminNav;

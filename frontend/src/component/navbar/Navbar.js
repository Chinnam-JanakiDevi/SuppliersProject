// import './Navbar.css';
// import { Link } from "react-router-dom"


// const Navbar = () => {
//     return (
//         <>
//             <nav>
//                 <input type="checkbox" id="check"></input>
//                 <label htmlFor="check" className="checkbtn">
//                     <i className="fas fa-bars"></i>
//                     <i className="fas fa-times"></i>
//                 </label>
//                 <label className="logo">Suppliers</label>
//                 <ul>
//                     <li><Link to="/Home">Home</Link></li>
//                     <li><Link to="/Login">Uniforms</Link></li>
//                     <li><Link to="/Home">Events</Link></li>
//                     <li><Link to="/Gallery">Gallery</Link></li>
//                     <li><Link to="/Register" className="login">Sign Up/In</Link></li>
//                 </ul>
//             </nav>
//         </>
//     )
// }
// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavigationBar = () => {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: '#176B87' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/" className="logo">Suppliers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white', borderColor: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/Home" className="nav-link-custom">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Login" className="nav-link-custom">Uniforms</Nav.Link>
                            <Nav.Link as={Link} to="/Home" className="nav-link-custom">Events</Nav.Link>
                            <Nav.Link as={Link} to="/Gallery" className="nav-link-custom">Gallery</Nav.Link>
                            <Nav.Link as={Link} to="/Gallery" className="nav-link-custom">BookOnline</Nav.Link>
                            <Nav.Link as={Link} to="/Register" className="login">Sign Up/In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;

import React from 'react';
import { Col, Container, Nav, Navbar ,Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import logo from '../../../media/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar expand="lg" className="navigation-container w-100">
            <Container>
                <Row className=" mx-auto">
                    <Col md={2} xs={2}>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="130"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        </Navbar.Brand>
                    </Col>
                    <Col md={10}>
                        
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className = "fs-5">
                            <NavLink className = "p-3 nav-menu" to="/home" activeStyle={{fontWeight: "bold", color: "#008aff"}}>Home</NavLink>
                            <NavLink className = "p-3 nav-menu" to="/about" activeStyle={{fontWeight: "bold", color: "#008aff"}}>About</NavLink>
                            <NavLink className = "p-3 nav-menu" to="/services" activeStyle={{fontWeight: "bold", color: "#008aff"}}>Services</NavLink>
                            <NavLink className = "p-3 nav-menu" to="/doctors" activeStyle={{fontWeight: "bold", color: "#008aff"}}>Doctors</NavLink>
                            <NavLink className = "p-3 nav-menu" to="/contacts" activeStyle={{fontWeight: "bold", color: "#008aff"}}>Contacts</NavLink>
                            {user.email ? <><p className="user-name">{user.displayName}</p><button onClick={logOut} className = "logout-btn p-3 nav-menu" to="/home">Logout</button></> :<NavLink className = "p-3 nav-menu" to="/login"  activeStyle={{fontWeight: "bold", color: "#008aff"}}>Login</NavLink>}
                        </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn" />
           </Container>
        </Navbar >
    );
};

export default Header;
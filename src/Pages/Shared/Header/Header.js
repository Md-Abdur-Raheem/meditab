import React from 'react';
import { Col, Container, Nav, Navbar ,Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../media/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className="navigation-container w-100">
            <Container>
                <Row>
                    <Col md = {4}>
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
                    <Col md={8}>
                        <Nav className = "fs-5">
                            <NavLink className = "p-3 nav-menu" to="#home">Home</NavLink>
                            <NavLink className = "p-3 nav-menu" to="#link">About</NavLink>
                            <NavLink className = "p-3 nav-menu" to="#home">Services</NavLink>
                            <NavLink className = "p-3 nav-menu" to="#link">Doctors</NavLink>
                            <NavLink className = "p-3 nav-menu" to="#home">Contacts</NavLink>
                            <NavLink className = "p-3 nav-menu" to="#link">Login</NavLink>
                        </Nav>
                    </Col>
           </Row>
           </Container>
        </header>
    );
};

export default Header;
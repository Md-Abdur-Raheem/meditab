import React from 'react';
import { Col, Container, Nav, Navbar ,Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import logo from '../../../media/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
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
                            <NavLink className = "p-3 nav-menu" to="/home">Home</NavLink>
                            <NavLink className = "p-3 nav-menu" to="/about">About</NavLink>
                            <NavLink className = "p-3 nav-menu" to="/services">Services</NavLink>
                            <NavLink className = "p-3 nav-menu" to="/doctors">Doctors</NavLink>
                            <NavLink className = "p-3 nav-menu" to="/contacts">Contacts</NavLink>
                            {user.email ? <><p className="user-name">{user.displayName}</p><button onClick={logOut} className = "logout-btn p-3 nav-menu" to="/home">Logout</button></> :<NavLink className = "p-3 nav-menu" to="/login">Login</NavLink>}
                        </Nav>
                    </Col>
           </Row>
           </Container>
        </header>
    );
};

export default Header;
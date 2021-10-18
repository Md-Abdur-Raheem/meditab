import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../media/logo-removebg.png'

const Footer = () => {
    return (
        <footer className="footer-container">
            <Container>
                <Row className="gx-5">
                    <Col md={4} className="text-start">
                        <img src={logo} alt="" width="180px" className="mb-2"/>
                        <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare</p>
                    </Col>
                    <Col md={2} className="text-start">
                        <h3 className="mb-5 title">Departments</h3>
                        <ul className="departments-list ps-0">
                            <li>Dental Service</li>
                            <li>Emergency Medicine</li>
                            <li>Ophthalmology</li>
                            <li>Orthopedic Surgery</li>
                            <li>Neurosurgery</li>
                            <li>Radiation Oncology</li>
                        </ul>
                    </Col>
                    <Col md={3} className="text-start">
                        <h3 className="mb-5 title">Opening hour</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="pe-4 pb-2">Mon-Tues:</td>
                                    <td className="ps-3 pb-2">6:00-10:00</td>
                                </tr>
                                <tr>
                                    <td className="pb-2">Wed-Thurs:</td>
                                    <td className="ps-3">6:00-10:00</td>
                                </tr>
                                <tr>
                                    <td className="pb-2">Sat-Sun:</td>
                                    <td className="ps-3">6:00-10:00</td>
                                </tr>
                                <tr>
                                    <td className="pb-2">Friday:</td>
                                    <td className="ps-3">Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md={3} className="text-start">
                        <h3 className="mb-5 title">Get in touch</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="pe-2"><i className="fas fa-map-marker-alt fs-2"></i></td>
                                    <td className="ps-3"><p className="m-0">2130 Fulton Street</p><p>San Diego CA 94117-1080 USA</p></td>
                                </tr>
                                <br />
                                <tr>
                                    <td><i className="fas fa-phone-alt fs-2"></i></td>
                                    <td className="ps-3"><p className="m-0">Coll Us Now!</p><p>+898 68679 575</p></td>
                                </tr>
                                <br />
                                <tr>
                                    <td><i className="fas fa-envelope fs-2"></i></td>
                                    <td className="ps-3"><p className="m-0">Do you have a Question?</p><p>info@gmail.com</p></td>
                                </tr>
                            </tbody>
                        </table>        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
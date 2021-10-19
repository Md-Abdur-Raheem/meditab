import React from 'react';
import { Container } from 'react-bootstrap';
import './Contacts.css'

const Contacts = () => {
    return (
        <Container className="mx-auto">
            <div className="banner container mb-5"><h1 className="banner-title text-start text-primary fw-bold fs-1">Contact Us</h1></div>
            <div className="row mb-5 mx-auto">
                <div className="col-md-4">
                    <h1 className="text-start">Contact Our Office <br /> Inforamtion</h1>
                    <div className="d-flex align-items-center my-5">
                        <i className="cont-icon fas fa-map-marker-alt me-3"/>
                        <div className="text-start">
                        <h4>Address</h4>
                        <p>2130 Fulton Street San Diego CA 94117- <br /> 1080 USA</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center my-5">
                        <i className="cont-icon fas fa-phone-alt me-3"/>
                        <div className="text-start">
                        <h4>+898 68679 575</h4>
                        <p>Coll Us Now!</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center my-5">
                        <i className="cont-icon fas fa-envelope me-3"></i>
                        <div className="text-start">
                        <p>Do you have a Question?</p>
                        <h4>info@gmail.com</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 text-start">
                    <h1 className="mb-5" >Do Not Use This Form <br /> To Communicate Personal Data.</h1>
                    <div>
                        <input className="input-field" type="text" placeholder="Your Name"/>
                        <input className="input-field" type="email" placeholder="Your Email" />
                    </div>
                    <div>
                        <input className="input-field" type="number" placeholder="Phone" />
                        <input className="input-field" type="text" placeholder="Subject" />
                    </div>
                    <textarea className="text-field" placeholder="Message" cols="80" rows="5"></textarea>
                    <br />
                    <button className="all-service-btn">Send Mesage</button>
                </div>
                
            </div>
        </Container>
    );
};

export default Contacts;
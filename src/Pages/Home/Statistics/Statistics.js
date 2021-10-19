import React from 'react';
import { Container } from 'react-bootstrap';
import './Statistics.css'

const Statistics = () => {
    return (
        <Container className="statsitics-container my-5">
            <div className="row">
                <div className="col-md-3"><h1 className="text-primary fw-bolder">850+</h1><p className="fw-bold">Patients Beds</p></div>
                <div className="col-md-3"><h1 className="text-primary fw-bolder">25000+</h1><p className="fw-bold">Happy Patients</p></div>
                <div className="col-md-3"><h1 className="text-primary fw-bolder">750+</h1><p className="fw-bold">Doctors & Nurses</p></div>
                <div className="col-md-3"><h1 className="text-primary fw-bolder">18+</h1><p className="fw-bold">Years Experiences</p></div>
            </div>
        </Container>
    );
};

export default Statistics;
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices/useServices';
import useTestServices from '../../hooks/useTestServices/useTeseServices';
import OneService from './OneService';
import './Services.css'

const Services = () => {
    const [services] = useServices();
    const [test] = useTestServices();
    return (
        <div>
            <div className="banner container mb-5"><h1 className="banner-title text-start text-primary fw-bold fs-1">Services</h1></div>
            <h1>Explore Our Caring & Premium <br /> Medical Services</h1>
            <Row  className="container mx-auto p-5 m-0">
                {services.map(service => <OneService key = {service.id} service = {service}></OneService> )}
            </Row>

            <div>
                <h5 className="text-success">OUR SPECIALTIES</h5>
                <h1>Explore Our Services</h1>
                <p>We are the team of experts and specialist for particular braches falls into <br /> research and diagnosis, ready to serve you at their best.</p>
                <Row className="container mx-auto my-5">
                    {test.map(t => 
                        <Card className="col-md-4 mx-auto text-center test-service pb-5">
                        <Card.Img variant="top" src={t.img} />
                        <Card.Body>
                            <Card.Title>{t.name}</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste, omnis quos culpa qui illum voluptates ea obcaecati ut earum?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    )}
                </Row>
            </div>

        </div>
    );
};

export default Services;
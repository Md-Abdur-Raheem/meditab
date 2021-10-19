import React from 'react';
import useServices from '../../../hooks/useServices/useServices';
import './Service.css'
import EachService from './EachService';
import { Row } from 'react-bootstrap';

const Service = () => {
    const [services] = useServices();
    console.log(services);
    return (
        <div className="service-container py-5">
            <h1>Explore Our Caring & Premium <br /> Medical Services</h1>
            <div className="services container">
            <Row className="p-5 m-0 flex-nowrap">               
                {services.map(service => <EachService key = {service.id} service = {service}></EachService>)}
            </Row>
        </div>
        </div>
    );
};

export default Service;
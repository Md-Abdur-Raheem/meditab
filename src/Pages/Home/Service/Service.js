import React from 'react';
import useServices from '../../../hooks/useServices/useServices';
import './Service.css'
import EachService from './EachService';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = () => {
    const [services] = useServices();
    const history = useHistory();

    const handleClick = () =>{
        history.push('/services')
    }
    return (
        <div className="service-container py-5">
            <h1>Explore Our Caring & Premium <br /> Medical Services</h1>
            <div className="services container">
            <Row className="p-5 m-0 flex-nowrap">               
                {services.map(service => <EachService key = {service.id} service = {service}></EachService>)}
            </Row>
            </div>
            <div className="d-flex justify-content-between flex-wrap text-start p-5 ms-5">
                <div>
                    <h1>TRUE HEALTHCARE FOR YOUR FAMILY!</h1>
                    <p>Serve the community by improving the quality of life through better health.</p>
                </div>
                <button onClick={handleClick} className="all-service-btn text-start me-5">View All Services</button>
            </div>
        </div>
    );
};

export default Service;
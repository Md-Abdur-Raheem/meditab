import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices/useServices';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { id } = useParams();
    const [services] = useServices();

    const service = services.filter(service => service.id == id);

    return (
        <div>
            {
                service.length && <div>
                    <div className="banner container mb-5"><h1 className="banner-title text-start text-primary fw-bold fs-1">{service[0].name} at Meditab</h1></div>
                    <Container className="d-flex justify-content-center align-items-center flex-wrap flex-xl-nowrap">
                        <img className="details-img m-5" src={service[0].serviceImg} alt="" />
                        <div className="text-start p-5">
                            <h3 className="text-success">Introduction to {service[0].name}</h3>
                            <p>{service[0].longDescription}</p>
                            <h3 className="text-success">Our Treatments</h3>
                            <ul>
                                {service[0].treatments.map(treatment => <li key={treatment}>{treatment}</li>)}
                            </ul>
                        </div>
                    </Container>
                </div>
            }
        </div>
    );
};

export default ServiceDetails;
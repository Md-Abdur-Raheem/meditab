import React from 'react';
import { Card } from 'react-bootstrap';
import './OneService.css'

const OneService = (props) => {
    const { name, serviceImg, shortDescription } = props.service;

    return (
        <Card className="col-md-4 g-5 text-center one-service pb-5">
            <Card.Img className="card-img" variant="top" src={serviceImg} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {shortDescription}
                </Card.Text>
            </Card.Body>
            <button className="read-btn">Read More</button>
        </Card>
    );
};

export default OneService;
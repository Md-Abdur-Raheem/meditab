import React from 'react';
import './EachService.css'
import { Card } from 'react-bootstrap';

const EachService = (props) => {
    console.log(props);
    const { name, serviceImg, shortDescription } = props.service;
    return (
        <Card className="col-md-3 text-center service pb-5">
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

export default EachService;
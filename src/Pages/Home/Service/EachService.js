import React from 'react';
import './EachService.css'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const EachService = (props) => {
    const { name, serviceImg, shortDescription, id } = props.service;

    const history = useHistory();

    const handleCLick = () => {
        history.push(`/details/${id}`)
    }

    return (
        <Card className="col-md-3 text-center service pb-5">
            <Card.Img className="card-img" variant="top" src={serviceImg} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {shortDescription}
                </Card.Text>
            </Card.Body>
            <button onClick={handleCLick} className="read-btn">Read More</button>
        </Card>
    );
};

export default EachService;
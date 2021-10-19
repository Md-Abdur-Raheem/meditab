import React from 'react';
import { Card } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, designation, img } = props.doctor;
    return (
        
             <Card className="col-md-3 text-center border-0 pb-5">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-end">
                    <small>{designation}</small>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    </Card>
  
    );
};

export default Doctor;
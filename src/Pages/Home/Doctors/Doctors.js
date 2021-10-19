import React from 'react';
import { Card, Row } from 'react-bootstrap';
import doctor_1 from '../../../media/doctors/team-1.jpg';
import doctor_2 from '../../../media/doctors/team-2.jpg';
import doctor_3 from '../../../media/doctors/team-3.jpg';
import doctor_4 from '../../../media/doctors/team-4.jpg';

const Doctors = () => {
    return (
        <div>
            <h1>Meet our Dedicated <br /> Doctor’s Team</h1>
            <Row className="container mx-auto my-5">
                <Card className="col-md-3 text-center border-0 pb-5">
                    <Card.Img variant="top" src={doctor_1} />
                    <Card.Body className="text-end">
                    <small>Neuro surgeon</small>
                        <Card.Title>DR. BABATUNDE</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="col-md-3 text-center border-0 pb-5">
                    <Card.Img  variant="top" src={doctor_2} />
                    <Card.Body className="text-end">
                        <small>Dental surgeon</small>
                        <Card.Title>DR. ADDISION SMITH</Card.Title>

                    </Card.Body>
                </Card>
                <Card className="col-md-3 text-center border-0 pb-5">
                    <Card.Img variant="top" src={doctor_3} />
                    <Card.Body className="text-end">
                    <small>Cardiyio surgeon</small>
                        <Card.Title>DR. SARAH TYLOR</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="col-md-3 text-center border-0 pb-5">
                    <Card.Img variant="top" src={doctor_4} />
                    <Card.Body className="text-end">
                    <small>Pediatrician</small>
                        <Card.Title>DR. JACKSON WILL</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
};

export default Doctors;
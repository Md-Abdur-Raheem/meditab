import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors/useDoctors';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <div>
            <div className="banner container mb-5"><h1 className="banner-title text-start text-primary fw-bold fs-1">Doctors</h1></div>
            <Row className="container mx-auto p-5 m-0">
            
                    {doctors.map(doctor => <Doctor key = {doctor.id} doctor={doctor}></Doctor>)}
         
            </Row>
        </div>
    );
};

export default Doctors;
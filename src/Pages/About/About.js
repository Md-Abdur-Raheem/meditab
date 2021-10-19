import React from 'react';
import { Container } from 'react-bootstrap';
import team from '../../media/doctors-team.jpg'

const About = () => {
    return (
        <Container className="mb-5">
            <div className="banner container mb-5"><h1 className="banner-title text-start text-primary fw-bold fs-1">About Us</h1></div>
            <div className="row">
                <div className="col-md-4">
                    <img className="w-100" src={team} alt="" />
                </div>
                <div className="col-md-8 text-start mt-2">
                    <h2>About Meditab</h2>
                    <p>Meditab Group has over two decades of experience in the healthcare sector, and is known for providing quality healthcare and valuable experience to all domestic and international patients. Our healthcare offerings are supported by a team of compassionate and dedicated medical professionals who have rich knowledge and experience in their respective domains.</p>

                    <p style={{fontSize:"20px"}}>Healthcare landmark</p>
                    <p className="text-primary"><i>Meditab Hospital, a healthcare landmark, has been a household name to more than 50 million People. We currently have branches in 30 countries all over the world.</i></p>
                </div>
            </div>
        </Container>
    );
};

export default About;
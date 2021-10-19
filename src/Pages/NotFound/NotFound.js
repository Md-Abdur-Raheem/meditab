import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import img from '../../media/lost.png'
import './NotFound.css'

const NotFound = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div className = "not-found">
            <img className="my-5" id="lost" src={img} alt="" />
            <h1 className = "mb-5">Sorry!!! Page not found</h1>
            <Button onClick = {handleClick} className = "login-btn">Back To Home</Button>
        </div>
    );
};

export default NotFound;
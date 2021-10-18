import React from 'react';
import doctor from '../../../media/banner/doctor.png'
import "./Banner.css"


const Banner = () => {
    return (
        <div className="banner-container row g-0 d-flex justify-content-center align-items-center">
            <img src={doctor} alt="" className="banner-img col-6 col-md-6 col-sm-6 col" />
            <h1 className="banner-text text-center col-6 col-md-6 col-sm-6 col d-block">We Provide Total <br /> Health Care Solution</h1>
        </div>
    );
};

export default Banner;

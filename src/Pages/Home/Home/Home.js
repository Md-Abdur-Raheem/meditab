import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Service from '../Service/Service';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Statistics></Statistics>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;
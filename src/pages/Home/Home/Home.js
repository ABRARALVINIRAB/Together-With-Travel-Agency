import React from 'react';
import Banner from '../Banner/Banner';

import ClientReview from '../ClientReview/ClientReview';
import Experts from '../Experts/Experts';
import NotFound from '../NotFound/NotFound';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <ClientReview></ClientReview>
            
            <Experts></Experts>

        </div>
    );
};

export default Home;
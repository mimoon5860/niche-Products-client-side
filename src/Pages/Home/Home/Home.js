import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Reviews from '../../Dashboard/Reviews/Reviews';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </>
    );
};

export default Home;
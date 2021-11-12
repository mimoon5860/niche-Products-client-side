import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <Products />
            <Reviews />
            <Subscribe />
            <Footer />
        </>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.png'
import Footer from '../../Shared/Footer/Footer';

const Error = () => {
    return (
        <>
            <div style={{ height: '78vh', width: '450px', margin: '0 auto', textAlign: 'center' }}>
                <img width='100%' src={error} alt="" />

                <Link to='/'>Back to Home</Link>
            </div>
            <Footer />
        </>
    );
};

export default Error;
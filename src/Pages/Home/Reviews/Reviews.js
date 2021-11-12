import { Container, Divider, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('https://tranquil-forest-55294.herokuapp.com/reviews')
            .then(res => {
                setReviews(res.data);
                console.log(res.data);
            })
    }, [])
    return (
        <div style={{ marginTop: '2rem' }}>
            <h1 style={{ textAlign: 'center', margin: '20px' }}>Reviews
                <Divider />
            </h1>
            <Container>
                <Grid container spacing={2}>
                    {
                        reviews.map(review => <ShowReview revieww={review} key={review._id} />)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;
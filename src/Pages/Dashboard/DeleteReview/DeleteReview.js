import { Container, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowReviewsForDelete from './ShowReviewsForDelete';

const DeleteReview = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        axios.get('https://tranquil-forest-55294.herokuapp.com/reviews')
            .then(res => {
                setReviews(res.data);
            })
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        if (reviews.length > 4) {
            const confirm = window.confirm('Are You sure?')
            if (confirm) {
                axios.delete(`https://tranquil-forest-55294.herokuapp.com/review/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const restReviews = reviews.filter(review => review._id !== id);
                            setReviews(restReviews);
                            alert('Review Deleted')
                        }
                    })
            }
        } else {
            alert('You can delete review when review will be more then 4')
        }


    }

    return (
        <Container>
            <Box mb={{ xs: '0', md: '160px' }}>
                <h1 style={{ margin: '25px 0' }}>
                    Delete Reviews
                    <Divider />
                </h1>

                <Grid container spacing={2}>
                    {
                        reviews.map(review => <ShowReviewsForDelete handleDelete={handleDelete} key={review._id} singleReview={review} />)
                    }
                </Grid>


            </Box>
        </Container>
    );
};

export default DeleteReview;
import { Button, Grid, Rating } from '@mui/material';
import React from 'react';

const ShowReviewsForDelete = ({ singleReview, handleDelete }) => {
    const { name, review, rating, _id } = singleReview;

    const button = {
        padding: '5px 15px',
        margin: '5px',
        fontWeight: 'bold',
        color: '#11A0DB',
        cursor: 'pointer'
    }

    return (
        <Grid item xs={12} md={6} lg={4}>
            <div style={{ height: '100%', padding: '10px', borderRadius: '5px', boxShadow: '0px 0px 41px 0px rgba(0,0,0,0.57)' }}>
                <Grid container spacing={2} >
                    <Grid item xs={8}>
                        <Rating name="read-only" value={rating} readOnly />
                        <h5>Reviewer Name: {name}</h5>
                        <small>{review}</small>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={() => handleDelete(_id)} variant="outlined" style={button}>Delete</Button>
                    </Grid>
                </Grid>
            </div>

        </Grid>
    );
};

export default ShowReviewsForDelete;
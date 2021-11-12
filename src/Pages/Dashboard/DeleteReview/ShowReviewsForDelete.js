import { Button, Grid, Rating } from '@mui/material';
import { Box } from '@mui/system';
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
        <Grid item xs={12} md={3}>
            <Box style={{ height: '100%', padding: '10px', borderRadius: '5px', boxShadow: '0px 0px 41px 0px rgba(0,0,0,0.57)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Rating name="read-only" value={rating} readOnly />
                    <h5>Reviewer Name: {name}</h5>
                    <small>{review}</small>
                </Box>
                <Box>
                    <Button onClick={() => handleDelete(_id)} variant="outlined" style={button}>Delete</Button>
                </Box>
            </Box>

        </Grid>
    );
};

export default ShowReviewsForDelete;
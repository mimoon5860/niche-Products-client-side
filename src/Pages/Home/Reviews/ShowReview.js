import { Grid } from '@material-ui/core';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ShowReview = ({ revieww }) => {
    const { name, review, rating } = revieww;
    return (
        <Grid item xs={6} md={3}>
            <Box style={{ height: '100%', boxShadow: '0px 0px 41px 0px rgba(0,0,0,0.57)', textAlign: 'center', padding: '10px', borderRadius: '20px' }}>
                <h3>{name}</h3>
                <Rating name="read-only" value={rating} readOnly />
                <p>{review}</p>
            </Box>

        </Grid >
    );
};

export default ShowReview;
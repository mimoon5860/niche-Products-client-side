import { Grid } from '@material-ui/core';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ShowReview = ({ revieww }) => {
    const { name, review, rating } = revieww;
    return (
        <Grid style={{ height: '100%' }} item xs={6} md={3}>
            <Box style={{ textAlign: 'center', padding: '10px', border: '1px dotted black' }}>
                <h3>{name}</h3>
                <Rating name="read-only" value={rating} readOnly />
                <p>{review}</p>
            </Box>

        </Grid>
    );
};

export default ShowReview;
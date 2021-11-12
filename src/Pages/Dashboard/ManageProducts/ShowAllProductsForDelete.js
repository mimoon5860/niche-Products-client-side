import { Button, Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';

const ShowAllProductsForDelete = ({ product, handleDelete }) => {
    const { name, img, _id } = product;
    const button = {
        padding: '5px 15px',
        margin: '5px',
        fontWeight: 'bold',
        color: '#11A0DB',
        cursor: 'pointer'
    }
    return (
        <Grid item xs={12} md={3}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
                <img width='100px' src={img} alt="Watch" />
                <Box>
                    <p>{name}</p>
                    <Button onClick={() => handleDelete(_id)} variant="outlined" style={button}>Delete</Button>
                </Box>
            </Box>

        </Grid>

    );
};

export default ShowAllProductsForDelete;
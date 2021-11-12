import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const ShowProducts = ({ product }) => {
    const { name, brand, price, _id, img } = product;

    const card = {
        textAlign: 'center',
        backgroundColor: "#FFFFFF",
        padding: "10px",
        minHeight: "100%",
        borderRadius: '5px',
        boxShadow: '0px 0px 41px 0px rgba(0,0,0,0.57)'

    }
    return (
        <Grid item xs={12} md={4}>
            <Box style={card}>
                <Box>
                    <img width='80%' src={img} alt="Watch" />
                </Box>
                <Box>
                    <Typography variant='h6'>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        Brand: {brand}
                    </Typography>
                    <Typography variant='h6'>
                        Price: ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to={`/buyproduct/${_id}`}>
                        <Button style={{ fontWeight: 'bold', margin: '10px 0' }} variant="contained">Order Now</Button>
                    </Link>
                </Box>
            </Box>
        </Grid>
    );
};

export default ShowProducts;
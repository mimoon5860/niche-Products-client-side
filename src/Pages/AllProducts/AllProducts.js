import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import GetProducts from '../../Hooks/GetProductsApi/GetProductsApi';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import Navigation from '../../Shared/Navigation/Navigation';
import ShowProducts from '../Home/Products/ShowProducts';

const AllProducts = () => {
    const { loading, products } = GetProducts();


    return (
        <>
            <Navigation />
            <Container>
                <Box sx={{ mt: 4 }}>
                    <Typography style={{ fontWeight: 'bold', padding: '2rem 0' }} variant='h4'>
                        ALL WATCH
                        <Divider />
                    </Typography>
                    {
                        loading ?
                            <Loading />
                            :
                            <Grid container spacing={2}>
                                {
                                    products.map(product => <ShowProducts key={product._id} product={product}></ShowProducts>)
                                }
                            </Grid>
                    }
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default AllProducts;
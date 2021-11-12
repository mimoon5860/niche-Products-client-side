import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../Shared/Loading/Loading';
import Divider from '@mui/material/Divider';
import Navigation from '../../Shared/Navigation/Navigation';
import ModalForm from '../../Shared/ModalForm/ModalForm';
import Footer from '../../Shared/Footer/Footer';

const BuyProduct = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { id } = useParams();

    const detailBox = {
        boxShadow: '0px 0px 5px 3px rgba(0,0,0,0.5)',
        padding: '20px',
        borderRadius: '5px',
        marginTop: '20px'
    }

    useEffect(() => {
        const url = `https://tranquil-forest-55294.herokuapp.com/product/${id}`;
        try {
            axios.get(url)
                .then(product => {
                    setProduct(product.data);
                    setLoading(false);
                })
        } finally {
            setLoading(false);
        }
    }, [id]);

    const { name, price, img, details, brand, _id } = product;

    return (
        <div>
            <Navigation />
            {
                loading ? <Loading /> :
                    <div style={{ marginTop: '20px' }}>
                        {
                            product.name ?
                                <Container>
                                    <Grid container spacing={2}>
                                        <Grid item style={{ textAlign: 'center' }} xs={12} md={5}>
                                            <Typography >
                                                {name}
                                            </Typography>
                                            <img width='80%' src={img} alt="Watch" />
                                        </Grid>
                                        <Grid item xs={12} md={7}>
                                            <Box style={detailBox}>
                                                <Typography style={{ margin: '10px 0' }} variant='h4'>
                                                    {name}
                                                </Typography>
                                                <Typography style={{ marginTop: '20px' }} variant='subtitle1'>
                                                    Be the first to review this product
                                                </Typography>
                                                <Typography style={{ marginBottom: '20px' }} variant='subtitle1'>
                                                    <span style={{ fontWeight: 'bold' }}>Brand: </span>{brand}
                                                </Typography>
                                                <Typography style={{ color: '#EF4932', margin: '20px 0' }} variant='h5'>
                                                    ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    <span style={{ textDecoration: 'line-through', marginLeft: '20px' }}>${(price + (price * 5 / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                </Typography>
                                                <Divider />
                                                <Typography style={{ marginTop: '20px' }} variant='subtitle1'>
                                                    <span style={{ fontWeight: 'bold' }}>Warranty: </span>
                                                    {Math.floor(price / 1000)} Year Brand Warranty
                                                </Typography>
                                                <Typography style={{ marginBottom: '20px' }} variant='subtitle1'>
                                                    EMIs from
                                                    ${Math.floor(price / 12)}/Month
                                                </Typography>

                                                <Button onClick={handleOpen} style={{ fontWeight: 'bold', margin: '20px 0' }} variant="contained">Buy Now</Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item style={{ padding: '15px 10px' }} xs={12}>
                                            <Typography style={{ textAlign: 'justify' }}>
                                                <span style={{ color: '#EF4932', fontWeight: 'bold' }} >Details: </span> {details}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Container>
                                :
                                <Loading />
                        }
                    </div>
            }
            <ModalForm open={open} handleClose={handleClose} id={_id} />
            <Footer />
        </div >

    );
};

export default BuyProduct;
import { Grid, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"
import { Box } from '@mui/system';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../useContext/useAuth/useAuth';

const ShowOrders = ({ order }) => {
    const [product, setProduct] = useState({});
    const { role } = useAuth();
    const { status, name, email, address, number, productId, OrderDate } = order;


    useEffect(() => {
        axios.get(`http://localhost:5000/product/${productId}`)
            .then(res => {
                setProduct(res.data);
            })
    }, [productId])

    return (
        <Grid item xs={12} md={6}>
            <Box style={{ padding: '10px' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <img width='100px' src={product.img} alt='product img' />
                    <Box style={{ padding: '10px' }}>
                        <Typography>
                            Product Name: <Link to='/'>{product.name}</Link>
                        </Typography>
                        <Typography>
                            Order to: {name}
                        </Typography>
                        <Typography>
                            Order date: {OrderDate}
                        </Typography>
                        {
                            role.admin &&
                            <Typography>
                                Email: {email}
                            </Typography>
                        }

                    </Box>
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box style={{ padding: '10px' }}>
                        <Typography>
                            Address: {address}
                        </Typography>
                        <Typography>
                            Number: {number}
                        </Typography>
                    </Box>
                    <Box style={{ padding: '10px' }}>
                        <Box style={{ display: 'flex' }}>
                            Order Status:
                            {
                                status === 'pending'
                                    ?
                                    <Box style={{ display: 'flex', color: '#F4840C' }}>
                                        <FiberManualRecordIcon /> {status}
                                    </Box>
                                    :
                                    <Box style={{ display: 'flex', color: 'green' }}>
                                        <FiberManualRecordIcon /> {status}
                                    </Box>
                            }

                        </Box>
                        <Box style={{ display: 'flex' }}>
                            <Typography>
                                Delete
                            </Typography>
                            <DeleteIcon style={{ cursor: 'pointer' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default ShowOrders;
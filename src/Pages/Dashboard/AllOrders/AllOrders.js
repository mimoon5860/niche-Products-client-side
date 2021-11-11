import { Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowOrders from '../../../Shared/ShowOrders/ShowOrders';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/orders')
            .then(res => {
                setOrders(res.data);
            })
    }, [])

    return (
        < Box >
            <Grid container spacing={2}>
                {
                    orders.map(order => <ShowOrders key={order._id} order={order} />)
                }
            </Grid>
        </Box >
    );
};

export default AllOrders;
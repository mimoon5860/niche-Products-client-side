import { Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowOrders from '../../../Shared/ShowOrders/ShowOrders';
import useAuth from '../../../useContext/useAuth/useAuth';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => {
                setOrders(res.data);
            })
    }, [user.email])

    return (
        <Box>
            <Grid container spacing={2}>
                {
                    orders.map(order => <ShowOrders key={order._id} order={order} />)
                }
            </Grid>
        </Box>
    );
};

export default MyOrders;
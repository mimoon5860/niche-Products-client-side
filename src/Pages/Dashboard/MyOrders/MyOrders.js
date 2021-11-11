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
        axios(`https://tranquil-forest-55294.herokuapp.com/orders?email=${user.email}`)
            .then(res => {
                setOrders(res.data);
            })
    }, [user.email])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            axios.delete(`https://tranquil-forest-55294.herokuapp.com/orders/${id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.deletedCount > 0) {
                        alert('Deleted');
                        const restOrder = orders.filter(order => order._id !== id);
                        setOrders(restOrder);
                    }

                })
        }
    }
    return (
        <Box>
            <Grid container spacing={2}>
                {
                    orders.map(order => <ShowOrders handleDelete={handleDelete} key={order._id} order={order} />)
                }
            </Grid>
        </Box>
    );
};

export default MyOrders;
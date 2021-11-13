import { Grid } from '@material-ui/core';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowOrders from '../../../Shared/ShowOrders/ShowOrders';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios('https://tranquil-forest-55294.herokuapp.com/orders')
            .then(res => {
                setOrders(res.data);
            })
    }, [])

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

    const handleUpdate = (id, newStatus) => {
        axios.put(`https://tranquil-forest-55294.herokuapp.com/orders/${id}`, { status: newStatus })
            .then(res => {
                console.log(res.data);
                alert('Updated');
            })
    }


    return (
        <Box>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
                Manage Orders
                <Divider />
            </h1>
            <Grid container spacing={2}>
                {
                    orders.map(order => <ShowOrders handleUpdate={handleUpdate} handleDelete={handleDelete} key={order._id} order={order} />)
                }
            </Grid>
        </Box>
    );
};

export default AllOrders;
import { Grid } from '@material-ui/core';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import Loading from '../../../Shared/Loading/Loading'
import React, { useEffect, useState } from 'react';
import ShowOrders from '../../../Shared/ShowOrders/ShowOrders';
import useAuth from '../../../useContext/useAuth/useAuth';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        axios(`https://tranquil-forest-55294.herokuapp.com/orders?email=${user.email}`)
            .then(res => {
                setOrders(res.data);
                setLoad(false);
            }).finally(() => {
                setLoad(false);
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
        <Box style={{ marginBottom: '110px' }}>
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
                My Order's
                <Divider />
            </h1>
            {
                load ?
                    <Loading />
                    :
                    <>
                        {
                            orders.length > 0 ?
                                <Grid container spacing={2}>
                                    {
                                        orders.map(order => <ShowOrders handleDelete={handleDelete} key={order._id} order={order} />)
                                    }
                                </Grid>
                                :
                                <h1 style={{ textAlign: 'center', color: 'red', marginTop: '10rem' }}>You dont have any order...</h1>

                        }
                    </>
            }


        </Box>
    );
};

export default MyOrders;
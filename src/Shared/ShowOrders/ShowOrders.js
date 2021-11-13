import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"
import { Box } from '@mui/system';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteIcon from '@mui/icons-material/Delete';
import PendingIcon from '@mui/icons-material/Pending';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../useContext/useAuth/useAuth';

const ShowOrders = ({ order, handleDelete, handleUpdate }) => {
    const [product, setProduct] = useState({});
    const { role } = useAuth();
    const { _id, status, name, email, address, number, productId, OrderDate } = order;
    const [newStatus, setNewStatus] = useState(status);

    const handleStatus = () => {
        if (newStatus) {
            setNewStatus(false);
            handleUpdate(_id, false);
        } else {
            setNewStatus(true);
            handleUpdate(_id, true);
        }
    }



    useEffect(() => {
        axios.get(`https://tranquil-forest-55294.herokuapp.com/product/${productId}`)
            .then(res => {
                setProduct(res.data);
            })
    }, [productId])

    return (
        <Grid item xs={12} md={6}>
            <Box style={{ padding: '5px', borderRadius: '5px', boxShadow: '0px 0px 41px 0px rgba(0,0,0,0.57)' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <img width='100px' src={product.img} alt='product img' />
                    <Box style={{ padding: '10px' }}>
                        <Typography>
                            Product Name: <Link to={`/buyproduct/${productId}`}>{product.name}</Link>
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
                        <Box style={{ display: 'flex' }}>
                            Order Status:
                            {
                                newStatus
                                    ?
                                    <Box style={{ display: 'flex', color: 'green' }}>
                                        <FiberManualRecordIcon /> Shipped
                                    </Box>
                                    :
                                    <Box style={{ display: 'flex', color: '#F4840C' }}>
                                        <FiberManualRecordIcon /> Pending
                                    </Box>
                            }
                        </Box>
                        <Typography>
                            Address: {address}
                        </Typography>
                        <Typography>
                            Number: {number}
                        </Typography>
                    </Box>
                    <Box style={{ padding: '10px' }}>

                        <Button onClick={() => handleDelete(_id)} variant="outlined" style={{ display: 'flex' }}>
                            Delete <DeleteIcon />
                        </Button>
                        {
                            role.admin
                            &&

                            <>
                                {
                                    newStatus
                                        ?
                                        <Button onClick={handleStatus} variant="outlined" style={{ marginTop: '10px', display: 'flex' }}>
                                            Make pending <PendingIcon />
                                        </Button>
                                        :
                                        <Button onClick={handleStatus} variant="outlined" style={{ marginTop: '10px', display: 'flex' }}>
                                            Make shipped <LocalShippingIcon />
                                        </Button>
                                }
                            </>
                        }
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default ShowOrders;
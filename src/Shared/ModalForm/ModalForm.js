import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { TextField } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import Loading from '../Loading/Loading';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Alert } from '@mui/material';
import useAuth from '../../useContext/useAuth/useAuth';


const ModalForm = ({ open, handleClose, id }) => {
    const { register, handleSubmit, reset } = useForm();
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const { user } = useAuth();

    const onSubmit = (data) => {
        setVerifyLoading(true);
        const date = new Date();
        const orderInfo = { ...data, productId: id, OrderDate: date.toLocaleDateString(), status: false }

        axios.post('https://tranquil-forest-55294.herokuapp.com/orders', orderInfo)
            .then(res => {
                if (res.data.insertedId) {
                    setVerifyLoading(false);
                    setOrderSuccess(true);
                    reset();
                }
            })

    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '20rem',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        border: '1px solid #000',
        borderRadius: '5px',
        boxShadow: 24,
        padding: "10px 20px",
    };
    const inputField = {
        width: '100%',
        marginBottom: '10px'
    }
    const button = {
        padding: '10px 25px',
        margin: '20px 5px',
        fontWeight: 'bold',
        color: '#11A0DB',
        cursor: 'pointer'
    }

    const closeModal = () => {
        setOrderSuccess(false);
        handleClose();
    }
    return (
        <Modal
            open={open}
            onClose={closeModal}
        >
            <Box justify="center" style={style}>
                <CloseIcon onClick={closeModal} style={{ marginLeft: '16rem', cursor: 'pointer' }} />
                {
                    orderSuccess
                        ?
                        <Box>

                            <Alert severity="success">Your Order Placed Successful!</Alert>
                        </Box>
                        :
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField required style={inputField} type='text' {...register("name")} id="standard-basic" label="Name" variant="standard" />
                            <TextField required value={user.email} style={inputField} type='email' {...register("email")} id="standard-basic" label="Email" variant="standard" />
                            <TextField required style={inputField} type='text' {...register("number")} id="standard-basic" label="Number" variant="standard" />
                            <TextField required style={inputField} type='text' {...register("address")} id="standard-basic" label="Address" variant="standard" />
                            <br />
                            {
                                verifyLoading ? <Loading />
                                    :
                                    <input style={button} type="submit" value="Place Order" />
                            }
                        </form>
                }

            </Box>

        </Modal >
    );
};

export default ModalForm;
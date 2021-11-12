import { Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import useAuth from '../../../useContext/useAuth/useAuth';

const AdminPanel = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [email, setEmail] = useState('');

    const onSubmit = (data) => {
        setEmail(data.email);
        if (data.confirm === 'confirm') {
            handleOpen();
            reset();
        }
    };

    const inputField = {
        width: '100%',
        marginBottom: '10px'
    }
    const form = {
        boxShadow: '0px 0px 5px 3px rgba(0,0,0,0.75)',
        borderRadius: '5px',
        padding: '2rem',
        margin: '0 auto'
    }
    const button = {
        padding: '10px 25px',
        margin: '20px 5px',
        fontWeight: 'bold',
        color: '#11A0DB',
        cursor: 'pointer'
    }

    return (
        <Box>
            <Typography variant='h4'>
                Hi, {user.displayName}
            </Typography>
            <Divider />
            <Typography style={{ textAlign: 'center', margin: '3rem 0' }} variant='h6'>
                You can Add any user to admin from here
            </Typography>
            <Grid container spacing={2}>
                <Grid sx={{ mx: 'auto' }} style={form} item xs={12} md={4}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField required style={inputField} type='email' {...register("email")} id="standard-basic" label="Email" variant="standard" />
                        <TextField required style={inputField} type='text' {...register("confirm")} id="standard-basic" label="Type 'confirm'" variant="standard" />
                        <br />
                        <small>
                            You have to type 'confirm' here to make an admin.
                        </small>
                        <br />
                        <input style={button} type="submit" value="Make Admin" />
                    </form>
                </Grid>
            </Grid>
            <ConfirmationModal open={open} handleClose={handleClose} adminWillEmail={email} />
        </Box>
    );
};

export default AdminPanel;
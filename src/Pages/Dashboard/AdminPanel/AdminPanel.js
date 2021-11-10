import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../Shared/Loading/Loading';
import useAuth from '../../../useContext/useAuth/useAuth';

const AdminPanel = () => {
    const { user } = useAuth();
    const [verifyLoading, setVerifyLoading] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    const inputField = {
        width: '100%',
        marginBottom: '10px'
    }
    const form = {
        boxShadow: '0px 0px 5px 3px rgba(0,0,0,0.75)',
        borderRadius: '5px',
        marginTop: '4rem',
        padding: '2rem'
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
            <Grid container spacing={2}>
                <Grid sx={{ mx: 'auto' }} style={form} item xs={12} md={4}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField required style={inputField} type='email' {...register("email")} id="standard-basic" label="Email" variant="standard" />
                        <TextField required style={inputField} type='password' {...register("confirm")} id="standard-basic" label="Type 'confirm'" variant="standard" />
                        <br />
                        {
                            verifyLoading ? <Loading />
                                :
                                <input style={button} type="submit" value="Make Admin" />
                        }

                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AdminPanel;
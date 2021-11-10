import { Button, Container, Grid, Typography } from '@material-ui/core';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import { useForm } from "react-hook-form";
import Navigation from '../../Shared/Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../useContext/useAuth/useAuth';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { error, googleSignIn, emailSignUp, setError } = useAuth();
    const [verifyLoading, setVerifyLoading] = useState(false);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        emailSignUp(data.email, data.password, data.name, from, setVerifyLoading);
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
        <>
            <Navigation />
            <Container>
                <Grid container justify="center" spacing={2}>
                    <Grid style={form} item xs={12} md={4}>
                        <Typography style={{ marginBottom: '20px', fontWeight: 'bold' }} variant='h4'>
                            Sign up
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField required style={inputField} type='text' {...register("name")} id="standard-basic" label="Name" variant="standard" />
                            <TextField required style={inputField} type='email' {...register("email")} id="standard-basic" label="Email" variant="standard" />
                            <TextField required style={inputField} type='password' {...register("password")} id="standard-basic" label="Password" variant="standard" />
                            <br />
                            {
                                verifyLoading ? <Loading />
                                    :
                                    <input style={button} type="submit" value="Sign up" />
                            }
                        </form>
                        <Typography style={{ color: 'red', display: 'inline', marginBottom: '10px' }}>
                            {error}
                        </Typography>
                        <Box>
                            <Link style={{ textDecoration: 'none' }} to='/login'>
                                <Button onClick={() => setError('')} variant="outlined" style={{ margin: '5px', fontWeight: 'bold', color: '#11A0DB' }}><LoginIcon /> Login</Button>
                            </Link>
                            <Button onClick={() => googleSignIn(from)} variant="outlined" style={{ margin: '5px', fontWeight: 'bold', color: '#E94235' }}> <GoogleIcon /> Login With Google</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;
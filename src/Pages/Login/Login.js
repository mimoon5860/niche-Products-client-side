import { Button, Container, Grid, Typography } from '@material-ui/core';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useForm } from "react-hook-form";
import Navigation from '../../Shared/Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../useContext/useAuth/useAuth';
import Loading from '../../Shared/Loading/Loading';
import Footer from '../../Shared/Footer/Footer';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const { user, googleSignIn, error, loginWithEmail, setError } = useAuth();
    const [verifyLoading, setVerifyLoading] = useState(false);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    const onSubmit = (data) => {
        setVerifyLoading(true);
        loginWithEmail(data.email, data.password, from, setVerifyLoading);
    };

    const inputField = {
        width: '100%',
        marginBottom: '10px'
    }
    const form = {
        boxShadow: '0px 0px 5px 3px rgba(0,0,0,0.75)',
        borderRadius: '5px',
        margin: '6rem 0',
        padding: '2rem'
    }
    const button = {
        padding: '10px 25px',
        margin: '20px 5px',
        fontWeight: 'bold',
        color: '#11A0DB',
        cursor: 'pointer'
    }

    console.log(user)
    return (
        <>
            <Navigation />
            <Container>
                <Grid container justify="center" spacing={2}>
                    <Grid style={form} item xs={12} md={4}>
                        <Box>
                            <Typography style={{ marginBottom: '20px', fontWeight: 'bold' }} variant='h4'>
                                Login
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField required style={inputField} type='email' {...register("email")} id="standard-basic" label="Email" variant="standard" />
                                <TextField required style={inputField} type='password' {...register("password")} id="standard-basic" label="Password" variant="standard" />
                                <br />
                                {
                                    verifyLoading ? <Loading />
                                        :
                                        <input style={button} type="submit" value="Login" />
                                }

                            </form>
                            <Typography style={{ marginBottom: '10px', color: 'red', display: 'inline' }}>
                                {error}
                            </Typography>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} to='/register'>
                                    <Button onClick={() => setError('')} on variant="outlined" style={{ margin: '5px', fontWeight: 'bold', color: '#11A0DB' }}> <VpnKeyIcon /> Sign Up</Button>
                                </Link>
                                <Button onClick={() => googleSignIn(from, setVerifyLoading)} variant="outlined" style={{ margin: '5px', fontWeight: 'bold', color: '#E94235' }}> <GoogleIcon /> Login With Google</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Login;
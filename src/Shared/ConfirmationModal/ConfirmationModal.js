import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Loading from '../Loading/Loading';
import axios from 'axios';
import { Alert, Typography } from '@mui/material';
import useAuth from '../../useContext/useAuth/useAuth';

const ConfirmationModal = ({ open, handleClose, adminWillEmail }) => {
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const { user } = useAuth();
    const [error, setError] = useState('');

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
    const button = {
        padding: '10px 25px',
        margin: '20px 5px',
        fontWeight: 'bold',
        color: '#11A0DB',
        cursor: 'pointer'
    }

    const confirmYes = () => {
        setVerifyLoading(true);
        setError('');
        const adminWill = { newAdmin: adminWillEmail, admin: user.email };
        axios.put('https://tranquil-forest-55294.herokuapp.com/user/admin', adminWill)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setOrderSuccess(true);
                    setError('');
                } else {
                    setError("Sorry Something is Wrong, Try Again later.")
                }
                console.log(res.data);
            }).finally(() => {
                setVerifyLoading(false);
            })

    }
    const confirmNo = () => {
        handleClose();
        setError('');
    }

    const closeModal = () => {
        setOrderSuccess(false);
        handleClose();
        setError('');
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

                            <Alert severity="success">Admin Made Successfully!</Alert>
                        </Box>
                        :
                        <form >
                            <Typography>
                                Are You Sure?
                            </Typography>
                            {
                                verifyLoading ? <Loading />
                                    :
                                    <Box>
                                        <button style={button} onClick={confirmYes} >Yes</button>
                                        <button style={button} onClick={confirmNo} >No</button>
                                    </Box>
                            }
                            <Typography style={{ color: 'red' }}>
                                {error}
                            </Typography>
                        </form>
                }

            </Box>

        </Modal >
    );
};

export default ConfirmationModal;
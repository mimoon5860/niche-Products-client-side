import { Container, Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../useContext/useAuth/useAuth';

const DashBoardContent = () => {
    const { user, role } = useAuth();
    return (
        <div>
            <h1>Hello, {user.displayName}</h1>
            <h3>Welcome to dashboard</h3>
            <br />
            <Divider />
            <Container>
                <Box sx={{ m: 2 }}>
                    <h3>Your Email: {user.email}</h3>
                    <Box sx={{ mb: 4 }}>
                        {
                            role.admin ?
                                <div style={{ margin: '10px', padding: '5px' }}>
                                    <h2>You are an Admin</h2>
                                    <Divider />
                                    <ul style={{ margin: "30px 10px" }}>
                                        <li>You can delete and change status of any order.</li>
                                        <li>You can add and delete any product.</li>
                                        <li>You can add and delete users review.</li>
                                        <li>You can add any user to Admin.</li>
                                    </ul>
                                </div>
                                :
                                <div style={{ margin: '10px', padding: '5px' }}>
                                    <h2>Thank you for using our website</h2>
                                    <Divider />
                                    <ul style={{ margin: "30px 10px" }}>
                                        <li>You can give us a review.</li>
                                        <li>You can order any product.</li>
                                        <li>You can delete any order.</li>
                                    </ul>
                                </div>
                        }
                    </Box>
                </Box >
            </Container>
        </div >
    );
};

export default DashBoardContent;
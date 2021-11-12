import { Button, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

const Subscribe = () => {
    return (
        <div>
            <Container>
                <Box style={{ borderRadius: '10px', padding: '10px', margin: '50px 0', textAlign: 'center', boxShadow: ' 0px 0px 19px 0px rgba(0,0,0,0.66)' }}>
                    <MarkEmailUnreadIcon style={{ fontSize: '150px', color: '#7265EA' }} />
                    <h1>Subscribe To Our Newsletter</h1>
                    <p>Join our subscribers to get all offers, new products and every event alert of our website directly to your inbox.</p>
                    <TextField sx={{ my: 2, color: '#7265EA' }} label="Your Email" variant="filled" focused />
                    <br />
                    <Button variant="contained">Subscribe</Button>
                </Box>
            </Container>
        </div>
    );
};

export default Subscribe;
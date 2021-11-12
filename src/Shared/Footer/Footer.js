import { Container, Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import footerbg from '../../images/footer_contact_bg.jpg'

const Footer = () => {
    const footerContact = {
        background: `url(${footerbg})`,
        backgroundSize: 'cover',
        marginTop: '2rem',
        color: 'white'

    }
    return (
        <Box style={footerContact}>
            <Container>
                <Grid style={{ padding: '15px 0' }} container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOnIcon />
                            <div style={{ paddingLeft: '10px' }}>
                                <p>700 Airport Blvd, Suite 450</p>
                                <p>Burlingame, CA 94010 USA</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <CallIcon />
                            <div style={{ paddingLeft: '10px' }}>
                                <p>International +1 650-249-XXXX</p>
                                <p> Weekdays 9:00-17:00 PST</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <SmsIcon />
                            <p style={{ paddingLeft: '10px' }}>sales@timestyle.com</p>
                        </div>
                    </Grid>
                </Grid>
                <Grid style={{ padding: '5px' }} container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ paddingLeft: '10px', marginTop: '20px' }}>
                                <p>Copyright &copy; 2021 Time Style. All Rights Reserved.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ paddingLeft: '10px' }}>
                                <Link style={{ color: 'white' }} to='/'>Privacy Policy</Link>
                                <br />
                                <Link style={{ color: 'white' }} to='/'>Terms and Conditions</Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ paddingLeft: '10px' }}>
                                <Link style={{ color: 'white' }} to='/'>Warranty Policy</Link>
                                <br />
                                <Link style={{ color: 'white' }} to='/'>Terms of Sale</Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
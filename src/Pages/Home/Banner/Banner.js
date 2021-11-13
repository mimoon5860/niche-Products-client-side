import { Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bgCover from '../../../images/Banner_watches.jpg'

const Banner = () => {
    const bannerBg = {
        background: `url(${bgCover})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'darken, luminosity',
        color: 'white',
        paddingTop: '5rem'

    }

    const button = {
        padding: '10px 30px',
        backgroundColor: 'black',
        fontFamily: "'Cinzel', serif",
        color: 'white',
        fontSize: '2rem',
        borderRadius: '5px',
        textDecoration: 'none',
        boxShadow: '0px 0px 13px 3px rgba(255,255,255,0.86)'
    }
    return (
        <div style={bannerBg}>
            <Container>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pt: 6, textAlign: 'center' }}>
                            <Typography style={{ fontFamily: "'Satisfy', cursive", fontWeight: 'bold' }} variant='h2'>Time Style</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pb: 6, textAlign: 'center' }}>
                            <Typography style={{ fontFamily: "'Cinzel', serif" }} variant="h4">Find your dream watch on the leading marketplace for luxury watches.</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={6} >
                        <Box sx={{ pb: 6, textAlign: 'center' }}>
                            <Link style={button} to='/allproducts'>Explore</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Banner;
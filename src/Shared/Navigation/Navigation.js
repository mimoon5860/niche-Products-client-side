import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
    Container,
} from "@material-ui/core";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DrawerComponent from "./NavDrawer";
import useAuth from "../../useContext/useAuth/useAuth";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
        alignItems: 'center'
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        border: '1px solid transparent',
        background: 'none',
        color: "white",
        cursor: 'pointer',
        fontSize: "20px",
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));


const Navigation = () => {
    const { user, logOut } = useAuth();
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <AppBar style={{ background: '#050607' }} position="static">
            <Container>
                <CssBaseline />
                <Toolbar>
                    <Typography style={{ fontFamily: "'Satisfy', cursive", fontWeight: 'bold' }} variant="h4" className={classes.logo}>
                        Time Style
                    </Typography>
                    {
                        isMobile ? (
                            <DrawerComponent />
                        ) : (
                            <div className={classes.navlinks}>
                                {
                                    user.email
                                    &&
                                    <Typography>Hi, {user.displayName}</Typography>
                                }
                                <Link to="/" className={classes.link}>
                                    Home
                                </Link>
                                <Link to="/allproducts" className={classes.link}>
                                    All Products
                                </Link>
                                {
                                    user.email
                                    &&
                                    <Link to="/dashboard" className={classes.link}>
                                        Dashboard
                                    </Link>
                                }

                                {
                                    user.email
                                        ?
                                        <button style={{ display: 'flex', alignItems: 'center' }} className={classes.link} onClick={logOut}><LogoutIcon /> Logout</button>
                                        :

                                        <>
                                            <Link style={{ display: 'flex', alignItems: 'center' }} to="/register" className={classes.link}>
                                                <VpnKeyIcon /> Register
                                            </Link>
                                            <Link style={{ display: 'flex', alignItems: 'center' }} to="/login" className={classes.link}>
                                                <LoginIcon /> Login
                                            </Link>
                                        </>
                                }

                            </div>
                        )}
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default Navigation;
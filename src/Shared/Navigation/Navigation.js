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
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DrawerComponent from "./NavDrawer";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginRight: theme.spacing(5),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));


const Navigation = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <AppBar position="static">
            <Container>
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        Navbar
                    </Typography>
                    {isMobile ? (
                        <DrawerComponent />
                    ) : (
                        <div className={classes.navlinks}>
                            <HomeIcon />
                            <Link to="/" className={classes.link}>
                                Home
                            </Link>
                            <ShoppingBasketIcon />
                            <Link to="/allproducts" className={classes.link}>
                                All Products
                            </Link>
                            <DashboardIcon />
                            <Link to="/dashboard" className={classes.link}>
                                Dashboard
                            </Link>
                            <LoginIcon />
                            <Link to="/login" className={classes.link}>
                                Login
                            </Link>
                        </div>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;
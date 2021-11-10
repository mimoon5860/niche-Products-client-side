import React, { useState } from "react";
import {
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@material-ui/core";
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import ReviewsIcon from '@mui/icons-material/Reviews';
import useAuth from "../../useContext/useAuth/useAuth";


const link = {
    textDecoration: "none",
    color: "black"
}

const NavDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { user, logOut } = useAuth();
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Typography style={{ fontFamily: "'Satisfy', cursive", textAlign: 'center', margin: '20px 0' }} variant='h4'>
                    Time Style
                </Typography>
                {
                    user.email
                    &&
                    <Typography style={{ textAlign: 'center' }} variant='subtitle1'>Hi <br /> {user.displayName}</Typography>
                }
                <Divider />
                <List>
                    <Link style={link} to='/'>
                        <ListItem button >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                    </Link>

                    {
                        user.email
                        &&
                        <Link style={link} to='/dashboard'>
                            <ListItem button >
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Dashboard"} />
                            </ListItem>
                        </Link>
                    }

                    <Link style={link} to='/allproducts'>
                        <ListItem button >
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary={"All Products"} />
                        </ListItem>
                    </Link>

                    {
                        !user.email
                        &&
                        <Link style={link} to='/login'>
                            <ListItem button >
                                <ListItemIcon>
                                    <LoginIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Login"} />
                            </ListItem>
                        </Link>
                    }

                    <Divider />
                    {
                        user.email && <Button onClick={logOut} > <LogoutIcon /> Logout</Button>
                    }

                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon style={{ color: 'white' }} />
            </IconButton>
        </>
    );
};

export default NavDrawer;
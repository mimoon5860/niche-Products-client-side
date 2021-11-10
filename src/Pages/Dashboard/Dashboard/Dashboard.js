import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import List from '@mui/material/List';
import PaymentIcon from '@mui/icons-material/Payment';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes } from 'react-router';
import AdminPanel from '../AdminPanel/AdminPanel';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import Payments from '../Payments/Payments';
import Reviews from '../Reviews/Reviews';
import AllOrders from '../AllOrders/AllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 200;

const link = {
    textDecoration: "none",
    color: "black"
}

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
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
                <Link style={link} to='/dashboard/'>
                    <ListItem button >
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"My Order"} />
                    </ListItem>
                </Link>
                <Link style={link} to='/dashboard/payments'>
                    <ListItem button >
                        <ListItemIcon>
                            <PaymentIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Pay"} />
                    </ListItem>
                </Link>
                <Link style={link} to='/dashboard/review'>
                    <ListItem button >
                        <ListItemIcon>
                            <ReviewsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Review"} />
                    </ListItem>
                </Link>
                <Divider />
                <Link style={link} to='/dashboard/allorder'>
                    <ListItem button >
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Manage All Order"} />
                    </ListItem>
                </Link>
                <Link style={link} to='/dashboard/manageproducts'>
                    <ListItem button >
                        <ListItemIcon>
                            <AddBusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Manage Products"} />
                    </ListItem>
                </Link>
                <Link style={link} to='/dashboard/admin'>
                    <ListItem button >
                        <ListItemIcon>
                            <ManageAccountsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Make Admin"} />
                    </ListItem>
                </Link>
                <Divider />
                <Button sx={{ ml: 6, my: 2, fontWeight: "bold" }}> <LogoutIcon /> Logout</Button>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Routes>
                    <Route path="/*" element={<MyOrders />} />
                    <Route path="manage" element={<MyOrders />} />
                    <Route path="payments" element={<Payments />} />
                    <Route path="review" element={<Reviews />} />
                    <Route path="allorder" element={<AllOrders />} />
                    <Route path="manageproducts" element={<ManageProducts />} />
                    <Route path="admin" element={<AdminPanel />} />
                </Routes>
            </Box>
        </Box>
    );
}


export default Dashboard;





/* <Routes>
    <Route path="/" element={<DashboardContent />} />
    <Route path="admin" element={<AdminPanel />} />
</Routes>

<List>
                <Link style={link} to='/'>
                    <ListItem button >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                </Link>
                <Link style={link} to='/dashboard'>
                    <ListItem button >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Dashboard"} />
                    </ListItem>
                </Link>
                <Link style={link} to='/dashboard/admin'>
                    <ListItem button >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Admin"} />
                    </ListItem>
                </Link>
            </List> */
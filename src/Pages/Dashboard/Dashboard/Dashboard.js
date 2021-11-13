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
import RateReviewIcon from '@mui/icons-material/RateReview';
import PropTypes from 'prop-types';
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
import AllOrders from '../AllOrders/AllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../useContext/useAuth/useAuth';
import DashBoardContent from '../DashBoardContent/DashBoardContent';
import AdminRoute from '../../../Shared/AdminRoute/AdminRoute';
import AddReview from '../AddReview/AddReview';
import DeleteReview from '../DeleteReview/DeleteReview';
import Footer from '../../../Shared/Footer/Footer';

const drawerWidth = 200;

const linkStyle = {
    textDecoration: "none",
    color: "black"
}

function Dashboard(props) {
    const { role, logOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Typography style={{ fontFamily: "'Satisfy', cursive", textAlign: 'center', margin: '20px 0' }} variant='h4'>
                Time Style
            </Typography>
            <Divider />
            <List>
                <Link style={linkStyle} to='/'>
                    <ListItem button >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                </Link>

                {
                    role.admin
                        ?
                        <Box>
                            <Link style={linkStyle} to='/dashboard/allorder'>
                                <ListItem button >
                                    <ListItemIcon>
                                        <ShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Manage All Order"} />
                                </ListItem>
                            </Link>
                            <Link style={linkStyle} to='/dashboard/manageproducts'>
                                <ListItem button >
                                    <ListItemIcon>
                                        <AddBusinessIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Manage Products"} />
                                </ListItem>
                            </Link>
                            <Link style={linkStyle} to='/dashboard/deletereview'>
                                <ListItem button >
                                    <ListItemIcon>
                                        <RateReviewIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Delete review"} />
                                </ListItem>
                            </Link>
                            <Link style={linkStyle} to='/dashboard/admin'>
                                <ListItem button >
                                    <ListItemIcon>
                                        <ManageAccountsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Make Admin"} />
                                </ListItem>
                            </Link>
                        </Box>
                        :
                        <Box>
                            <Link style={linkStyle} to='/dashboard/myorder'>
                                <ListItem button >
                                    <ListItemIcon>
                                        <ShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"My Order"} />
                                </ListItem>
                            </Link>
                            <Link style={linkStyle} to='/dashboard/payments'>
                                <ListItem button >
                                    <ListItemIcon>
                                        <PaymentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Pay"} />
                                </ListItem>
                            </Link>
                            <Link style={linkStyle} to='/dashboard/review'>
                                <ListItem button >
                                    <ListItemIcon>
                                        <ReviewsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Review"} />
                                </ListItem>
                            </Link>
                        </Box>
                }
                <Divider />
                <Divider />
                <Button onClick={logOut} sx={{ mx: 6, my: 2, fontWeight: "bold" }}> <LogoutIcon /> Logout
                </Button>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    {/* Responsive */}
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 4, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <h3>Dashboard</h3>
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
                        <Route index element={<DashBoardContent />} />
                        <Route path="myorder" element={<MyOrders />} />
                        <Route path="payments" element={<Payments />} />
                        <Route path="review" element={<AddReview />} />
                        <Route path="deletereview" element={<AdminRoute><DeleteReview /></AdminRoute>} />
                        <Route path="allorder" element={<AdminRoute><AllOrders /></AdminRoute>} />
                        <Route path="manageproducts" element={<AdminRoute><ManageProducts /></AdminRoute>} />
                        <Route path="admin" element={<AdminRoute><AdminPanel /></AdminRoute>} />
                    </Routes>
                </Box>
            </Box>
            <Box ml={{ sx: '0', md: "150px" }} mt={{ sx: '150px', md: '150px' }}>
                <Footer />
            </Box>
        </>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;

import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../useContext/useAuth/useAuth';
import Loading from '../Loading/Loading';

const AdminRoute = ({ children }) => {
    const { role, adminLoading } = useAuth();
    const location = useLocation();

    if (adminLoading) {
        return <Loading></Loading>
    }
    if (!role.admin) {
        return <Navigate to="/dashboard" state={{ from: location }} />;
    }
    return children;
};

export default AdminRoute;
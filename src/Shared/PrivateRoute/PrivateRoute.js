import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../useContext/useAuth/useAuth';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
};

export default PrivateRoute;
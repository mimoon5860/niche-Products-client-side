import React from 'react';
import useAuth from '../../../useContext/useAuth/useAuth';

const DashBoardContent = () => {
    const { user } = useAuth();
    return (
        <div>
            <h3>Hello, {user.displayName}</h3>
        </div>
    );
};

export default DashBoardContent;
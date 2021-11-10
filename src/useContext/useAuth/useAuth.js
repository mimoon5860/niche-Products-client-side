import { useContext } from 'react';
import { AuthContext } from '../AuthProvidor/AuthProvidor';

const useAuth = () => {
    const auth = useContext(AuthContext);

    return auth;
}

export default useAuth;
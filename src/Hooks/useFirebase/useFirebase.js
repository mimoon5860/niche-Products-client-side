import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import initAuth from "../Firebase/firebase.init";

initAuth();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [adminLoading, setAdminLoading] = useState(true);
    const [role, setRole] = useState({});
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();


    // Google Sign In Setup 
    const googleSignIn = (from, setVerifyLoading) => {
        setLoading(true);
        setVerifyLoading(true);
        setError('');
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                const newUser = { displayName: user.displayName, email: user.email };
                sendGoogleUserDb(newUser);
                navigate(from, { replace: true });
            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setLoading(false);
                setVerifyLoading(false);
            });
    }


    // Email Register Setup 
    const emailSignUp = (email, password, name, from, setVerifyLoading) => {
        setLoading(true);
        setVerifyLoading(true);
        setError('');
        if (password.length < 6) {
            setError('Password Must be six length');
            setLoading(false);
            setVerifyLoading(false);
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const newUser = { ...userCredential.user, displayName: name }
                    setUser(newUser);
                    sendUserDb({ displayName: name, email });
                    navigate(from, { replace: true });
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                        // Profile updated!
                    }).catch((error) => {
                        // An error occurred
                    });
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                    setVerifyLoading(false);
                });
        }

    }

    // Login with email pass user 
    const loginWithEmail = (email, password, from, setVerifyLoading) => {
        setLoading(true);
        setVerifyLoading(true);
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                navigate(from, { replace: true });
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => {
                setLoading(false);
                setVerifyLoading(false);
            });
    }

    // State change get user 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser({});
                setLoading(false);
            }
        });
    }, [])


    // Get Admin from database 
    useEffect(() => {
        setAdminLoading(true);
        axios.get(`https://tranquil-forest-55294.herokuapp.com/user/${user.email}`)
            .then(res => {
                setRole(res.data);
                setAdminLoading(false);
            }).finally(() => {
                setAdminLoading(false);
            })
    }, [user.email])


    // Logout user 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {

        });
    }


    // Post user data to database 
    const sendUserDb = (user) => {
        axios.post('https://tranquil-forest-55294.herokuapp.com/user', user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // put user data to database 
    const sendGoogleUserDb = (user) => {
        axios.put('https://tranquil-forest-55294.herokuapp.com/user', user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return {
        googleSignIn,
        user,
        error,
        logOut,
        emailSignUp,
        loginWithEmail,
        loading,
        adminLoading,
        role,
        setError
    }
}

export default useFirebase;
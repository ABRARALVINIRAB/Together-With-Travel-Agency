import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.initialize";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    //email
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const toggleLogin = e => {
        setIsLogin(e)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {

        e.preventDefault();
        console.log('reg handle', email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        // if (isLogin) {
        //     processLogin(email, password);
        // }
        else {
            registerNewUser(email, password);
        }

    }



    // const processLogin = (email, password) => {
    //     console.log('processlogin', email)
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             // const user = result.user;
    //             setUser(result.user)
    //             setError('');
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //         })
    // }
    const processLogin = (email, password) => {
        console.log('processlogin')
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    //

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        console.log('log in Ggl');
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false)); //
    }


    const logOut = () => {
        console.log('log out');
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        })
    }, []);

    return {
        user,
        setUser,
        email,
        password,
        error,
        setError,
        isLoading,
        signInUsingGoogle,
        logOut,
        isLogin,
        processLogin,
        toggleLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration
    }
}

export default useFirebase;
import initAuthentication from "../../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        })
    },[])

    return { googleSignIn, logOut, setUser, setError, setLoading, user, error, loading };
}

export default useFirebase;
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState();   // after googleLogin then current user check
    const [loading,setLoading] = useState(true);
    // Create User
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    // Create User

    // SignIn
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
      // SignIn End
    // Logout Start 
    const logOut = () =>{
        signOut(auth);
    }

    // Logout End
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    // after googleLogin then current user check

    useEffect(()=>{
        // eslint-disable-next-line no-unused-vars
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser)
        
            }else{
                setLoading(false);
            }
        })
    },[])
 // after googleLogin then current user check

    const authInfo = {user,googleLogin,createUser,signIn,logOut,loading};
    

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
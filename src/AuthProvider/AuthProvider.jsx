import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // const [user,setUser] = useState();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const authInfo = {googleLogin};
    console.log(authInfo);

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
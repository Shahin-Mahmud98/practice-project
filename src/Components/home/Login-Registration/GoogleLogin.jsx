import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";

const GoogleLogin = () => {
    
    const {googleLogin} = useAuth();

    const handleGoogleLogin = () =>{
        googleLogin();
    }
    return (
        <div>
         <button onClick={handleGoogleLogin} className="btn w-full">
            <FcGoogle size={24}>
              
            </FcGoogle>
            <p>  Google</p>
            </button>   
        </div>
    );
};

export default GoogleLogin;
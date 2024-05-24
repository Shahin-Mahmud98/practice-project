import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadingSpineer from "../../Components/LoadingSpineer";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
   const {user,loading} = useAuth();
   const location = useLocation();
   if (loading) {
      return <LoadingSpineer/>
   }

    if (user) {
       return children; 
    }


    return <Navigate to={'/login'} state={{from:location}} replace />

};

export default PrivateRoute;
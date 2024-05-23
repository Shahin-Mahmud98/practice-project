import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayouts = () => {
    return (
        <div>
           <Navbar/>
        
         
         <div>
         <Outlet/>
         </div>
    
       
           <Footer/>
        </div>
       
    );
};

export default MainLayouts;
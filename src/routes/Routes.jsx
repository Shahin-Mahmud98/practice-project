import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Blog from "../Pages/Blog";
import Catagories from "../Pages/Catagories";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts/>,
        errorElement:<ErrorPage/>,
        children:[
            {
            path:'/',
            element:<Home/>
        },
            {
            path:'/about',
            element:<About/>
        },
            {
            path:'/blog',
            element:<Blog/>
        },
            {
            path:'/catagories',
            element:<Catagories/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        

    ]

    },
    // 2nd Object
    {
        path:'dashboard',
        element:<DashboardLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'',
                element:(<Dashboard/>)
                // note porbortite private route kore dashboard ke private router moddhe dite hobe
        }
    ]
    }
])
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
import PrivateRoute from "./private/PrivateRoute";
import ProductsDetails from "../Pages/ProductsDetails";
import AllProducts from "../Pages/AllProducts";
import AddProducts from "../Pages/AddProducts";
import EditProducts from "../Pages/EditProducts";
// import ProductsDetails from "../Pages/ProductsDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts/>,
        errorElement:<ErrorPage/>,
        children:[
            {
            path:'/',
            element:<Home/>,
            loader: () => fetch("http://localhost:3000/shoes"),
        },
        {
            path: "/products/:id",
            element: <ProductsDetails />,
            loader: ({ params }) =>
              fetch(`http://localhost:3000/shoes/${params.id}`),
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
        {
            path:'/registration',
            element:<Registration/>
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
                element:(<PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            ),    // note porbortite private route kore dashboard ke private router moddhe dite hobe
        },
            {
                path:'dashboard/all-products',
                element:(<PrivateRoute>
                    <AllProducts/>
                </PrivateRoute>
            ),    
        },
            {
                path:'dashboard/add-products',
                element:(<PrivateRoute>
                    <AddProducts/>
                </PrivateRoute>
            ),    
        },
            {
                path:'edit/:id',
                element:(<PrivateRoute>
                    <EditProducts/>
                </PrivateRoute>
            ),  
            loader:({params}) => fetch(`http://localhost:3000/shoes/${params.id}`),
        },
    ],
    },
]);
import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12 ">
          <div className="div col-span-2 bg-gray-300 min-h-screen p-12 text-center">
          <ul>
            
          <li className=" p-4 text rounded w-full my-2  hover:bg-sky-700 " >
                <Link to={'home'}>
                  Dashboard
                </Link>
              </li>
            
              <li className=" p-4 text rounded w-full my-2  hover:bg-sky-700 " >
              <Link to={'dashboard/all-products'}>
                  All Products
                </Link>
              </li>
            
            
              <li className=" p-4 text rounded w-full my-2  hover:bg-sky-700 ">
              <Link to={'dashboard/add-products'}>
                  Add Products
                </Link>
              </li>
            
            
              <li className=" p-4 text rounded w-full my-2  hover:bg-sky-700 ">
              <Link to={'/'}>
                  Home
                </Link>
              </li>
            
             
              <li className=" p-4 text rounded w-full my-2  hover:bg-sky-700 ">
      <Link to={'home'}>
                  Dashboard
                </Link>
              </li>
          </ul>
            
          </div>
          <div className="col-span-10 p-20">
            <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;
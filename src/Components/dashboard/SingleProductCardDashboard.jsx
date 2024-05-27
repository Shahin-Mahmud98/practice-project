/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line react/prop-types, no-unused-vars
const SingleProductCardDashboard = ({shoe,onDelete}) => {

  // const navigate = useNavigate();
// Alret

// alert

  // const deleteProduct = () => {
  //   toast('Delete SuccessFully')
  // }

    const {id,title,brand,price,description,image_url} = shoe;

    

    const handleDelete = async () => {
      await fetch(`http://localhost:3000/shoes/${id}`,{
            method:"DELETE",
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            onDelete(id);
            

        });
    };

    // useEffect(() => {
    //   if (shoe,onDelete) {
    //     navigate(from, { replace: true });
    //   }
    // }, [shoe,onDelete, navigate]);
    

    return (
        
           <div className=" card w-96 bg-base-100 shadow-xl ">
  <figure><img src={image_url}/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h3 className="text-xl font-semibold">{brand}</h3>
    <h3 className="text-xl font-semibold">${price}</h3>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-rose-500 text-white">
      <Link to={`/products/${id}`}>See Details</Link>
       </button>
       <button className="btn bg-green-600 text-white">
            <Link to={`/dashboard/edit/${id}`}>Edit</Link>
          </button>
      <button  onClick={handleDelete} className="btn bg-red-500 text-white">
      Delete
       </button>
    </div>
  </div>
  {/* <ToastContainer/> */}
</div>
       
    );
};

export default SingleProductCardDashboard;
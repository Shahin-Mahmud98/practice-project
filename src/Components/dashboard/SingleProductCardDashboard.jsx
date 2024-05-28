import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line react/prop-types, no-unused-vars

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const navigate = useNavigate();

  // eslint-disable-next-line react/prop-types
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    if (confirm('Are you sure? Delete the Product')) {
      try {
        const response = await fetch(`http://localhost:3000/shoes/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          onDelete(id);
          toast.success('Deleted successfully');
          navigate('/dashboard', { replace: true }); // Navigate to a different route after deletion
        } else {
          toast.error('Delete failed');
        }
      } catch (error) {
        console.error('Error deleting the product:', error);
        toast.error('Delete failed');
      }
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image_url} alt={title} /></figure>
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
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleProductCardDashboard;












































/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import { useEffect } from "react";
// import { Link, useNavigate} from "react-router-dom";

// import {toast,ToastContainer} from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// // eslint-disable-next-line react/prop-types, no-unused-vars
// const SingleProductCardDashboard = ({shoe,onDelete}) => {

//   const navigate = useNavigate();
// ekhane upore
  // 
// Alret
// const deleteSuccess = async (shoe) => {
//   const response = await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
//     method: 'DELETE',
//   });

//   if (response.ok) {
//     alert('Are you sure? Delete the Product');
//     onDelete(shoe.id);
//     toast('Delete successfully');
//   } else {
//     toast('Delete failed');
//   }
// };

  

// alert

  // const deleteProduct = () => {
  //   toast('Delete SuccessFully')
  // }
// ekhane nich theke
    // const {id,title,brand,price,description,image_url} = shoe;

    

    // const handleDelete = async () => {
    //   await fetch(`http://localhost:3000/shoes/${id}`,{
    //         method:"DELETE",
    //     })
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         onDelete(id);
    //         if (response.ok) {
    //           navigate(from, { replace: true });
    //           alert('Are you sure? Delete the Product');
    //           onDelete(shoe.id);
    //           toast('Delete successfully');
    //         } else {
    //           toast('Delete failed');
    //         }

    //     });
    // };
    // ekhan porjonto

    // useEffect(() => {
    //   if (shoe,onDelete) {
    //     navigate(from, { replace: true });
    //   }
    // }, [shoe,onDelete, navigate]);
    

//     return (
        
//            <div className=" card w-96 bg-base-100 shadow-xl ">
//   <figure><img src={image_url}/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{title}</h2>
//     <h3 className="text-xl font-semibold">{brand}</h3>
//     <h3 className="text-xl font-semibold">${price}</h3>
//     <p>{description}</p>
//     <div className="card-actions justify-end">
//       <button className="btn bg-rose-500 text-white">
//       <Link to={`/products/${id}`}>See Details</Link>
//        </button>
//        <button className="btn bg-green-600 text-white">
//             <Link to={`/dashboard/edit/${id}`}>Edit</Link>
//           </button>
//       <button  onClick={handleDelete} className="btn bg-red-500 text-white">
//       Delete
//        </button>
//     </div>
//   </div>
//   <ToastContainer/>
// </div>

//     );
// };

// export default SingleProductCardDashboard;
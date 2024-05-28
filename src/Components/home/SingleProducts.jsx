/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const SingleProducts = ({shoe}) => {

 
  // eslint-disable-next-line no-unused-vars
  const {id,title,brand,price,description,image_url} = shoe;

    return (
        
           <div className="auto-rows-auto  card w-96 bg-base-100 shadow-xl ">
  <figure><img src={image_url}/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h3 className="text-xl font-semibold">{brand}</h3>
    <h3 className="text-xl font-semibold">${price}</h3>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">
      <Link to={`/products/${id}`}>See Details</Link>
       </button>
    </div>
  </div>
</div>
       
    );
};

export default SingleProducts;
import { useEffect, useState } from "react";

import SingleProductCardDashboard from "../Components/dashboard/SingleProductCardDashboard";


const AllProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/shoes/")
        .then((res) => res.json())
        .then((data )=> setProducts(data));
    },[]);

    const handleDelete = (id) => {
        setProducts(products.filter(product => product.id !==id));
    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">All Products</h1>
            <div className="my-12 flex flex-wrap gap-2">
            {
                // eslint-disable-next-line no-undef
                products.map(shoe => <SingleProductCardDashboard key={shoe.id} shoe={shoe} onDelete={handleDelete}
                />)
            }
            </div>
        </div>
    );
};

export default AllProducts;
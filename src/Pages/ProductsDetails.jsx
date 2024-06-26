import { useLoaderData } from "react-router-dom";


const ProductsDetails = () => {
    const shoe = useLoaderData();

    const {brand,description,image_url,price,title} = shoe;
    
    return (

        <div>
           
            <h1 className="text-2xl text-center fomt-bold">{title}</h1>
            <img className="h-[500px]" src={image_url} alt="product image" />
            <h3 className="text-2xl font-semibold">{brand}</h3>
            <h3 className="text-2xl font-semibold">$$ {price}</h3>
            <p className="text-lg font-light">{description}</p>
        </div>
    );
};

export default ProductsDetails;
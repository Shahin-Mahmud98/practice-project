import SingleProducts from "./SingleProducts";


const Products = () => {
    return (
        <div >
            <div className="my-8 text-2xl font-bold text-center">Our Products</div>
            <div className="flex gap-2 px-20 justify-center items-center">
            <SingleProducts/>
            <SingleProducts/>
            <SingleProducts/>
            </div>
        </div>
    );
};

export default Products;
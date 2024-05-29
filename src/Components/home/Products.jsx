import SingleProducts from "./SingleProducts";


// eslint-disable-next-line react/prop-types
const Products = ({data}) => {
    console.log(data)
    return (
        <div >
            <div className="my-8 text-5xl font-bold text-center">Our Products</div>
            <div className=" my-12 flex flex-wrap gap-6 p-4 px-20 justify-center ">
           {
            // eslint-disable-next-line react/prop-types
            data.map((shoe)=><SingleProducts key={shoe.id} shoe={shoe}/>
        )
           }
            </div>
        </div>
    );
};

export default Products;


import SingleProducts from "./SingleProducts";


// eslint-disable-next-line react/prop-types
const Products = ({data}) => {
    console.log(data)
    return (
        <div >
            <div className="my-8 text-5xl font-bold text-center">Our Products</div>
            <div className=" gap-2 px-20 w-full h-full p-4 justify-center items-center flex flex-wrap ">
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
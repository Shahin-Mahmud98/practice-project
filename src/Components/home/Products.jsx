import SingleProducts from "./SingleProducts";


// eslint-disable-next-line react/prop-types
const Products = ({data}) => {
    console.log(data)
    return (
        <div >
            <div className="my-8 text-2xl font-bold text-center">Our Products</div>
            <div className="flex gap-2 px-20 justify-center items-center  flex-wrap">
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
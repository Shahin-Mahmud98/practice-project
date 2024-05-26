
import { useLoaderData } from "react-router-dom";
import Accodian from "../Components/home/Accodian";
import Banner from "../Components/home/Banner";
import Products from "../Components/home/Products";
import About from "./About";


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner/>
            <Products data={data}/>
            <About/>
            <Accodian/>

        </div>
    );
};

export default Home;
import Accodian from "../Components/home/Accodian";
import Banner from "../Components/home/Banner";
import Products from "../Components/home/Products";
import About from "./About";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <About/>
            <Accodian/>

        </div>
    );
};

export default Home;
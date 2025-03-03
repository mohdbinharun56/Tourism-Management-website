import { SliderControls, TileSlider } from "@boxslider/react";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import Banner from "../../sharedComponents/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="absolute mt-20 -z-10">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;
import { SliderControls, TileSlider } from "@boxslider/react";
import Navbar from "../../sharedComponents/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="absolute w-full mt-20 -z-10">
                <div className="w-full">
                    <SliderControls className="mx-auto" style={{ width: '80%', height: '600px' }}>
                        <TileSlider style={{ width: '80%', position: 'absolute', height: '600px' }} autoScroll>
                            <div className=" w-full">
                                <img src="https://i.ibb.co.com/kVMRxyBz/banner1.jpg" alt="banner1" border="0" className="w-full h-[600px]" />
                            </div>
                            <div className=" w-full">
                                <img src="https://i.ibb.co.com/Z18Bf008/photo-1617280325974-f9c5721a4862.jpg" alt="banner1" border="0" className="w-full h-[600px]" />
                            </div>
                            <div className=" w-full">
                                <img src="https://i.ibb.co.com/8D9B15pM/premium-photo-1677002240252-af3f88114efc.jpg" alt="banner1" border="0" className="w-full h-[600px]" />
                            </div>
                            <div className=" w-full">
                                <img src="https://i.ibb.co.com/hF1jBMpy/photo-1598751337485-0d57b0c50b83.jpg" alt="banner1" border="0" className="w-full h-[600px]" />
                            </div>
                        </TileSlider>
                    </SliderControls>
                </div>
            </div>
        </div>
    );
};

export default Home;

const Banner = () => {
    return (
        <div className="carousel w-full min-h-screen" >
            <div id="slide1" className="carousel-item relative w-full">
                <div className=" w-full">
                    <img src="https://i.ibb.co.com/kVMRxyBz/banner1.jpg" alt="banner1" border="0" className="w-full h-[600px]" />
                    <p className="relative font-bold text-2xl lg:text-7xl -top-52 left-40 text-white">Rangamati</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className=" w-full">
                    <img src="https://i.ibb.co.com/Z18Bf008/photo-1617280325974-f9c5721a4862.jpg" alt="banner1" border="0" className="w-full h-[600px]" />
                    <p className="relative font-bold text-2xl lg:text-7xl -top-52 left-40 text-white">Saint-Martin</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className=" w-full">
                    <img src="https://i.ibb.co.com/8D9B15pM/premium-photo-1677002240252-af3f88114efc.jpg" alt="banner1" border="0" className="w-full h-[600px]" />
                    <p className="relative font-bold text-2xl lg:text-7xl -top-52 left-40 text-white">Bandorban</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className=" w-full">
                    <img src="https://i.ibb.co.com/hF1jBMpy/photo-1598751337485-0d57b0c50b83.jpg" alt="banner1" border="0" className="w-full h-[600px]" />
                    <p className="relative font-bold text-2xl lg:text-7xl -top-52 left-40 text-white">Kaptai</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
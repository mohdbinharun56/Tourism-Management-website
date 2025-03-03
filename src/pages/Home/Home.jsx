import Banner from "../../sharedComponents/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* Tourist Spot Card*/}
            <div className="mx-20">
                <h1 className="font-bold text-2xl md:text-4xl mb-5 text-center">The Journey Of A Lifetime: Create Unforgettable Memories</h1>
                <p className="text base md:text-lg mb-10 text-center w-1/2 mx-auto">Get ready to embark on the journey of a lifetime! Our travel agency is dedicated to crafting unforgettable experiences that will leave you with lifelong memories.</p>
                {/* Fetch all add tourist spot */}
            </div>
        </div>
    );
};

export default Home;
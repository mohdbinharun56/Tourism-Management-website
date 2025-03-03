
const TouristSpot = ({ touristsSpot }) => {
    const { spotName, location, countryName, visitors, image, description } = touristsSpot;
    return (
        <div className="card bg-base-100 image-full h-96 shadow-md">
            <figure>
                <img
                    src={image}
                    alt={spotName}
                    className="w-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold mx-auto">{spotName}</h2>
                <p className="mt-3 text-base">{`${description.slice(0, 100)}`}</p>
                <div className="flex items-center mt-3 text-lg">
                    <p><span className="font-bold">Country:</span> {countryName}</p>
                    <p><span className="font-bold">Location:</span> {location}</p>
                </div>
                <p className=""><span className="font-bold text-base">Total Visitors:</span> {visitors}</p>
                <button className="btn btn-accent">View Details</button>
            </div>
        </div>
    );
};

export default TouristSpot;